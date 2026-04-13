'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#about', label: 'Acerca de' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#videos', label: 'Videos' },
    { href: '#publicaciones', label: 'Publicaciones' },
    { href: '#noticias', label: 'Noticias' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo-proyecto.png"
                alt="Logo Proyecto"
                fill
                className="object-contain"
              />
            </div>
            <span className={`font-bold text-lg hidden sm:block ${scrolled ? 'text-uleam-blue' : 'text-white'}`}>
              Innovaciones Pedagógicas - ULEAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium hover:opacity-80 transition ${
                    scrolled ? 'text-uleam-blue' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admin"
                className={`px-4 py-2 rounded-md font-medium transition ${
                  scrolled
                    ? 'bg-uleam-blue text-white hover:bg-uleam-blue/90'
                    : 'bg-white text-uleam-blue hover:bg-white/90'
                }`}
              >
                Admin
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-uleam-blue' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 text-uleam-blue hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admin"
                className="block py-2 px-4 text-uleam-blue hover:bg-gray-100 rounded font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
