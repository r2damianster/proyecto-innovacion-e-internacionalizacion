'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/components/admin/DataTable';
import PocketBase from 'pocketbase';

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

interface Video {
  id: string;
  title: string;
  youtube_url: string;
  description?: string;
  embed_id: string;
  category: string;
  published_date: string;
  order: number;
  is_featured: boolean;
  category_name?: string;
}

interface Category {
  id: string;
  name: string;
}

export default function AdminVideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    youtube_url: '',
    description: '',
    category: '',
    published_date: new Date().toISOString().split('T')[0],
    order: 0,
    is_featured: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const pb = new PocketBase(PB_URL);
      const [videosRes, catsRes] = await Promise.all([
        pb.collection('videos').getFullList({ sort: 'order', expand: 'category' }),
        pb.collection('video_categories').getFullList({ sort: 'order' }),
      ]);
      setVideos(videosRes as any);
      setCategories(catsRes as any);
    } catch (error) {
      console.error('Error loading videos:', error);
      setVideos([
        {
          id: '1',
          title: 'Episodio 1: Innovación en el Aula',
          youtube_url: 'https://www.youtube.com/watch?v=example1',
          description: 'Primer episodio',
          embed_id: 'example1',
          category: 'cat1',
          published_date: '2025-01-15',
          order: 1,
          is_featured: true,
        },
      ]);
      setCategories([
        { id: 'cat1', name: 'Podcast - Innovación' },
        { id: 'cat2', name: 'Podcast - Internacionalización' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      youtube_url: '',
      description: '',
      category: categories[0]?.id || '',
      published_date: new Date().toISOString().split('T')[0],
      order: 0,
      is_featured: false,
    });
    setEditingVideo(null);
    setShowForm(false);
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      youtube_url: video.youtube_url,
      description: video.description || '',
      category: video.category,
      published_date: video.published_date,
      order: video.order,
      is_featured: video.is_featured,
    });
    setShowForm(true);
  };

  const handleDelete = async (video: Video) => {
    try {
      const pb = new PocketBase(PB_URL);
      await pb.collection('videos').delete(video.id);
      loadData();
    } catch (error) {
      console.error('Error deleting video:', error);
      alert('Error al eliminar. Verifica que PocketBase esté configurado.');
    }
  };

  const extractEmbedId = (url: string): string => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);
    return match?.[1] || '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const embed_id = extractEmbedId(formData.youtube_url);
    
    if (!embed_id) {
      alert('URL de YouTube no válida');
      return;
    }

    try {
      const pb = new PocketBase(PB_URL);
      const data = { ...formData, embed_id };
      
      if (editingVideo) {
        await pb.collection('videos').update(editingVideo.id, data);
      } else {
        await pb.collection('videos').create(data);
      }
      
      resetForm();
      loadData();
    } catch (error) {
      console.error('Error saving video:', error);
      alert('Error al guardar. Verifica que PocketBase esté configurado.');
    }
  };

  const columns = [
    { key: 'title', label: 'Título' },
    {
      key: 'category',
      label: 'Categoría',
      render: (item: Video) => (
        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
          {item.category_name || 'Sin categoría'}
        </span>
      ),
    },
    {
      key: 'published_date',
      label: 'Fecha',
      render: (item: Video) => (
        <span className="text-sm text-gray-600">
          {new Date(item.published_date).toLocaleDateString('es-EC')}
        </span>
      ),
    },
    {
      key: 'is_featured',
      label: 'Destacado',
      render: (item: Video) => (
        <span className={`px-2 py-1 rounded text-xs font-bold ${item.is_featured ? 'bg-uleam-gold text-uleam-blue' : 'bg-gray-200 text-gray-700'}`}>
          {item.is_featured ? 'Sí' : 'No'}
        </span>
      ),
    },
  ];

  if (showForm) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-uleam-blue">
            {editingVideo ? 'Editar Video' : 'Nuevo Video'}
          </h2>
          <button
            onClick={resetForm}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            ← Volver
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-md max-w-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                placeholder="Título del video"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL de YouTube *</label>
              <input
                type="url"
                value={formData.youtube_url}
                onChange={(e) => setFormData({ ...formData, youtube_url: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                placeholder="https://www.youtube.com/watch?v=..."
              />
              <p className="text-xs text-gray-500 mt-1">Pega la URL completa del video de YouTube</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none resize-none"
                placeholder="Descripción opcional del video"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoría *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                ¿No hay categorías? <a href="/admin/categories" className="text-uleam-blue underline">Crear categorías</a>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de publicación</label>
                <input
                  type="date"
                  value={formData.published_date}
                  onChange={(e) => setFormData({ ...formData, published_date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Orden</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-gray-700">Marcar como destacado</span>
              </label>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition"
            >
              {editingVideo ? 'Actualizar' : 'Crear'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <DataTable
      title="Videos"
      columns={columns}
      data={videos}
      loading={loading}
      onAdd={() => {
        if (categories.length === 0) {
          alert('Primero debes crear categorías de video');
          return;
        }
        setShowForm(true);
      }}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
