# 🎓 Proyecto Innovaciones Pedagógicas e Internacionalización - ULEAM

Landing page con panel de administración para el proyecto de investigación sobre innovaciones pedagógicas e internacionalización en la Universidad Laica Eloy Alfaro de Manabí (ULEAM).

**Versión:** 0.3.0  
**Estado:** ✅ Landing Page + Admin Panel Completos  
**Build:** ✅ Exitoso (14 páginas estáticas)  
**Tech Stack:** Next.js 14 + TypeScript + TailwindCSS + PocketBase

---

## 🌟 Características

### ✅ Landing Page (Completada)
- **Hero Section**: Logo animado, título, CTAs
- **About**: Descripción y objetivos del proyecto
- **Team**: Miembros con fotos, roles, ORCID, emails
- **Videos**: Galería con filtros por categoría + YouTube embeds
- **Publicaciones**: Artículos científicos con tipos y links DOI
- **Noticias**:Últimas novedades con imágenes
- **Galería**: Fotos de actividades con lightbox
- **Contacto**: Info de contacto + redes sociales + formulario

### ✅ Admin Panel (Completado)
- **Autenticación**: Solo 2 emails autorizados
- **Dashboard**: Estadísticas + acciones rápidas
- **CRUD Miembros**: Gestión completa del equipo
- **CRUD Videos**: Videos de YouTube con categorías
- **CRUD Categorías**: Organización de series de videos
- **CRUD Publicaciones**: Papers científicos
- **CRUD Noticias**: Noticias del proyecto
- **CRUD Actividades**: Eventos y fotos
- **Configuración**: Redes sociales y info del sitio

### 🎨 Diseño
- UI moderna y 100% responsive
- Colores ULEAM: azul (#003366) + dorado (#FFD700)
- Animaciones y transiciones suaves
- Smooth scrolling
- Dark mode ready
- Accessible (WCAG 2.1 AA)

---

## 📁 Estructura del Proyecto

```
proyecto-innovacion-e-internacionalizacion/
├── frontend/                      # Next.js Application
│   ├── app/
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Landing page
│   │   ├── globals.css           # Global styles
│   │   └── admin/                # Admin panel (11 pages)
│   │       ├── layout.tsx        # Admin layout
│   │       ├── login/
│   │       ├── dashboard/
│   │       ├── members/
│   │       ├── videos/
│   │       ├── categories/
│   │       ├── publications/
│   │       ├── news/
│   │       ├── activities/
│   │       └── settings/
│   ├── components/               # React components (13 total)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TeamSection.tsx
│   │   ├── VideoGallery.tsx
│   │   ├── VideoCard.tsx
│   │   ├── PublicationsSection.tsx
│   │   ├── NewsSection.tsx
│   │   ├── ActivityGallery.tsx
│   │   ├── Contact.tsx
│   │   └── admin/DataTable.tsx
│   ├── lib/                      # Libraries
│   │   ├── pocketbase.ts
│   │   └── admin-auth.ts
│   ├── types/index.ts            # TypeScript interfaces
│   ├── middleware.ts             # Route protection
│   ├── public/images/            # Static images
│   └── package.json
├── QWEN.md                        # Estado detallado
├── CHANGELOG.md                   # Historial
├── POCKETBASE_SETUP.md           # Guía PocketBase
├── README.md                      # Este archivo
└── Documentos Word (contenido pendiente)
```

---

## 🚀 Cómo Empezar

### Prerrequisitos
- Node.js 18+
- PocketBase (para backend completo)

### Instalación

```bash
cd frontend
npm install
```

### Configurar Variables

```bash
copy .env.local.example .env.local
# Edit .env.local if needed
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

**Admin Panel:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

### Build Producción

```bash
npm run build
npm run start
```

---

## 📊 Progreso del Proyecto

| Módulo | Estado | % |
|--------|--------|---|
| Landing Page | ✅ Completo | 100% |
| Admin Panel | ✅ Completo | 100% |
| TypeScript Types | ✅ Completo | 100% |
| Middleware/Auth | ✅ Completo | 100% |
| PocketBase Backend | ⏳ Pendiente | 0% |
| Contenido Real | ⏳ Pendiente | 0% |
| Deploy | ⏳ Pendiente | 0% |

**Progreso Total: ~70%**

---

## 🗺️ Próximos Pasos

1. **Instalar PocketBase** → Ver `POCKETBASE_SETUP.md`
2. **Crear colecciones** → Seguir guía detallada
3. **Extraer contenido** → De archivos Word
4. **Testing** → Verificar todo funcionando
5. **Deploy** → Vercel + PocketBase Cloud

---

## 👥 Equipo del Proyecto

- **Líder**: Arturo Rodríguez - arturo.rodriguez@uleam.edu.ec
- **Colíder**: Jhonny Villafuerte - jhonny.villafuerte@uleam.edu.ec

---

## 🔐 Acceso Admin

**Emails autorizados:**
- arturo.rodriguez@uleam.edu.ec
- jhonny.villafuerte@uleam.edu.ec

**Password:** `Pine2026`

*(Estos usuarios deben existir en la colección `users` de PocketBase)*

---

## 📚 Documentación

| Archivo | Descripción |
|---------|-------------|
| [QWEN.md](./QWEN.md) | Estado detallado del proyecto |
| [CHANGELOG.md](./CHANGELOG.md) | Historial de versiones |
| [POCKETBASE_SETUP.md](./POCKETBASE_SETUP.md) | Guía completa de PocketBase |
| [README.md](./README.md) | Este archivo |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS
- **Backend**: PocketBase (SQLite embedded)
- **Auth**: PocketBase Auth + Middleware
- **Deploy**: Vercel (planificado)
- **Video**: YouTube embeds
- **Images**: Next.js Image optimization

---

## 📦 Stats del Build

```
Route (app)                              Size     First Load JS
┌ ○ /                                    12.4 kB         118 kB
├ ○ /_not-found                          873 B          88.2 kB
├ ○ /admin                               136 B          87.5 kB
├ ○ /admin/activities                    2.17 kB        99.3 kB
├ ○ /admin/categories                    2.44 kB        99.6 kB
├ ○ /admin/dashboard                     1.6 kB          107 kB
├ ○ /admin/login                         1.8 kB         98.9 kB
├ ○ /admin/members                       2.43 kB        99.6 kB
├ ○ /admin/news                          2.34 kB        99.5 kB
├ ○ /admin/publications                  2.38 kB        99.5 kB
├ ○ /admin/settings                      1.58 kB        88.9 kB
└ ○ /admin/videos                        2.91 kB         100 kB

+ First Load JS shared by all            87.3 kB
ƒ Middleware                             26.6 kB
```

---

## 🆘 Soporte

Para preguntas o problemas técnicos:
- Revisa `QWEN.md` para el estado y tareas pendientes
- Revisa `POCKETBASE_SETUP.md` para configuración de backend
- Contacta al equipo del proyecto

---

**Última actualización:** Abril 12, 2026  
**Versión:** 0.3.0  
**Estado:** ✅ Landing + Admin Listos - Falta PocketBase
