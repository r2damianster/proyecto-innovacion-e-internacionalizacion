'use client';

import { useState, useEffect } from 'react';
import { getPublications, type Publication } from '@/lib/pocketbase';

export default function PublicationsSection() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const data = await getPublications();
        setPublications(data as any);
      } catch (error) {
        // Fallback sample data
        setPublications([
          {
            id: '1',
            title: 'Innovaciones Pedagógicas en la Educación Superior Ecuatoriana',
            authors: 'Rodríguez, A., Villafuerte, J.',
            abstract: 'Este artículo presenta los resultados de la investigación sobre la implementación de metodologías innovadoras en el aula universitaria.',
            publication_date: '2025-03-15',
            doi_link: 'https://doi.org/10.xxxx/xxxxx',
            type: 'article',
            created: '',
            updated: '',
          },
          {
            id: '2',
            title: 'Internacionalización de la Educación: Experiencias desde ULEAM',
            authors: 'Villafuerte, J., Rodríguez, A.',
            abstract: 'Análisis de las estrategias de internacionalización implementadas en la Universidad Laica Eloy Alfaro de Manabí.',
            publication_date: '2025-02-10',
            doi_link: 'https://doi.org/10.xxxx/xxxxx',
            type: 'article',
            created: '',
            updated: '',
          },
          {
            id: '3',
            title: 'Podcast Educativo: Una Herramienta de Innovación',
            authors: 'Rodríguez, A.',
            abstract: 'Exploración del uso de podcasts como herramienta pedagógica en la educación superior.',
            publication_date: '2025-01-20',
            type: 'conference',
            created: '',
            updated: '',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  if (loading) {
    return (
      <section id="publicaciones" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-uleam-blue">Cargando publicaciones...</div>
        </div>
      </section>
    );
  }

  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      article: 'Artículo Científico',
      conference: 'Conferencia',
      book: 'Libro/Capítulo',
      other: 'Otro',
    };
    return types[type] || type;
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      article: 'bg-blue-100 text-blue-700',
      conference: 'bg-purple-100 text-purple-700',
      book: 'bg-green-100 text-green-700',
      other: 'bg-gray-100 text-gray-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="publicaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-uleam-blue mb-4">
            Publicaciones Científicas
          </h2>
          <div className="w-24 h-1 bg-uleam-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investigación y producción académica del proyecto
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-uleam-gold"
            >
              {/* Type Badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(pub.type)}`}>
                  {getTypeLabel(pub.type)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-uleam-blue mb-2">
                {pub.title}
              </h3>

              {/* Authors */}
              <p className="text-gray-700 font-medium mb-3">
                {pub.authors}
              </p>

              {/* Abstract */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {pub.abstract}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {new Date(pub.publication_date).toLocaleDateString('es-EC', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  {pub.doi_link && (
                    <a
                      href={pub.doi_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-uleam-blue text-white text-sm font-medium rounded-lg hover:bg-uleam-blue/90 transition"
                    >
                      Ver Publicación →
                    </a>
                  )}
                  {pub.pdf_file && (
                    <a
                      href={pub.pdf_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                      </svg>
                      PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {publications.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-gray-600 text-lg">No hay publicaciones aún</p>
          </div>
        )}

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="/publicaciones"
            className="inline-block px-8 py-4 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition-all transform hover:scale-105"
          >
            Ver Todas las Publicaciones →
          </a>
        </div>
      </div>
    </section>
  );
}
