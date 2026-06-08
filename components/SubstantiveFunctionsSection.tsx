'use client';

import { useState, useEffect } from 'react';
import { getVideos } from '@/lib/db';
import type { Video } from '@/types';

interface FunctionInfo {
  key: string;
  title: string;
  description: string;
  accent: string;
  badge: string;
  icon: JSX.Element;
}

const FUNCTIONS: FunctionInfo[] = [
  {
    key: 'docencia',
    title: 'Docencia',
    description: 'Productos generados desde la práctica del aula: estrategias, contenidos y experiencias docentes que nutren el aprendizaje.',
    accent: 'border-uleam-blue',
    badge: 'bg-uleam-blue/10 text-uleam-blue',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 9.5L4.5 8.6 12 4.7l7.5 3.9-7.5 3.9zM5 13.18v4.32L12 21l7-3.5v-4.32l-7 3.82-7-3.82z" />
      </svg>
    ),
  },
  {
    key: 'investigacion',
    title: 'Investigación',
    description: 'Episodios que difunden hallazgos, reflexiones y procesos investigativos del equipo PINE hacia la comunidad académica y general.',
    accent: 'border-uleam-gold',
    badge: 'bg-uleam-gold/20 text-yellow-700',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1015 15.5l.27.28v.79l5 4.99L21.49 19l-4.99-5zm-6 0A4.5 4.5 0 1114 9.5 4.5 4.5 0 019.5 14z" />
      </svg>
    ),
  },
  {
    key: 'vinculacion',
    title: 'Vinculación con la Sociedad',
    description: 'Contenidos producidos junto al proyecto de vinculación de la carrera de Pedagogía de Idiomas Nacionales y Extranjeros, conectando la academia con la comunidad.',
    accent: 'border-orange-400',
    badge: 'bg-orange-100 text-orange-700',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
      </svg>
    ),
  },
];

export default function SubstantiveFunctionsSection() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos().then((vids) => setVideos(vids as Video[])).catch(() => setVideos([]));
  }, []);

  const videosByFunction = (key: string) =>
    videos.filter((v) => v.tags?.includes(key));

  const hasAnyTagged = FUNCTIONS.some((fn) => videosByFunction(fn.key).length > 0);

  if (!hasAnyTagged) return null;

  return (
    <section id="funciones-sustantivas" className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-uleam-blue mb-4">
            Integración de las Funciones Sustantivas
          </h2>
          <div className="w-24 h-1 bg-uleam-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros podcasts no solo divulgan: son evidencia viva de cómo Docencia, Investigación
            y Vinculación con la Sociedad se entrelazan en el quehacer del proyecto PINE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FUNCTIONS.map((fn) => {
            const fnVideos = videosByFunction(fn.key);
            return (
              <div
                key={fn.key}
                className={`bg-white rounded-xl shadow-lg border-t-4 ${fn.accent} p-6 flex flex-col`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${fn.badge}`}>
                  {fn.icon}
                </div>
                <h3 className="text-xl font-bold text-uleam-blue mb-2">{fn.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{fn.description}</p>

                {fnVideos.length > 0 ? (
                  <ul className="space-y-3">
                    {fnVideos.map((video) => (
                      <li key={video.id}>
                        <a
                          href={video.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="mt-0.5 flex-shrink-0 text-red-600">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </span>
                          <span className="text-sm font-medium text-gray-800 group-hover:text-uleam-blue transition-colors line-clamp-2">
                            {video.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400 italic">Próximamente nuevos episodios</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
