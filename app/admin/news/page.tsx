'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/components/admin/DataTable';
import { getNews, createNews, updateNews, deleteNews } from '@/lib/db';
import type { News } from '@/types';

export default function AdminNewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    published_date: new Date().toISOString().split('T')[0],
    is_featured: false,
    slug: '',
  });

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const records = await getNews();
      setNews(records as any);
    } catch (error) {
      console.error('Error loading news:', error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      published_date: new Date().toISOString().split('T')[0],
      is_featured: false,
      slug: '',
    });
    setEditingNews(null);
    setShowForm(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleEdit = (item: News) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      content: item.content,
      published_date: item.published_date,
      is_featured: item.is_featured,
      slug: item.slug,
    });
    setShowForm(true);
  };

  const handleDelete = async (item: News) => {
    try {
      await deleteNews(item.id);
      loadNews();
    } catch (error) {
      console.error('Error deleting news:', error);
      alert('Error al eliminar noticia');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = formData.slug || generateSlug(formData.title);

    try {
      const data = { ...formData, slug };

      if (editingNews) {
        await updateNews(editingNews.id, data as any);
      } else {
        await createNews(data as any);
      }

      resetForm();
      loadNews();
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Error al guardar noticia');
    }
  };

  const columns = [
    { key: 'title', label: 'Título' },
    {
      key: 'published_date',
      label: 'Fecha',
      render: (item: News) => (
        <span className="text-sm text-gray-600">
          {new Date(item.published_date).toLocaleDateString('es-EC')}
        </span>
      ),
    },
    {
      key: 'is_featured',
      label: 'Destacado',
      render: (item: News) => (
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
            {editingNews ? 'Editar Noticia' : 'Nueva Noticia'}
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
                onChange={(e) => {
                  const title = e.target.value;
                  setFormData({ ...formData, title, slug: generateSlug(title) });
                }}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                placeholder="se-genera-automaticamente"
              />
              <p className="text-xs text-gray-500 mt-1">Se genera automáticamente del título</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contenido *</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none resize-none"
                placeholder="Escribe el contenido de la noticia aquí..."
              />
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

              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium text-gray-700">Destacada</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition"
            >
              {editingNews ? 'Actualizar' : 'Crear'}
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
      title="Noticias"
      columns={columns}
      data={news}
      loading={loading}
      onAdd={() => setShowForm(true)}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
