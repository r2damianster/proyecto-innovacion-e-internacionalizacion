# CLAUDE.md — Proyecto Innovaciones Pedagógicas e Internacionalización

> Instrucciones de contexto para Claude Code. Único asistente IA activo.

---

## Identidad del Proyecto

**Nombre:** Proyecto Innovaciones Pedagógicas e Internacionalización
**Grupo de Investigación:** Innovaciones pedagógicas para el desarrollo sostenible: inclusión, interculturalidad e interdisciplinaridad (actualización 2026-05-15, doc en `public/admin-assets/2026_GrupoInvestigacion.pdf`)
**Institución:** Universidad Laica Eloy Alfaro de Manabí (ULEAM)
**Repositorio:** https://github.com/r2damianster/proyecto-innovacion-e-internacionalizacion.git
**Versión actual:** 0.7.0
**Última sesión:** 2026-06-09 (Sesión 11 — 6 nuevas publicaciones + DOI actualizado pub_63)

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

## Estado Actual (2026-06-07)

| Módulo | Estado | % |
|--------|--------|---|
| Landing Page | ✅ Completo + scroll animations | 100% |
| Admin Panel (CRUD) | ✅ Completo | 100% |
| Middleware / Auth | ✅ Completo | 100% |
| TypeScript Types | ✅ Completo | 100% |
| Base de datos estática | ✅ data.ts + db.ts in-memory | 100% |
| Miembros del equipo | ✅ 8 miembros (incluye equipo Podcast) | 100% |
| Publicaciones | ✅ 7 publicaciones (2 libros + 5 artículos) | 100% |
| Videos / Podcast | ✅ 4 videos (Educa PINE + Voces Fuera del Aula) | 100% |
| Compartir vía QR | ✅ QRFloatingButton + QRModal + QRPromoModal | 100% |
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

## Cambios Recientes (Sesión 9 — 2026-06-07)

- ✅ Nombre del Grupo de Investigación actualizado: "Innovaciones pedagógicas para el desarrollo sostenible: inclusión, interculturalidad e interdisciplinaridad" (doc oficial 2026-05-15)
- ✅ Documento `2026_GrupoInvestigacion.pdf` agregado a `public/admin-assets/` y registrado en `app/admin/documents/page.tsx`
- ✅ Nueva publicación `pub_64`: libro-podcast "An educational innovation in foreign Languages instruction" (Villafuerte-Holguín et al., 2026, Ediciones ULEAM), PDF descargable en `public/files/Libro-Podcast-Educacion-Innovadora.pdf`

---

## Cambios Recientes (Sesión 10 — 2026-06-07)

- ✅ Nuevos componentes de difusión QR: `QRFloatingButton.tsx` (botón flotante), `QRModal.tsx` (modal con QR + compartir WhatsApp), `QRPromoModal.tsx` (modal promocional auto-abierto)
- ✅ `ActivityGallery.tsx` y `SubstantiveFunctionsSection.tsx` agregados a la landing (galería de actividades + sección de funciones sustantivas — Docencia/Investigación/Vinculación)
- ✅ 3 nuevos miembros del **Equipo de Podcast**: Josselyn Mera Rivas, Doménica Valeska Vélez Bravo, Ailys Jordana Bailón Borja (`member_6`–`member_8`)
- ✅ Publicaciones `pub_1` y `pub_2` retiradas; nueva `pub_63` agregada: "Transition from Regular English Instruction to Bilingual Education: An Experience Using Gamification" (Piloso-Cedeño & Villafuerte-Holguín, regional)
- ✅ Fix: logo del Hero (256px) se solapaba con el texto del nav (`Inicio`, `Acerca de`, `Equipo`...) en pantallas PC de poca altura (~768px) — `Hero.tsx` ahora usa `pt-24 md:pt-28` para reservar espacio bajo el header; `Header.tsx` cambia `bg-transparent` por degradado translúcido (`from-uleam-blue/70...to-transparent backdrop-blur-sm`) y ajusta breakpoints del nombre/nav para que no se encimen en anchos medianos
- ✅ PDF "Informe Mensual Comisión Mayo" agregado a `public/admin-assets/`

---

## Cambios Recientes (Sesión 11 — 2026-06-09)

