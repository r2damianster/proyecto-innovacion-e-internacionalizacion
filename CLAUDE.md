# CLAUDE.md — Proyecto Innovaciones Pedagógicas e Internacionalización

> Instrucciones de contexto para Claude Code (y asistentes IA compatibles).
> Archivo equivalente: `QWEN.md` (mismo contenido, para Qwen/otros modelos).

---

## Identidad del Proyecto

**Nombre:** Proyecto Innovaciones Pedagógicas e Internacionalización
**Institución:** Universidad Laica Eloy Alfaro de Manabí (ULEAM)
**Repositorio:** https://github.com/r2damianster/proyecto-innovacion-e-internacionalizacion.git
**Versión actual:** 0.5.0
**Última sesión:** 2026-04-13 (Sesión 6 — Scroll animations, publication categories, Vercel bug)

---

## Stack Técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript estricto |
| Estilos | TailwindCSS personalizado (colores ULEAM) |
| Base de datos | Estática en `/lib/data.ts` (in-memory vía `/lib/db.ts`) |
| Auth | Credenciales hardcodeadas + middleware Next.js cookies |
| Deploy | ⏳ Pendiente — Vercel da 404 NOT_FOUND |
| CI/CD | GitHub Actions (planificado) |

### Colores ULEAM
- Azul institucional: `#003366`
- Dorado: `#FFD700`

---

## Estado Actual (2026-04-13)

| Módulo | Estado | % |
|--------|--------|---|
| Landing Page | ✅ Completo + scroll animations | 100% |
| Admin Panel (CRUD) | ✅ Completo + categoría publicaciones | 100% |
| Middleware / Auth | ✅ Completo | 100% |
| TypeScript Types | ✅ Completo (Publication.category added) | 100% |
| Documentación | ✅ Actualizada | 100% |
| Git + GitHub | ✅ Pusheado | 100% |
| Base de datos estática | ✅ data.ts + db.ts in-memory | 100% |
| **Contenido real** | ⏳ Pendiente | 0% |
| **Deploy Vercel** | ❌ 404 NOT_FOUND | 0% |

**Progreso general: ~95%**

---

## Cambios Recientes (Sesión 6)

- ✅ Team fotos más pequeñas (h-48) con animación scroll lento izquierda
- ✅ Arturo ORCID: `0000-0002-7017-9443` | Jhonny ORCID: `0000-0001-6053-6307`
- ✅ Jhonny es "Colíder del Proyecto"
- ✅ Placeholder videos eliminados (Episodio 1 y 2)
- ✅ Publications ahora tienen `category`: `regional` | `libros` | `impacto`
- ✅ Publications con scroll animation + filter buttons por categoría
- ✅ Admin panel actualizado con campo category
- ⚠️ Admin panel NO escribe en data.ts: cambios se pierden al reiniciar
- ❌ Vercel deploy: 404 NOT_FOUND persistente

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
├── DEPLOY_GUIDE.md               # Guía de despliegue
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
    │   ├── globals.css            # + animate-scroll-left keyframes
    │   └── admin/                 # Panel admin (11 páginas)
    │       ├── layout.tsx
    │       ├── page.tsx
    │       ├── login/page.tsx
    │       ├── dashboard/page.tsx
    │       ├── members/page.tsx
    │       ├── videos/page.tsx
    │       ├── categories/page.tsx
    │       ├── publications/page.tsx  # + category field
    │       ├── news/page.tsx
    │       ├── activities/page.tsx
    │       └── settings/page.tsx
    ├── components/                # 13 componentes React
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── TeamSection.tsx        # + scroll animation
    │   ├── VideoGallery.tsx
    │   ├── VideoCard.tsx
    │   ├── PublicationsSection.tsx  # + categories + scroll
    │   ├── NewsSection.tsx
    │   ├── ActivityGallery.tsx
    │   ├── Contact.tsx
    │   └── admin/DataTable.tsx
    ├── lib/
    │   ├── data.ts                # Datos estáticos (fuente de verdad)
    │   └── db.ts                  # In-memory CRUD (se pierde al reiniciar)
    ├── types/index.ts             # 9 interfaces TypeScript (+ category)
    └── public/images/             # 6 imágenes estáticas
