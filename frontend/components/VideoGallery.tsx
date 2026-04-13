'use client';

import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { getVideoCategories, getVideos } from '@/lib/db';
import type { VideoCategory, Video } from '@/types';

export default function VideoGallery() {
  const [categories, setCategories] = useState<VideoCategory[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [cats, vids] = await Promise.all([
          getVideoCategories(),
          getVideos(),
        ]);
        setCategories(cats as any);
        setVideos(vids as any);
      } catch (error) {
        // Fallback sample data
        setCategories([
          { id: '1', name: 'Todos', slug: 'all', order: 0, is_active: true, created: '', updated: '' },
          { id: '2', name: 'Podcast - Innovación Pedagógica', slug: 'podcast-innovacion', order: 1, is_active: true, created: '', updated: '' },
          { id: '3', name: 'Podcast - Internacionalización', slug: 'podcast-internacionalizacion', order: 2, is_active: true, created: '', updated: '' },
          { id: '4', name: 'Entrevistas', slug: 'entrevistas', order: 3, is_active: true, created: '', updated: '' },
        ]);
        
        setVideos([
          {
            id: '1',
            title: 'Episodio 1: Innovación en el Aula',
            youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            description: 'Primer episodio sobre innovaciones pedagógicas',
            embed_id: 'dQw4w9WgXcQ',
            category: '2',
            published_date: '2025-01-15',
            order: 1,
            is_featured: true,
            created: '',
            updated: '',
          },
          {
            id: '2',
            title: 'Episodio 2: Internacionalización',
            youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            description: 'La importancia de la internacionalización en ULEAM',
            embed_id: 'dQw4w9WgXcQ',
            category: '3',
            published_date: '2025-02-01',
            order: 2,
            is_featured: true,
            created: '',
            updated: '',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  if (loading) {
    return (
      <section id="videos" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-uleam-blue">Cargando videos...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-uleam-blue mb-4">
            Videos y Contenido Multimedia
          </h2>
          <div className="w-24 h-1 bg-uleam-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestra colección de podcasts, entrevistas y materiales educativos
          </p>
        </div>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-uleam-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-uleam-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 text-lg">No hay videos en esta categoría aún</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/videos"
            className="inline-block px-8 py-4 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition-all transform hover:scale-105"
          >
            Ver Todos los Videos →
          </a>
        </div>
      </div>
    </section>
  );
}
