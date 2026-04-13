'use client';

import { useState } from 'react';

interface VideoProps {
  video: {
    id: string;
    title: string;
    youtube_url: string;
    description?: string;
    embed_id: string;
    published_date: string;
    category?: any;
  };
}

export default function VideoCard({ video }: VideoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Embed */}
      <div className="relative aspect-video bg-gray-900">
        <iframe
          src={`https://www.youtube.com/embed/${video.embed_id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        {video.category?.name && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
              {video.category.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-bold text-uleam-blue mb-2 line-clamp-2">
          {video.title}
        </h3>

        {/* Description */}
        {video.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>
        )}

        {/* Date */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {new Date(video.published_date).toLocaleDateString('es-EC', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* YouTube Link */}
          <a
            href={video.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
