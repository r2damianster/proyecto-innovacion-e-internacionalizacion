'use client';

import { useState } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    site_title: 'Innovaciones Pedagógicas e Internacionalización',
    site_subtitle: 'Universidad Laica Eloy Alfaro de Manabí',
    contact_email: 'arturo.rodriguez@uleam.edu.ec',
    facebook_url: 'https://www.facebook.com/uleam.edu.ec',
    twitter_url: 'https://twitter.com/uleam',
    instagram_url: 'https://www.instagram.com/uleam.edu.ec',
    youtube_url: 'https://www.youtube.com/@uleam',
    uleam_url: 'https://www.uleam.edu.ec',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: Save to PocketBase site_settings collection
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    alert('Configuración guardada (simulación - conectar con PocketBase)');
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-uleam-blue mb-2">Configuración del Sitio</h2>
        <p className="text-gray-600">Gestiona la información general del sitio</p>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
          Configuración guardada exitosamente
        </div>
      )}

      <div className="bg-white rounded-xl p-6 shadow-md max-w-3xl">
        <h3 className="text-xl font-bold text-uleam-blue mb-6">Información General</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Título del Sitio</label>
            <input
              type="text"
              value={settings.site_title}
              onChange={(e) => setSettings({ ...settings, site_title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
            <input
              type="text"
              value={settings.site_subtitle}
              onChange={(e) => setSettings({ ...settings, site_subtitle: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email de Contacto</label>
            <input
              type="email"
              value={settings.contact_email}
              onChange={(e) => setSettings({ ...settings, contact_email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-uleam-blue mb-6 mt-8">Redes Sociales</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
            <input
              type="url"
              value={settings.facebook_url}
              onChange={(e) => setSettings({ ...settings, facebook_url: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL</label>
            <input
              type="url"
              value={settings.twitter_url}
              onChange={(e) => setSettings({ ...settings, twitter_url: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
            <input
              type="url"
              value={settings.instagram_url}
              onChange={(e) => setSettings({ ...settings, instagram_url: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL</label>
            <input
              type="url"
              value={settings.youtube_url}
              onChange={(e) => setSettings({ ...settings, youtube_url: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sitio Web ULEAM</label>
            <input
              type="url"
              value={settings.uleam_url}
              onChange={(e) => setSettings({ ...settings, uleam_url: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue outline-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSave}
            className="w-full py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition"
          >
            Guardar Configuración
          </button>
        </div>
      </div>

      {/* PocketBase Setup Guide */}
      <div className="mt-8 bg-gradient-to-r from-primary-600 to-uleam-blue text-white rounded-xl p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">📚 Guía de Configuración de PocketBase</h3>
        <div className="space-y-3 text-sm">
          <p><strong>1. Descarga PocketBase:</strong></p>
          <p className="text-gray-200">Visita <a href="https://pocketbase.io/docs/" target="_blank" className="text-uleam-gold underline">pocketbase.io</a> y descarga la versión para tu sistema operativo</p>
          
          <p className="mt-4"><strong>2. Ejecuta PocketBase:</strong></p>
          <p className="text-gray-200">Descomprime y ejecuta: <code className="bg-black/20 px-2 py-1 rounded">./pocketbase serve --http=127.0.0.1:8090</code></p>
          
          <p className="mt-4"><strong>3. Accede al panel:</strong></p>
          <p className="text-gray-200">Abre <code className="bg-black/20 px-2 py-1 rounded">http://127.0.0.1:8090/_/</code> y crea tu cuenta admin</p>
          
          <p className="mt-4"><strong>4. Crea las colecciones:</strong></p>
          <p className="text-gray-200">Crea las 8 colecciones según el schema definido en QWEN.md</p>
          
          <p className="mt-4"><strong>5. Crea los usuarios:</strong></p>
          <p className="text-gray-200">Agrega los emails autorizados en la colección users</p>
        </div>
      </div>
    </div>
  );
}
