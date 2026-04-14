import type { Member, Publication, VideoCategory, Video, News, Activity, SiteSettings } from '@/types';

// ============================================================================
// STATIC DATABASE - Edit this file to update data
// ============================================================================

export const members: Member[] = [
  {
    id: 'member_1',
    name: 'Dr. Arturo Rodríguez',
    role: 'Líder del Proyecto',
    orcid: '0000-0002-7017-9443',
    email: 'arturo.rodriguez@uleam.edu.ec',
    photo: '/images/lider_arturo_rodriguez.jpg',
    is_leader: true,
    order: 1,
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'member_2',
    name: 'Dr. Jhonny Villafuerte',
    role: 'Colíder del Proyecto',
    orcid: '0000-0001-6053-6307',
    email: 'jhonny.villafuerte@uleam.edu.ec',
    photo: '/images/colider_Jhonny_Villafuerte.jpg',
    is_leader: false,
    order: 2,
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'member_3',
    name: 'Mg. Cristina Basantes',
    role: 'Coordinadora del Podcast — Docente de Pedagogía de los Idiomas',
    email: '',
    photo: '/images/Cristina_CoordinadorPODCAST.jpeg',
    is_leader: false,
    order: 3,
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
];

export const publications: Publication[] = [
  {
    id: 'pub_1',
    title: 'Innovaciones Pedagógicas en la Educación Superior',
    authors: 'Rodríguez, A., Villafuerte, J.',
    abstract: 'Este artículo presenta un análisis de las innovaciones pedagógicas implementadas en la ULEAM y su impacto en el proceso de enseñanza-aprendizaje.',
    publication_date: '2025-03-15',
    doi_link: 'https://doi.org/10.1234/example',
    type: 'article',
    category: 'impacto',
    created: '2025-03-15T00:00:00Z',
    updated: '2025-03-15T00:00:00Z',
  },
  {
    id: 'pub_2',
    title: 'Internacionalización y Cooperación Académica',
    authors: 'Villafuerte, J., Rodríguez, A.',
    abstract: 'Estudio sobre los procesos de internacionalización en universidades latinoamericanas y su contribución al desarrollo académico.',
    publication_date: '2025-02-20',
    doi_link: 'https://doi.org/10.5678/example2',
    type: 'conference',
    category: 'regional',
    created: '2025-02-20T00:00:00Z',
    updated: '2025-02-20T00:00:00Z',
  },
];

export const videoCategories: VideoCategory[] = [
  {
    id: 'cat_1',
    name: 'Podcast - Educa PINE',
    slug: 'educa-pine',
    description: 'Episodios del podcast Educa PINE sobre pedagogía e innovación educativa',
    order: 1,
    is_active: true,
    created: '2026-04-08T00:00:00Z',
    updated: '2026-04-08T00:00:00Z',
  },
  {
    id: 'cat_2',
    name: 'Podcast - Voces Fuera del Aula',
    slug: 'voces-fuera-del-aula',
    description: 'Desafíos y experiencias en el aprendizaje — podcast Voces Fuera del Aula',
    order: 2,
    is_active: true,
    created: '2026-02-26T00:00:00Z',
    updated: '2026-02-26T00:00:00Z',
  },
];

export const videos: Video[] = [
  {
    id: 'video_1',
    title: 'Adicción a las redes sociales',
    youtube_url: 'https://youtu.be/Ujmhwl-0Epk',
    description: 'Podcast Educa PINE — Episodio sobre la adicción a las redes sociales y su impacto en el contexto educativo.',
    embed_id: 'Ujmhwl-0Epk',
    category: 'cat_1',
    published_date: '2026-04-08',
    order: 1,
    is_featured: true,
    created: '2026-04-08T00:00:00Z',
    updated: '2026-04-08T00:00:00Z',
  },
  {
    id: 'video_2',
    title: 'Comparaciones en las redes sociales',
    youtube_url: 'https://youtu.be/bZWv7zNWHUw',
    description: 'Podcast Educa PINE — Episodio sobre el efecto de las comparaciones sociales en plataformas digitales.',
    embed_id: 'bZWv7zNWHUw',
    category: 'cat_1',
    published_date: '2026-04-08',
    order: 2,
    is_featured: true,
    created: '2026-04-08T00:00:00Z',
    updated: '2026-04-08T00:00:00Z',
  },
  {
    id: 'video_3',
    title: 'Ansiedad en las redes sociales',
    youtube_url: 'https://youtu.be/lZEHjvMxdE8',
    description: 'Podcast Educa PINE — Episodio sobre la ansiedad generada por el uso de redes sociales.',
    embed_id: 'lZEHjvMxdE8',
    category: 'cat_1',
    published_date: '2026-04-08',
    order: 3,
    is_featured: false,
    created: '2026-04-08T00:00:00Z',
    updated: '2026-04-08T00:00:00Z',
  },
  {
    id: 'video_4',
    title: 'Cursos vacacionales: ¿El propósito es realmente el aprendizaje?',
    youtube_url: 'https://youtu.be/XId0WxjAux0',
    description: 'Podcast Voces Fuera del Aula — Reflexión sobre la finalidad pedagógica de los cursos vacacionales.',
    embed_id: 'XId0WxjAux0',
    category: 'cat_2',
    published_date: '2026-02-26',
    order: 1,
    is_featured: true,
    created: '2026-02-26T00:00:00Z',
    updated: '2026-02-26T00:00:00Z',
  },
];

export const news: News[] = [
  {
    id: 'news_1',
    title: 'Inicio del Proyecto de Innovación Pedagógica',
    content: 'La ULEAM ha lanzado oficialmente el proyecto de innovaciones pedagógicas con el objetivo de transformar los procesos de enseñanza-aprendizaje en la institución. Este proyecto contará con la participación de docentes de diferentes facultades y la colaboración de universidades internacionales.',
    published_date: '2025-04-01',
    is_featured: true,
    slug: 'inicio-proyecto-innovacion',
    created: '2025-04-01T00:00:00Z',
    updated: '2025-04-01T00:00:00Z',
  },
  {
    id: 'news_2',
    title: 'Taller de Internacionalización Académica',
    content: 'Se realizó exitosamente el taller de internacionalización académica con la participación de representantes de universidades de España, México y Colombia. El evento permitió establecer alianzas estratégicas para futuros proyectos de cooperación.',
    published_date: '2025-03-20',
    is_featured: false,
    slug: 'taller-internacionalizacion',
    created: '2025-03-20T00:00:00Z',
    updated: '2025-03-20T00:00:00Z',
  },
];

export const activities: Activity[] = [
  {
    id: 'activity_1',
    title: 'Primer Taller de Podcast Educativo',
    description: 'Taller introductorio sobre la producción de podcasts educativos para la innovación pedagógica.',
    photos: ['/images/actividad_previa_podcast.jpeg'],
    event_date: '2025-02-15',
    category: 'taller',
    created: '2025-02-15T00:00:00Z',
    updated: '2025-02-15T00:00:00Z',
  },
  {
    id: 'activity_2',
    title: 'Grabación de Episodio Piloto',
    description: 'Primera grabación del podcast del proyecto con la participación del líder y co-líder.',
    photos: ['/images/Actividad_Podcast.jpeg'],
    event_date: '2025-03-01',
    category: 'grabacion',
    created: '2025-03-01T00:00:00Z',
    updated: '2025-03-01T00:00:00Z',
  },
];

export const siteSettings: SiteSettings[] = [
  {
    id: 'setting_1',
    key: 'facebook_url',
    value: 'https://facebook.com/uleam',
    section: 'social',
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'setting_2',
    key: 'twitter_url',
    value: 'https://twitter.com/uleam',
    section: 'social',
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'setting_3',
    key: 'instagram_url',
    value: 'https://instagram.com/uleam',
    section: 'social',
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'setting_4',
    key: 'youtube_url',
    value: 'https://youtube.com/@uleam',
    section: 'social',
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'setting_5',
    key: 'contact_email',
    value: 'innovacion@uleam.edu.ec',
    section: 'contact',
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
  {
    id: 'setting_6',
    key: 'institution_name',
    value: 'Universidad Laica Eloy Alfaro de Manabí (ULEAM)',
    section: 'general',
    created: '2025-01-01T00:00:00Z',
    updated: '2025-01-01T00:00:00Z',
  },
];

// Admin users configuration
export const adminUsers = [
  {
    id: 'admin_1',
    email: 'arturo.rodriguez@uleam.edu.ec',
    password: 'Pine2026',
    role: 'admin' as const,
  },
  {
    id: 'admin_2',
    email: 'jhonny.villafuerte@uleam.edu.ec',
    password: 'Pine2026',
    role: 'admin' as const,
  },
];
