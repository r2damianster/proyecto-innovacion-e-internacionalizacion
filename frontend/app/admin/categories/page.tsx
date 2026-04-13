'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/components/admin/DataTable';
import PocketBase from 'pocketbase';

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  order: number;
  is_active: boolean;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    order: 0,
    is_active: true,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const pb = new PocketBase(PB_URL);
      const records = await pb.collection('video_categories').getFullList({ sort: 'order' });
      setCategories(records as any);
    } catch (error) {
      console.error('Error loading categories:', error);
      setCategories([
        {
          id: '1',
          name: 'Podcast - Innovación Pedagógica',
          slug: 'podcast-innovacion',
          description: 'Serie sobre innovaciones pedagógicas',
          order: 1,
          is_active: true,
        },
        {
          id: '2',
          name: 'Podcast - Internacionalización',
          slug: 'podcast-internacionalizacion',
          description: 'Serie sobre internacionalización',
          order: 2,
          is_active: true,
        },
        {
          id: '3',
          name: 'Entrevistas',
          slug: 'entrevistas',
          description: 'Entrevistas a investigadores',
          order: 3,
          is_active: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', slug: '', description: '', order: 0, is_active: true });
    setEditingCategory(null);
    setShowForm(false);
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      order: category.order,
      is_active: category.is_active,
    });
    setShowForm(true);
  };

  const handleDelete = async (category: Category) => {
    try {
      const pb = new PocketBase(PB_URL);
      await pb.collection('video_categories').delete(category.id);
      loadCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Error al eliminar. Verifica que PocketBase esté configurado.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const slug = formData.slug || generateSlug(formData.name);

    try {
      const pb = new PocketBase(PB_URL);
      const data = { ...formData, slug };
      
      if (editingCategory) {
        await pb.collection('video_categories').update(editingCategory.id, data);
      } else {
        await pb.collection('video_categories').create(data);
      }
      
      resetForm();
      loadCategories();
    } catch (error) {
      console.error('Error saving category:', error);
      alert('Error al guardar. Verifica que PocketBase esté configurado.');
    }
  };

  const columns = [
    { key: 'name', label: 'Nombre' },
    { key: 'slug', label: 'Slug' },
    {
      key: 'is_active',
      label: 'Estado',
      render: (item: Category) => (
        <span className={`px-2 py-1 rounded text-xs font-bold ${item.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'}`}>
          {item.is_active ? 'Activo' : 'Inactivo'}
        </span>
      ),
    },
    { key: 'order', label: 'Orden' },
  ];

  if (showForm) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-uleam-blue">
            {editingCategory ? 'Editar Categoría' : 'Nueva Categoría'}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  const name = e.target.value;
                  setFormData({ ...formData, name, slug: generateSlug(name) });
                }}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                placeholder="Ej: Podcast - Innovación Pedagógica"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                placeholder="podcast-innovacion"
              />
              <p className="text-xs text-gray-500 mt-1">Se genera automáticamente del nombre</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none resize-none"
                placeholder="Descripción opcional de la categoría"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Orden</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                />
              </div>

              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium text-gray-700">Activa</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition"
            >
              {editingCategory ? 'Actualizar' : 'Crear'}
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
      title="Categorías de Videos"
      columns={columns}
      data={categories}
      loading={loading}
      onAdd={() => setShowForm(true)}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
