'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'es' | 'en';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      team: 'Equipo',
      videos: 'Videos',
      publications: 'Publicaciones',
      news: 'Noticias',
      contact: 'Contacto',
    },
    hero: {
      title1: 'Innovaciones Pedagógicas',
      title2: 'e Internacionalización',
      subtitle: 'Universidad Laica Eloy Alfaro de Manabí',
      description: 'Transformando la educación a través de la investigación, la innovación y la colaboración internacional',
      ctaProject: 'Conoce el Proyecto',
      ctaVideos: 'Ver Videos',
    },
    about: {
      sectionTitle: 'Acerca del Proyecto',
      sectionSubtitle: 'Un enfoque innovador para transformar la educación en la ULEAM',
      mainTitle: 'Proyecto de Innovaciones Pedagógicas 2025',
      p1: 'Este proyecto de investigación se enfoca en la implementación y análisis de innovaciones pedagógicas en el contexto de la educación superior ecuatoriana, con el objetivo de mejorar los procesos de enseñanza-aprendizaje a través de metodologías innovadoras y la internacionalización de la educación.',
      p2: 'A través de la investigación-acción, buscamos transformar las prácticas áulicas, fomentar la colaboración internacional y crear espacios de diálogo académico que enriquezcan la experiencia educativa de nuestra comunidad universitaria.',
      p3: 'El proyecto incluye la producción de contenidos multimedia, publicaciones científicas, y la creación de redes de colaboración con instituciones nacionales e internacionales.',
      objectivesTitle: 'Objetivos del Proyecto',
      objectives: [
        'Implementar metodologías pedagógicas innovadoras',
        'Fomentar la internacionalización de la educación',
        'Generar publicaciones científicas de calidad',
        'Crear redes de colaboración académica',
        'Producir contenido educativo multimedia',
      ],
      highlights: [
        { title: 'Innovación Pedagógica', description: 'Desarrollo de nuevas metodologías y prácticas educativas que transforman el proceso de enseñanza-aprendizaje.' },
        { title: 'Internacionalización', description: 'Colaboración con instituciones internacionales para fortalecer la calidad educativa y la investigación.' },
        { title: 'Investigación Colaborativa', description: 'Trabajo en equipo entre docentes y estudiantes para generar conocimiento y mejorar la práctica educativa.' },
        { title: 'Podcast Educativo', description: 'Serie de podcasts para difundir experiencias pedagógicas y fomentar el diálogo académico.' },
      ],
    },
    team: {
      sectionTitle: 'Nuestro Equipo',
    },
    publications: {
      sectionTitle: 'Publicaciones Científicas',
      filters: { all: 'Todas', regional: 'Regional', libros: 'Libros', impacto: 'De Impacto' },
      viewBtn: 'Ver →',
      pdfBtn: 'PDF',
      viewAll: 'Ver Todas las Publicaciones →',
    },
    news: {
      sectionTitle: 'Últimas Noticias',
      viewAll: 'Ver Todas las Noticias →',
      readMore: 'Leer más',
    },
    videos: {
      sectionTitle: 'Videos y Contenido Multimedia',
      filterAll: 'Todos',
    },
    activities: {
      sectionTitle: 'Galería de Actividades',
      empty: 'No hay fotos de actividades aún',
    },
    contact: {
      sectionTitle: 'Contáctanos',
      teamTitle: 'Equipo de Contacto',
      socialTitle: 'Redes Sociales',
      formTitle: 'Envíanos un Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Tu mensaje...',
      sendBtn: 'Enviar Mensaje',
      leader: 'Líder del Proyecto',
      coleader: 'Colíder del Proyecto',
    },
    footer: {
      description: 'Proyecto de investigación dedicado a la transformación de las prácticas pedagógicas y la internacionalización en la Universidad Laica Eloy Alfaro de Manabí (ULEAM).',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.',
      leader: 'Líder:',
      coleader: 'Colíder:',
      links: { home: 'Inicio', team: 'Equipo', videos: 'Videos', publications: 'Publicaciones', news: 'Noticias' },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      team: 'Team',
      videos: 'Videos',
      publications: 'Publications',
      news: 'News',
      contact: 'Contact',
    },
    hero: {
      title1: 'Pedagogical Innovations',
      title2: 'and Internationalization',
      subtitle: 'Laica Eloy Alfaro University of Manabí',
      description: 'Transforming education through research, innovation and international collaboration',
      ctaProject: 'Discover the Project',
      ctaVideos: 'Watch Videos',
    },
    about: {
      sectionTitle: 'About the Project',
      sectionSubtitle: 'An innovative approach to transform education at ULEAM',
      mainTitle: 'Pedagogical Innovations Project 2025',
      p1: 'This research project focuses on the implementation and analysis of pedagogical innovations in the context of Ecuadorian higher education, with the aim of improving teaching-learning processes through innovative methodologies and the internationalization of education.',
      p2: 'Through action research, we seek to transform classroom practices, foster international collaboration and create spaces for academic dialogue that enrich the educational experience of our university community.',
      p3: 'The project includes the production of multimedia content, scientific publications, and the creation of collaboration networks with national and international institutions.',
      objectivesTitle: 'Project Objectives',
      objectives: [
        'Implement innovative pedagogical methodologies',
        'Foster the internationalization of education',
        'Generate quality scientific publications',
        'Create academic collaboration networks',
        'Produce multimedia educational content',
      ],
      highlights: [
        { title: 'Pedagogical Innovation', description: 'Development of new educational methodologies and practices that transform the teaching-learning process.' },
        { title: 'Internationalization', description: 'Collaboration with international institutions to strengthen educational quality and research.' },
        { title: 'Collaborative Research', description: 'Teamwork between teachers and students to generate knowledge and improve educational practice.' },
        { title: 'Educational Podcast', description: 'Podcast series to disseminate pedagogical experiences and foster academic dialogue.' },
      ],
    },
    team: {
      sectionTitle: 'Our Team',
    },
    publications: {
      sectionTitle: 'Scientific Publications',
      filters: { all: 'All', regional: 'Regional', libros: 'Books', impacto: 'High Impact' },
      viewBtn: 'View →',
      pdfBtn: 'PDF',
      viewAll: 'View All Publications →',
    },
    news: {
      sectionTitle: 'Latest News',
      viewAll: 'View All News →',
      readMore: 'Read more',
    },
    videos: {
      sectionTitle: 'Videos and Multimedia Content',
      filterAll: 'All',
    },
    activities: {
      sectionTitle: 'Activities Gallery',
      empty: 'No activity photos yet',
    },
    contact: {
      sectionTitle: 'Contact Us',
      teamTitle: 'Contact Team',
      socialTitle: 'Social Networks',
      formTitle: 'Send us a Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message...',
      sendBtn: 'Send Message',
      leader: 'Project Leader',
      coleader: 'Project Co-Leader',
    },
    footer: {
      description: 'Research project dedicated to the transformation of pedagogical practices and internationalization at the Laica Eloy Alfaro University of Manabí (ULEAM).',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      leader: 'Leader:',
      coleader: 'Co-Leader:',
      links: { home: 'Home', team: 'Team', videos: 'Videos', publications: 'Publications', news: 'News' },
    },
  },
};

type Translations = typeof translations.es;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  t: translations.es,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
