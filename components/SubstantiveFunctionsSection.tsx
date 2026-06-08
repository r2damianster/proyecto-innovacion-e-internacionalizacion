'use client';

import { useState, useEffect } from 'react';
import { getVideos } from '@/lib/db';
import type { Video } from '@/types';

interface FunctionInfo {
  key: string;
  title: string;
  description: string;
  circleClass: string;
  textClass: string;
  position: string;
  showEpisodes: boolean;
}

const FUNCTIONS: FunctionInfo[] = [
  {
    key: 'docencia',
    title: 'Docencia',
    description: 'Estrategias, contenidos y experiencias de aula que nutren el aprendizaje.',
    circleClass: 'bg-uleam-blue/40',
    textClass: 'text-uleam-blue',
    position: 'top-0 left-1/2 -translate-x-1/2',
    showEpisodes: true,
  },
  {
    key: 'investigacion',
    title: 'Investigación',
    description: 'Hallazgos y procesos investigativos del equipo PINE — su evidencia principal son las publicaciones científicas del proyecto.',
    circleClass: 'bg-uleam-gold/50',
    textClass: 'text-yellow-700',
    position: 'bottom-0 right-0',
    showEpisodes: false,
  },
  {
    key: 'vinculacion',
    title: 'Vinculación con la Sociedad',
    description: 'Producciones junto al proyecto de vinculación de Pedagogía de Idiomas Nacionales y Extranjeros, conectando la academia con la comunidad.',
    circleClass: 'bg-orange-400/40',
    textClass: 'text-orange-700',
    position: 'bottom-0 left-0',
    showEpisodes: true,
  },
];

export default function SubstantiveFunctionsSection() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos().then((vids) => setVideos(vids as Video[])).catch(() => setVideos([]));
  }, []);

  const videosByFunction = (key: string) => videos.filter((v) => v.tags?.includes(key));

  return (
    <section id="funciones-sustantivas" className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-uleam-blue mb-4">
            Integración de las Funciones Sustantivas
          </h2>
          <div className="w-24 h-1 bg-uleam-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Docencia, Investigación y Vinculación con la Sociedad no caminan por separado:
            se entrelazan en el quehacer cotidiano del proyecto PINE.
          </p>
        </div>

        {/* Venn diagram */}
        <div className="relative mx-auto mb-12" style={{ width: '100%', maxWidth: '420px', aspectRatio: '1 / 1' }}>
          {FUNCTIONS.map((fn) => (
            <div
              key={fn.key}
              className={`absolute ${fn.position} w-[65%] h-[65%] rounded-full ${fn.circleClass} flex items-start justify-center pt-6 text-center px-6`}
              style={{ mixBlendMode: 'multiply' }}
            >
              <span className={`text-base md:text-lg font-bold ${fn.textClass}`}>{fn.title}</span>
            </div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs md:text-sm font-semibold text-gray-500 bg-white/80 px-3 py-1 rounded-full">
              Proyecto PINE
            </span>
          </div>
        </div>

        {/* Descriptions + linked episodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FUNCTIONS.map((fn) => {
            const fnVideos = fn.showEpisodes ? videosByFunction(fn.key) : [];
            return (
              <div key={fn.key} className="bg-white rounded-xl shadow-md p-6">
                <h3 className={`text-lg font-bold mb-2 ${fn.textClass}`}>{fn.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{fn.description}</p>

                {fn.showEpisodes && fnVideos.length > 0 && (
                  <ul className="space-y-2">
                    {fnVideos.map((video) => (
                      <li key={video.id}>
                        <a
                          href={video.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-2 text-sm text-gray-700 hover:text-uleam-blue transition-colors"
                        >
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 fill-current text-red-600" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          <span className="line-clamp-2 group-hover:underline">{video.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
