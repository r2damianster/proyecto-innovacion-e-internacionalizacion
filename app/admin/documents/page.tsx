import Link from 'next/link';

const documents = [
  {
    id: 'ficha-presupuestaria',
    title: 'Ficha Presupuestaria 2025',
    filename: '2025_FICHA_PRESUPUESTARIA.pdf',
    description: 'Documento oficial de la ficha presupuestaria del proyecto 2025',
    icon: '💰',
  },
  {
    id: 'proyecto-actualizado',
    title: 'Proyecto Actualizado 2025',
    filename: '2025_ProyectoActualizado.pdf',
    description: 'Versión actualizada del proyecto de innovaciones pedagógicas e internacionalización',
    icon: '📄',
  },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documentos del Proyecto</h1>
          <p className="mt-2 text-sm text-gray-600">
            Acceso exclusivo para administradores - Documentos confidenciales del proyecto
          </p>
        </div>
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          ← Volver al Dashboard
        </Link>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Confidencial:</strong> Estos documentos son exclusivos del equipo administrativo. 
              No compartir externamente.
            </p>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start space-x-4">
              <div className="text-5xl">{doc.icon}</div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{doc.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{doc.description}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={`/api/protected/assets/${doc.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-uleam-blue text-white rounded-lg hover:bg-blue-800 transition text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver PDF
                  </a>
                  <a
                    href={`/api/protected/assets/${doc.filename}`}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">ℹ️ Información</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Los archivos PDF se abren en una nueva pestaña para visualización</li>
          <li>• Use el botón "Descargar" para guardar una copia local</li>
          <li>• Estos documentos están protegidos y solo accesibles desde el panel de administración</li>
          <li>• Para agregar nuevos documentos, colóquelos en la carpeta <code className="bg-blue-100 px-2 py-0.5 rounded">/public/admin-assets/</code></li>
        </ul>
      </div>
    </div>
  );
}
