# CLAUDE.md — Proyecto Innovaciones Pedagógicas e Internacionalización

> Instrucciones de contexto para Claude Code (y asistentes IA compatibles).
> Archivo equivalente: `QWEN.md` (mismo contenido, para Qwen/otros modelos).

---

## Identidad del Proyecto

**Nombre:** Proyecto Innovaciones Pedagógicas e Internacionalización  
**Institución:** Universidad Laica Eloy Alfaro de Manabí (ULEAM)  
**Repositorio:** https://github.com/r2damianster/proyecto-innovacion-e-internacionalizacion.git  
**Versión actual:** 0.3.0  
**Última sesión:** 2026-04-13 (Sesión 4 — PocketBase pendiente)

---

## Stack Técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript estricto |
| Estilos | TailwindCSS personalizado (colores ULEAM) |
| Backend | PocketBase (SQLite embebido, REST auto-generada) |
| Auth | PocketBase Email/Password + middleware Next.js |
| Deploy | Vercel (frontend) + PocketBase Cloud/VPS (backend) |
| CI/CD | GitHub Actions (planificado) |

### Colores ULEAM
- Azul institucional: `#003366`
- Dorado: `#FFD700`

---

## Estado Actual (2026-04-13)

| Módulo | Estado | % |
|--------|--------|---|
| Landing Page | ✅ Completo | 100% |
| Admin Panel (CRUD) | ✅ Completo | 100% |
| Middleware / Auth | ✅ Completo | 100% |
| TypeScript Types | ✅ Completo | 100% |
| Documentación | ✅ Actualizada | 100% |
| Git + GitHub | ✅ Pusheado | 100% |
| **PocketBase Backend** | ⏳ Pendiente | 0% |
| **Contenido real** | ⏳ Pendiente | 0% |
| **Deploy** | ⏳ Pendiente | 0% |

**Progreso general: ~70%**

---

## Estructura de Archivos

```
proyecto-innovacion-e-internacionalizacion/
├── .gitignore
├── .qwen/settings.json            # Permisos Qwen Code
├── CHANGELOG.md                   # Historial de versiones
├── CLAUDE.md                      # Este archivo (contexto para Claude Code)
├── POCKETBASE_SETUP.md           # Guía paso a paso PocketBase
├── QWEN.md                        # Contexto para Qwen (espejo de CLAUDE.md)
├── README.md                      # Documentación general
├── RESUMEN.md                     # Resumen ejecutivo
├── setup-pocketbase.ps1          # Script PowerShell automatización
│
├── Imágenes (root):
│   ├── LOGO_Proyectro.png
│   ├── LOGO_PRogramadePodcast.jpeg
│   ├── lider_arturo_rodriguez.jpg
│   ├── colider_Jhonny_Villafuerte.jpg
│   ├── Actividad_Podcast.jpeg
│   └── actividad_previa_podcast.jpeg
│
├── Word Documents (fuente del contenido real):
│   ├── Proyecto_Innovaciones_Pedagógicas 2025.docx
│   ├── contenidoYoube.docx
│   ├── contactos.docx
│   └── publicaciones.docx
│
└── frontend/                      # Aplicación Next.js
    ├── .env.local.example
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── postcss.config.cjs
    ├── next.config.js
    ├── middleware.ts               # Protección rutas /admin/*
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx               # Landing page (1 sola página con secciones)
    │   ├── globals.css
    │   └── admin/                 # Panel admin (11 páginas)
    │       ├── layout.tsx
    │       ├── page.tsx
    │       ├── login/page.tsx
    │       ├── dashboard/page.tsx
    │       ├── members/page.tsx
    │       ├── videos/page.tsx
    │       ├── categories/page.tsx
    │       ├── publications/page.tsx
    │       ├── news/page.tsx
    │       ├── activities/page.tsx
    │       └── settings/page.tsx
    ├── components/                # 13 componentes React
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── TeamSection.tsx
    │   ├── VideoGallery.tsx
    │   ├── VideoCard.tsx
    │   ├── PublicationsSection.tsx
    │   ├── NewsSection.tsx
    │   ├── ActivityGallery.tsx
    │   ├── Contact.tsx
    │   └── admin/DataTable.tsx
    ├── lib/
    │   ├── pocketbase.ts          # Cliente PocketBase + helpers
    │   └── admin-auth.ts          # Helpers de autenticación admin
    ├── types/index.ts             # 8 interfaces TypeScript
    └── public/images/             # 6 imágenes estáticas
```

---

## PocketBase — Schema de Colecciones

> **Estado:** Aún no configurado. Ver `POCKETBASE_SETUP.md` para guía completa.

### 8 Colecciones Requeridas

