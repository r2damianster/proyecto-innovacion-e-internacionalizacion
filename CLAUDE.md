# CLAUDE.md — Proyecto Innovaciones Pedagógicas e Internacionalización

> Instrucciones de contexto para Claude Code. Único asistente IA activo.

---

## Identidad del Proyecto

**Nombre:** Proyecto Innovaciones Pedagógicas e Internacionalización
**Institución:** Universidad Laica Eloy Alfaro de Manabí (ULEAM)
**Repositorio:** https://github.com/r2damianster/proyecto-innovacion-e-internacionalizacion.git
**Versión actual:** 0.7.0
**Última sesión:** 2026-04-26 (Sesión 8 — Limpieza estructura, miembros, publicaciones)

---

## Stack Técnico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript estricto |
| Estilos | TailwindCSS personalizado (colores ULEAM) |
| Base de datos | Estática en `/lib/data.ts` (in-memory vía `/lib/db.ts`) |
| Auth | Credenciales hardcodeadas + middleware Next.js cookies |
| Deploy | Vercel — Next.js en raíz del repo |

### Colores ULEAM
- Azul institucional: `#003366`
- Dorado: `#FFD700`

---

## Estado Actual (2026-04-26)

| Módulo | Estado | % |
|--------|--------|---|
| Landing Page | ✅ Completo + scroll animations | 100% |
| Admin Panel (CRUD) | ✅ Completo | 100% |
| Middleware / Auth | ✅ Completo | 100% |
| TypeScript Types | ✅ Completo | 100% |
| Base de datos estática | ✅ data.ts + db.ts in-memory | 100% |
| Miembros del equipo | ✅ 5 miembros con fotos reales | 100% |
| Publicaciones | ✅ 7 publicaciones (1 libro + 6 artículos) | 100% |
| Videos / Podcast | ✅ 4 videos (Educa PINE + Voces Fuera del Aula) | 100% |
| Estructura del repo | ✅ Limpia — sin legacy | 100% |
| **Deploy Vercel** | ⏳ Pendiente confirmar en dashboard | 90% |

**Progreso general: ~98%**

---

## Cambios Recientes (Sesión 8 — 2026-04-26)

- ✅ Foto de Johana Bello actualizada (`JohanaBello.jpeg`)
- ✅ Andy Castillo agregado como Estudiante Investigador (`ANdyCastilo.png`)
- ✅ 5 nuevas publicaciones agregadas (libro + 4 artículos científicos)
- ✅ Libro descargable en PDF: `public/files/Libro-Innovaciones-Educativas.pdf`
- ✅ QWEN.md eliminado (ya no se usa Qwen)
- ✅ Carpeta `.qwen/` eliminada
- ✅ PocketBase eliminado completamente (`pocketbase/`, `.zip`, scripts, docs)
- ✅ Carpeta `frontend/` legacy eliminada
- ✅ Imágenes duplicadas de raíz eliminadas (todas en `public/images/`)
- ✅ Docs Word organizados en `docs/`
- ✅ Push a GitHub completado (commit `759f9e9`)

---

## Estructura de Archivos

```
proyecto-innovacion-e-internacionalizacion/   ← RAÍZ = Next.js app
├── CHANGELOG.md
├── CLAUDE.md                      # Este archivo
├── DEPLOY_GUIDE.md
├── README.md
├── RESUMEN.md
├── package.json
├── next.config.js
├── middleware.ts                  # Protección rutas /admin/*
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.cjs
├── vercel.json
├── .env.local.example
│
├── app/                           # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx                   # Landing page
│   ├── globals.css
│   └── admin/                     # Panel admin (11 páginas)
│
├── components/                    # Componentes React
│   └── admin/DataTable.tsx
│
├── lib/
│   ├── data.ts                    # ← FUENTE DE VERDAD (editar aquí)
│   └── db.ts                      # In-memory CRUD
│
├── types/index.ts                 # Interfaces TypeScript
│
├── public/
│   ├── images/                    # Fotos del equipo + logos
│   └── files/                     # PDFs descargables
│
└── docs/                          # Documentos Word de referencia
    ├── contactos.docx
    ├── contenidoYoube.docx
    ├── publicaciones.docx
    └── Proyecto_Innovaciones_Pedagógicas 2025.docx
```

---

## Equipo actual (`/lib/data.ts` → `members`)

| ID | Nombre | Rol | Orden |
|----|--------|-----|-------|
| member_1 | Dr. Arturo Rodríguez | Líder del Proyecto | 1 |
| member_2 | Dr. Jhonny Villafuerte | Colíder del Proyecto | 2 |
| member_3 | Mg. Cristina Basantes | Coordinadora de Productos Educomunicacionales | 3 |
| member_4 | Psi. Johana Bello, Mg. | Coordinadora de Internacionalización | 4 |
| member_5 | Andy Castillo | Estudiante Investigador | 5 |

---

## Publicaciones actuales (`/lib/data.ts` → `publications`)

