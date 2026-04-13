'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PocketBase from 'pocketbase';

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/admin/dashboard';

  useEffect(() => {
    try {
      const pb = new PocketBase(PB_URL);
      if (pb.authStore.isValid) {
        const authorizedEmails = [
          'arturo.rodriguez@uleam.edu.ec',
          'jhonny.villafuerte@uleam.edu.ec'
        ];
        
        if (authorizedEmails.includes(pb.authStore.model?.email || '')) {
          router.push('/admin/dashboard');
        }
      }
    } catch (err) {
      // Not logged in
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const pb = new PocketBase(PB_URL);
      const authData = await pb.collection('users').authWithPassword(email, password);

      const authorizedEmails = [
        'arturo.rodriguez@uleam.edu.ec',
        'jhonny.villafuerte@uleam.edu.ec'
      ];

      if (!authorizedEmails.includes(email)) {
        throw new Error('No autorizado. Solo el líder y colíder pueden acceder.');
      }

      document.cookie = `pb_auth=${JSON.stringify({
        token: authData.token,
        model: authData.record
      })}; path=/; max-age=${5 * 24 * 60 * 60}; samesite=strict`;

      router.push(redirect);
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue focus:border-uleam-blue outline-none transition"
          placeholder="tu.correo@uleam.edu.ec"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uleam-blue focus:border-uleam-blue outline-none transition"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-uleam-blue to-primary-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-uleam-blue rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-uleam-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-uleam-blue">Admin Panel</h1>
          <p className="text-gray-600 text-sm mt-2">
            Innovaciones Pedagógicas - ULEAM
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-4">Cargando...</div>}>
          <LoginForm />
        </Suspense>

        <div className="mt-6 text-center">
          <a href="/" className="text-primary-600 hover:text-primary-700 text-sm">
            ← Volver al sitio
          </a>
        </div>
      </div>
    </div>
  );
}