| # | Colección | Campos clave |
|---|-----------|-------------|
| 1 | `members` | name, role, orcid, email, photo, is_leader, order |
| 2 | `publications` | title, authors, abstract, publication_date, doi_link, pdf_file, type |
| 3 | `videos` | title, youtube_url, embed_id, category→video_categories, is_featured |
| 4 | `video_categories` | name, slug, description, order, is_active |
| 5 | `news` | title, content, featured_image, published_date, is_featured, slug |
| 6 | `activities` | title, description, photos[], event_date, category |
| 7 | `site_settings` | key, value, section |
| 8 | `users` | email, password, role (built-in PocketBase) |

**API Rules para todas:** `List/View: true` | `Create/Update/Delete: @request.auth.id != ""`

---

## Autenticación Admin

- **Solo 2 emails autorizados:**
  - `arturo.rodriguez@uleam.edu.ec`
  - `jhonny.villafuerte@uleam.edu.ec`
- **Password:** `Pine2026`
- **Middleware:** `frontend/middleware.ts` protege todas las rutas `/admin/*`
- **Almacenamiento:** JWT token en cookies httpOnly

---

## Comandos Útiles

```bash
# Desarrollo
cd frontend
npm run dev           # http://localhost:3000

# Build
npm run build
npm run start

# PocketBase (Windows)
pocketbase.exe serve --http=127.0.0.1:8090
# Panel PocketBase: http://127.0.0.1:8090/_/

# Git
git status
git add .
git commit -m "mensaje"
git push
```

---

## Tareas Pendientes (Próximas Sesiones)

### Sesión 4 — PocketBase Backend
- [ ] Descargar PocketBase v0.22+
- [ ] Ejecutar servidor local
- [ ] Crear 8 colecciones según schema
- [ ] Configurar API rules
- [ ] Crear 2 usuarios admin
- [ ] Probar login desde panel Next.js

### Sesión 5 — Contenido Real (de Word Docs)
- [ ] Extraer info de `Proyecto_Innovaciones_Pedagógicas 2025.docx` → sección About
- [ ] Extraer videos de `contenidoYoube.docx` → CRUD Videos
- [ ] Extraer contactos de `contactos.docx` → Configuración sitio
- [ ] Extraer publicaciones de `publicaciones.docx` → CRUD Publicaciones
- [ ] Seed database con datos reales vía admin panel

### Sesión 6 — Páginas Adicionales (Opcional)
- [ ] `/videos` — galería completa con filtros
- [ ] `/publicaciones` — listado paginado
- [ ] `/noticias` — listado paginado
- [ ] `/noticias/[slug]` — detalle de noticia

### Sesión 7 — Deploy
- [ ] Configurar PocketBase Cloud o VPS
- [ ] Deploy frontend a Vercel
- [ ] Variables de entorno en Vercel
- [ ] Testing en producción
- [ ] Dominio personalizado (opcional)

---

## Instrucciones para el Asistente IA

### Cuando trabajes en este proyecto:
1. **Lee este archivo primero** para entender el contexto completo
2. **Consulta `POCKETBASE_SETUP.md`** antes de tocar configuración de backend
3. **El frontend usa App Router** de Next.js 14 — no usar `pages/`
4. **TypeScript estricto** — siempre tipar correctamente, sin `any`
5. **TailwindCSS** — no añadir CSS inline salvo casos muy específicos
6. **Colores ULEAM:** usar `#003366` (azul) y `#FFD700` (dorado) con las clases definidas en `tailwind.config.ts`
7. **No tocar `middleware.ts`** sin entender la lógica de auth completa
8. **Actualizar documentación** cuando hagas cambios significativos

### Convenciones de código:
- Componentes: PascalCase (`TeamSection.tsx`)
- Funciones/variables: camelCase
- Constantes: UPPER_SNAKE_CASE
- Archivos de config: kebab-case
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)

### Build stats (v0.3.0 — referencia):
```
✓ 14 páginas estáticas generadas
✓ First Load JS: 87.3 kB - 118 kB
✓ Middleware: 26.6 kB
✓ Sin errores
```

---

## Multi-IA: Claude Code + Qwen Code

Este proyecto soporta trabajo con múltiples asistentes IA:

| Asistente | Archivo de contexto | Config |
|-----------|--------------------|----|
| Claude Code | `CLAUDE.md` (este archivo) | `.claude/` |
| Qwen Code | `QWEN.md` | `.qwen/settings.json` |
| Otros | Consultar `README.md` | — |

**Ambos archivos (`CLAUDE.md` y `QWEN.md`) deben mantenerse sincronizados** con el mismo estado del proyecto.

---

**Última actualización:** 2026-04-13 (Sesión 4)  
**Versión:** 0.3.0  
**Estado:** Landing + Admin listos — PocketBase pendiente