| ID | Título (abrev.) | Tipo | Categoría | Fecha |
|----|----------------|------|-----------|-------|
| pub_3 | Innovaciones Educativas (libro) | book | libros | 2026-04 |
| pub_62 | Total Physical Response… | article | impacto | 2026-04 |
| pub_60 | Microenseñanza con tecnologías… | article | regional | 2026-03 |
| pub_58 | Comparación nivel de lectura… | article | impacto | 2026-03 |
| pub_61 | Identifying Main Causes… | article | regional | en prensa |
| pub_1 | Innovaciones Pedagógicas Ed. Superior | article | impacto | 2025-03 |
| pub_2 | Internacionalización y Cooperación | conference | regional | 2025-02 |

**Categorías de publicaciones:** `regional` | `libros` | `impacto`
**Índices:** ErihPlus → impacto | Latindex/Dialnet → regional

---

## Base de Datos Estática

> La fuente de verdad es `/lib/data.ts`. El admin panel NO es persistente (usa db.ts en memoria).

### Entidades disponibles

| Entidad | Notas |
|---------|-------|
| `members` | Equipo del proyecto |
| `publications` | Artículos, libros, conferencias |
| `videos` | Podcasts (Educa PINE + Voces Fuera del Aula) |
| `video_categories` | Categorías de videos |
| `news` | Noticias del proyecto |
| `activities` | Actividades/eventos |
| `site_settings` | URLs sociales, email de contacto |
| `adminUsers` | Usuarios del panel admin |

---

## Flujos de Trabajo Recurrentes

### Agregar publicación con enlace únicamente
1. Abrir `lib/data.ts`
2. Agregar entrada en el array `publications` con:
   - `id`: `pub_XX` (número correlativo)
   - `type`: `'article'` | `'conference'` | `'book'` | `'other'`
   - `category`: `'impacto'` (ErihPlus, Scopus, WoS) | `'regional'` (Latindex, Dialnet) | `'libros'`
   - `doi_link`: URL del artículo o DOI
   - Omitir `pdf_file` si no hay PDF
3. Verificar TypeScript: `npx tsc --noEmit`

### Agregar publicación descargable (PDF)
1. Colocar el PDF en `public/files/` (nombre sin espacios, ej. `Nombre-Articulo.pdf`)
2. Agregar entrada en `publications` con `pdf_file: '/files/Nombre-Articulo.pdf'`
3. El componente `PublicationsSection.tsx` renderiza automáticamente el botón **PDF**

### Actualizar o agregar miembro del equipo
1. Colocar la foto en `public/images/` (puede partir de la raíz del proyecto — moverla aquí)
2. Agregar/editar entrada en el array `members` de `lib/data.ts`
3. Campos: `name`, `role`, `orcid` (opcional), `email`, `photo: '/images/archivo.jpg'`, `order`
4. Para diferenciar estudiantes usar `role: 'Estudiante Investigador'`

### Leer documentos Word para actualizar contenido
- Los `.docx` de referencia están en `docs/`
- Para extraer texto usar el skill `plugin:anthropic-skills:docx`
- Contenido a completar:
  - `docs/Proyecto_Innovaciones_Pedagógicas 2025.docx` → sección "Sobre el Proyecto" en landing
  - `docs/contenidoYoube.docx` → videos adicionales
  - `docs/contactos.docx` → site_settings (email, redes sociales)
  - `docs/publicaciones.docx` → publicaciones adicionales

### Reorganizar/limpiar estructura
- Imágenes: siempre en `public/images/` (nunca en raíz)
- PDFs descargables: `public/files/`
- Documentos de referencia: `docs/`
- No crear carpetas adicionales sin necesidad

---

## Autenticación Admin

- **Emails autorizados:** `arturo.rodriguez@uleam.edu.ec` | `jhonny.villafuerte@uleam.edu.ec`
- **Password:** `Pine2026`
- **Middleware:** `middleware.ts` protege todas las rutas `/admin/*`

---

## Comandos Útiles

```bash
# Desarrollo (desde la raíz del proyecto)
npm run dev           # http://localhost:3000

# Build y verificación
npm run build
npx tsc --noEmit      # Solo verificar TypeScript

# Git
git status
git add <archivos>
git commit -m "feat: descripción"
git push
```

---

## Instrucciones para el Asistente IA

1. **Lee este archivo primero** para entender el contexto completo
2. **App Router de Next.js 14** — no usar `pages/`
3. **TypeScript estricto** — sin `any`
4. **TailwindCSS** — no añadir CSS inline salvo excepciones
5. **Colores ULEAM:** clases definidas en `tailwind.config.ts`
6. **No tocar `middleware.ts`** sin entender la lógica de auth
7. **La fuente de verdad es `lib/data.ts`** — editar ahí para cambios permanentes
8. **Actualizar este CLAUDE.md** cuando cambien el equipo, publicaciones o estructura

### Convenciones de código
- Componentes: PascalCase (`TeamSection.tsx`)
- Funciones/variables: camelCase
- Constantes: UPPER_SNAKE_CASE
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`)

---

**Última actualización:** 2026-04-26 (Sesión 8)
**Versión:** 0.7.0
**Estado:** App funcional ✅ — Repo limpio ✅ — Pusheado ✅ — Deploy Vercel pendiente confirmar