- ✅ 6 nuevas publicaciones agregadas (`pub_65`–`pub_70`): solo `pub_66` (Profesorado, Comunicación asertiva y gamificación) categorizada `impacto`; resto `regional` (Education Quarterly Reviews, Sapienza, Technium)
- ✅ `pub_63` (Piloso-Cedeño & Villafuerte-Holguín) DOI actualizado: preprint OSF → DOI publicado `10.31014/aior.1993.08.02.588`
- ℹ️ Diagrama de Venn (`SubstantiveFunctionsSection.tsx`) cuenta `publications.length` automáticamente — no requiere actualización manual al agregar publicaciones

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
| member_6 | Josselyn Mera Rivas | Estudiante Investigadora / Equipo de Podcast | 6 |
| member_8 | Ailys Jordana Bailón Borja | Estudiante Investigadora / Equipo de Podcast | 7 |
| member_7 | Doménica Valeska Vélez Bravo | Equipo de Podcast | 8 |

---

## Publicaciones actuales (`/lib/data.ts` → `publications`)

| ID | Título (abrev.) | Tipo | Categoría | Fecha |
|----|----------------|------|-----------|-------|
| pub_64 | Podcast: An educational innovation in foreign Languages instruction (libro) | book | libros | 2026-01 |
| pub_3 | Innovaciones Educativas (libro) | book | libros | 2026-04 |
| pub_62 | Total Physical Response… | article | impacto | 2026-04 |
| pub_60 | Microenseñanza con tecnologías… | article | regional | 2026-03 |
| pub_58 | Comparación nivel de lectura… | article | impacto | 2026-03 |
| pub_61 | Identifying Main Causes… | article | regional | 2026-06 |
| pub_63 | Transition from Regular English Instruction to Bilingual Education… | article | regional | 2025-01 |
| pub_64 | Podcast: An educational innovation in foreign Languages instruction (libro) | book | libros | 2026-01 |
| pub_65 | Use of Podcasts for Leadership and Emotional Intelligence Development… | article | regional | 2026-01 |
| pub_66 | Comunicación asertiva y gamificación: docentes y síndrome de Down | article | impacto | 2025-07 |
| pub_67 | Inclusive Education and the Use of Assistive Technologies… | article | regional | 2025-05 |
| pub_68 | Educational technology and teachers: effective teaching time… | article | regional | 2025-01 |
| pub_69 | Implementing Project-Based Learning in English Classes | article | regional | 2025-09 |
| pub_70 | Podcasting to sensitize gender equity in English language student teachers | article | regional | 2025-01 |

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

## Gestión de Archivos — Regla de Ubicación

> **CRÍTICO:** Antes de colocar cualquier archivo, determinar si debe ser público o privado.

| Carpeta | Acceso | Usar para |
|---------|--------|-----------|
| `public/images/` | **Público** (cualquier URL) | Fotos de miembros, logos, imágenes de noticias/actividades |
| `public/files/` | **Público** (cualquier URL) | PDFs de **publicaciones científicas** descargables desde la landing |
| `public/admin-assets/` | **Privado** (requiere sesión admin) | PDFs confidenciales: presupuestos, informes internos, documentos de actividades del proyecto |

### Reglas de oro
- **Nunca** poner documentos internos del proyecto (presupuestos, actas, informes de actividades) en `public/files/` ni en `public/images/` — quedan expuestos a internet.
- Solo van a `public/files/` los PDFs que el equipo quiere que el público general descargue (artículos científicos, libro del proyecto).
- Para agregar a la sección admin Documentos: copiar a `public/admin-assets/` y agregar entrada en `app/admin/documents/page.tsx`.
- Las noticias y actividades **no** llevan link de descarga pública — sus documentos van a `public/admin-assets/`.

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

- **Emails autorizados:** `arturo.rodriguez@uleam.edu.ec` | `jhonny.villafuerte@uleam.edu.ec` | `german.carrera@uleam.edu.ec` | `veronica.chavez@uleam.edu.ec`
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

**Última actualización:** 2026-06-07 (Sesión 10)
**Versión:** 0.7.0
**Estado:** App funcional ✅ — Repo limpio ✅ — Pusheado ✅ — Deploy Vercel pendiente confirmar
