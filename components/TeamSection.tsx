'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMembers } from '@/lib/db';
import type { Member } from '@/types';

export default function TeamSection() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load members from static data or use sample data
    const loadMembers = async () => {
      try {
        const data = await getMembers();
        setMembers(data as any);
      } catch (error) {
        // Fallback to sample data if PocketBase is not available
        setMembers([
          {
            id: '1',
            name: 'Arturo Rodríguez',
            role: 'Líder del Proyecto',
            orcid: '0000-0000-0000-0000',
            email: 'arturo.rodriguez@uleam.edu.ec',
            photo: '/images/lider_arturo_rodriguez.jpg',
            is_leader: true,
            order: 1,
            created: '',
            updated: '',
          },
          {
            id: '2',
            name: 'Jhonny Villafuerte',
            role: 'Colíder del Proyecto',
            orcid: '0000-0000-0000-0000',
            email: 'jhonny.villafuerte@uleam.edu.ec',
            photo: '/images/colider_Jhonny_Villafuerte.jpg',
            is_leader: false,
            order: 2,
            created: '',
            updated: '',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  if (loading) {
    return (
      <section id="equipo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-uleam-blue">Cargando equipo...</div>
        </div>
      </section>
    );
  }

  const leaders = members.filter(m => m.is_leader);
  const otherMembers = members.filter(m => !m.is_leader);

  return (
    <section id="equipo" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-uleam-blue mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-uleam-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investigadores y colaboradores dedicados a transformar la educación
          </p>
        </div>

        {/* Leaders with scrolling animation */}
        {leaders.length > 0 && (
          <div className="mb-12">
            <div className="animate-scroll-left flex gap-8 w-fit">
              {/* Duplicate content for seamless loop */}
              {[...leaders, ...leaders].map((member, idx) => (
                <TeamCard key={`${member.id}-${idx}`} member={member} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Members */}
        {otherMembers.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-uleam-blue text-center mb-8">
              Colaboradores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿Quieres ser parte del proyecto?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-uleam-blue text-white font-bold rounded-lg hover:bg-uleam-blue/90 transition-all transform hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, featured = false }: { member: Member; featured?: boolean }) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 flex-shrink-0 ${
        featured ? 'border-2 border-uleam-gold' : ''
      }`}
    >
      {/* Photo - smaller size */}
      <div className={`relative ${featured ? 'h-48' : 'h-40'} bg-gray-200`}>
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {featured && (
          <div className="absolute top-2 right-2 bg-uleam-gold text-uleam-blue px-2 py-0.5 rounded-full text-xs font-bold">
            {member.is_leader ? 'Líder' : 'Colíder'}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-uleam-blue mb-1">{member.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{member.role}</p>
        
        {member.orcid && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.913-1.237-3.722-3.984-3.722h-2.335z" />
            </svg>
            <a
              href={`https://orcid.org/${member.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-uleam-blue transition"
            >
              {member.orcid}
            </a>
          </div>
        )}
        
        <a
          href={`mailto:${member.email}`}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium transition"
        >
          {member.email}
        </a>
      </div>
    </div>
  );
}
