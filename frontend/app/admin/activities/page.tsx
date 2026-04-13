'use client';

import { useState, useEffect } from 'react';
import DataTable from '@/components/admin/DataTable';
import { getActivities, createActivity, updateActivity, deleteActivity } from '@/lib/db';
import type { Activity } from '@/types';

export default function AdminActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: new Date().toISOString().split('T')[0],
    category: 'podcast',
  });

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      const records = await getActivities();
      setActivities(records as any);
    } catch (error) {
      console.error('Error loading activities:', error);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      event_date: new Date().toISOString().split('T')[0],
      category: 'podcast',
    });
    setEditingActivity(null);
    setShowForm(false);
  };

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    setFormData({
      title: activity.title,
      description: activity.description || '',
      event_date: activity.event_date,
      category: activity.category,
    });
    setShowForm(true);
  };

  const handleDelete = async (activity: Activity) => {
    try {
      await deleteActivity(activity.id);
      loadActivities();
    } catch (error) {
      console.error('Error deleting activity:', error);
      alert('Error al eliminar la actividad.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingActivity) {
        await updateActivity(editingActivity.id, formData);
      } else {
        await createActivity(formData as any);
      }

      resetForm();
      loadActivities();
    } catch (error) {
      console.error('Error saving activity:', error);
      alert('Error al guardar la actividad.');
    }
  };

  const columns = [
    { key: 'title', label: 'Título' },
    {
      key: 'category',
      label: 'Categoría',
      render: (item: Activity) => (
        <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-medium capitalize">
          {item.category}
        </span>
      ),
    },
    {
      key: 'event_date',
      label: 'Fecha',
      render: (item: Activity) => (
        <span className="text-sm text-gray-600">
          {new Date(item.event_date).toLocaleDateString('es-EC')}
        </span>
      ),
    },
  ];

  if (showForm) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-uleam-blue">
            {editingActivity ? 'Editar Actividad' : 'Nueva Actividad'}
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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha del evento</label>
                <input
                  type="date"
                  value={formData.event_date}
                  onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
                >
                  <option value="podcast">Podcast</option>
                  <option value="taller">Taller</option>
                  <option value="evento">Evento</option>
                  <option value="reunion">Reunión</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition"
            >
              {editingActivity ? 'Actualizar' : 'Crear'}
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
      title="Actividades"
      columns={columns}
      data={activities}
      loading={loading}
      onAdd={() => setShowForm(true)}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