```

---

## Base de Datos Estática

> **Estado:** Migrado de PocketBase a datos estáticos en Sesión 5.

### Estructura (`/lib/data.ts`)

| Entidad | Campos | Notas |
|---------|--------|-------|
| `members` | name, role, orcid, email, photo, is_leader, order | 2 miembros |
| `publications` | title, authors, abstract, publication_date, doi_link, type, **category** | category: regional/libros/impacto |
| `videos` | title, youtube_url, embed_id, category, is_featured | ⚠️ Vacío actualmente |
| `video_categories` | name, slug, description, order, is_active | 3 categorías |
| `news` | title, content, published_date, is_featured, slug | 2 noticias |
| `activities` | title, description, photos[], event_date, category | 2 actividades |
| `site_settings` | key, value, section | 6 settings |
| `adminUsers` | email, password, role | 2 usuarios |

### Cómo editar datos permanentes
1. Abrir `/lib/data.ts`
2. Modificar los arrays directamente
3. El servidor reinicia y carga los nuevos datos

### ⚠️ Admin panel no es persistente
Los cambios desde el admin se guardan en memoria (db.ts) y se pierden al reiniciar el servidor. Para datos permanentes, editar `data.ts` directamente.

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

# Git
git status
git add .
git commit -m "mensaje"
git push
```

---

## Tareas Pendientes (Próximas Sesiones)

### Sesión 7 — Resolver Deploy Vercel
- [ ] **Opción A (recomendada):** Mover contenido de `frontend/` a la raíz del proyecto
- [ ] **Opción B:** Crear nuevo proyecto Vercel desde cero apuntando a `frontend/`
- [ ] **Opción C:** Deploy en Railway o Netlify como alternativa
- [ ] Testing en producción
- [ ] Dominio personalizado (opcional)

### Sesión 5 — Contenido Real (de Word Docs)
- [ ] Extraer info de `Proyecto_Innovaciones_Pedagógicas 2025.docx` → sección About
- [ ] Extraer videos de `contenidoYoube.docx` → CRUD Videos
- [ ] Extraer contactos de `contactos.docx` → Configuración sitio
- [ ] Extraer publicaciones de `publicaciones.docx` → CRUD Publicaciones

### Sesión 6 — Páginas Adicionales (Opcional)
- [ ] `/videos` — galería completa con filtros
- [ ] `/publicaciones` — listado paginado
- [ ] `/noticias` — listado paginado
- [ ] `/noticias/[slug]` — detalle de noticia

---

## Instrucciones para el Asistente IA

### Cuando trabajes en este proyecto:
1. **Lee este archivo primero** para entender el contexto completo
2. **El frontend usa App Router** de Next.js 14 — no usar `pages/`
3. **TypeScript estricto** — siempre tipar correctamente, sin `any`
4. **TailwindCSS** — no añadir CSS inline salvo casos muy específicos
5. **Colores ULEAM:** usar `#003366` (azul) y `#FFD700` (dorado) con las clases definidas en `tailwind.config.ts`
6. **No tocar `middleware.ts`** sin entender la lógica de auth completa
7. **Actualizar documentación** cuando hagas cambios significativos
8. **Sincronizar CLAUDE.md y QWEN.md** con los mismos cambios

### Convenciones de código:
- Componentes: PascalCase (`TeamSection.tsx`)
- Funciones/variables: camelCase
- Constantes: UPPER_SNAKE_CASE
- Archivos de config: kebab-case
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)

### Build stats (v0.5.0 — referencia):
```
✓ 14 páginas estáticas generadas
✓ First Load JS: 87.3 kB - 110 kB
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

**Última actualización:** 2026-04-13 (Sesión 6)
**Versión:** 0.5.0
**Estado:** App funcional en local ✅ — Deploy Vercel 404 ❌
