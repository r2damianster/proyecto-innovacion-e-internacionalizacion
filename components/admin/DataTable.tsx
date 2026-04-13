'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DataTableProps<T> {
  title: string;
  columns: Array<{
    key: string;
    label: string;
    render?: (item: T) => React.ReactNode;
  }>;
  data: T[];
  loading: boolean;
  onAdd: () => void;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  actionsLabel?: string;
}

export default function DataTable<T extends { id: string }>({
  title,
  columns,
  data,
  loading,
  onAdd,
  onEdit,
  onDelete,
  actionsLabel = 'Acciones',
}: DataTableProps<T>) {
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDelete = (item: T) => {
    if (deleteConfirm === item.id) {
      onDelete(item);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(item.id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Cargando datos...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-uleam-blue">{title}</h2>
        <button
          onClick={onAdd}
          className="px-6 py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition"
        >
          + Nuevo
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">{actionsLabel}</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-gray-500">
                  No hay registros aún. Haz clic en "Nuevo" para agregar.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4">
                      {col.render ? col.render(item) : (
                        <span className="text-sm text-gray-700">
                          {(item as any)[col.key] || '-'}
                        </span>
                      )}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(item)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition text-sm font-medium"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className={`px-3 py-1 rounded transition text-sm font-medium ${
                          deleteConfirm === item.id
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {deleteConfirm === item.id ? '¿Seguro?' : 'Eliminar'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
