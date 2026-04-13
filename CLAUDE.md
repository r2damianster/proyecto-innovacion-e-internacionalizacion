# CLAUDE.md — Proyecto Innovaciones Pedagógicas e Internacionalización

> Instrucciones de contexto para Claude Code (y asistentes IA compatibles).
> Archivo equivalente: `QWEN.md` (mismo contenido, para Qwen/otros modelos).

---

## Identidad del Proyecto

**Nombre:** Proyecto Innovaciones Pedagógicas e Internacionalización
**Institución:** Universidad Laica Eloy Alfaro de Manabí (ULEAM)
**Repositorio:** https://github.com/r2damianster/proyecto-innovacion-e-internacionalizacion.git
**Versión actual:** 0.6.0
**Última sesión:** 2026-04-13 (Sesión 7 — Migración frontend/ → raíz, Vercel fix)

---

## Stack Técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript estricto |
| Estilos | TailwindCSS personalizado (colores ULEAM) |
| Base de datos | Estática en `/lib/data.ts` (in-memory vía `/lib/db.ts`) |
| Auth | Credenciales hardcodeadas + middleware Next.js cookies |
| Deploy | ✅ Listo para Vercel — Next.js en raíz del repo |
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
| **Deploy Vercel** | ✅ Listo — Push en raíz | 90% |

**Progreso general: ~97%**

---

## Cambios Recientes (Sesión 7)

- ✅ **Migración `frontend/` → raíz** para resolver Vercel 404
- ✅ Build verificado en raíz: 14 páginas estáticas, sin errores
- ✅ Push a GitHub completado (commit `7849234`)
- ✅ Vercel detectará Next.js automáticamente desde la raíz

## Cambios Anteriores (Sesión 6)

- ✅ Team fotos más pequeñas (h-48) con animación scroll lento izquierda
- ✅ Arturo ORCID: `0000-0002-7017-9443` | Jhonny ORCID: `0000-0001-6053-6307`
- ✅ Jhonny es "Colíder del Proyecto"
- ✅ Placeholder videos eliminados (Episodio 1 y 2)
- ✅ Publications ahora tienen `category`: `regional` | `libros` | `impacto`
- ✅ Publications con scroll animation + filter buttons por categoría
- ✅ Admin panel actualizado con campo category
- ⚠️ Admin panel NO escribe en data.ts: cambios se pierden al reiniciar

---

## Estructura de Archivos

```
proyecto-innovacion-e-internacionalizacion/   ← RAÍZ = Next.js app
├── .gitignore
├── .qwen/settings.json            # Permisos Qwen Code
├── CHANGELOG.md
├── CLAUDE.md                      # Este archivo
├── QWEN.md                        # Espejo para Qwen
├── README.md
├── RESUMEN.md
├── DEPLOY_GUIDE.md
├── package.json                   # ← Next.js en raíz (fix Vercel)
├── next.config.js
├── middleware.ts                  # Protección rutas /admin/*
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.cjs
├── .env.local.example
│
├── app/                           # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx                   # Landing page
│   ├── globals.css
│   └── admin/                     # Panel admin (11 páginas)
│
├── components/                    # 13 componentes React
│   └── admin/DataTable.tsx
│
├── lib/
│   ├── data.ts                    # Datos estáticos (fuente de verdad)
│   └── db.ts                      # In-memory CRUD
│
├── types/index.ts                 # 9 interfaces TypeScript
├── public/images/                 # 6 imágenes estáticas
│
├── Imágenes (root):               # Logos y fotos del equipo
├── Word Documents:                # Fuente de contenido real
└── pocketbase/                    # Ignorar (legacy)
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

### Sesión 7 — Deploy Vercel ✅ LISTO PARA DEPLOY
- [x] Migrar `frontend/` a raíz del proyecto
- [ ] **Abrir Vercel dashboard → importar desde GitHub → deploy automático**
- [ ] Testing en producción
- [ ] Dominio personalizado (opcional)

### Contenido Real (de Word Docs)
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

**Última actualización:** 2026-04-13 (Sesión 7)
**Versión:** 0.6.0
**Estado:** App funcional en local ✅ — Next.js en raíz ✅ — Deploy pendiente confirmar en Vercel
