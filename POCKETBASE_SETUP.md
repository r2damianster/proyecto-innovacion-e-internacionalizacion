# 📘 Guía de Configuración de PocketBase

## 1. Descargar PocketBase

Ve a [https://pocketbase.io/docs/](https://pocketbase.io/docs/) y descarga la versión para tu sistema operativo.

Para Windows, descarga el archivo `.zip` de la última release.

---

## 2. Instalar y Ejecutar

### Windows:
```bash
# Descomprime el archivo descargado
# Navega a la carpeta descomprimida
# Ejecuta:
pocketbase.exe serve --http=127.0.0.1:8090
```

### Linux/Mac:
```bash
# Descomprime
tar -xzf pocketbase_*.tgz

# Da permisos de ejecución
chmod +x pocketbase

# Ejecuta
./pocketbase serve --http=127.0.0.1:8090
```

---

## 3. Crear Cuenta Admin

1. Abre tu navegador en: `http://127.0.0.1:8090/_/`
2. Crea una cuenta con email y password
3. Este será el superadmin de PocketBase

---

## 4. Crear Colecciones

En el panel de PocketBase, crea las siguientes colecciones con estos campos:

### 4.1. members
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| name | text | ✅ | - |
| role | text | ✅ | - |
| orcid | text | ❌ | - |
| email | email | ✅ | - |
| photo | file | ❌ | - |
| is_leader | bool | ✅ | false |
| order | number | ✅ | 0 |

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

### 4.2. publications
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| title | text | ✅ | - |
| authors | text | ✅ | - |
| abstract | text | ✅ | - |
| publication_date | date | ✅ | - |
| doi_link | url | ❌ | - |
| pdf_file | file | ❌ | - |
| type | select | ✅ | article |

**Opciones de type:** `article`, `conference`, `book`, `other`

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

### 4.3. videos
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| title | text | ✅ | - |
| youtube_url | url | ✅ | - |
| description | text | ❌ | - |
| embed_id | text | ✅ | - |
| category | relation | ❌ | - |
| published_date | date | ✅ | - |
| order | number | ✅ | 0 |
| is_featured | bool | ✅ | false |
| tags | json | ❌ | - |

**Relación:** `category` → `video_categories` (single)

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

### 4.4. video_categories
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| name | text | ✅ | - |
| slug | text | ✅ | - |
| description | text | ❌ | - |
| cover_image | file | ❌ | - |
| order | number | ✅ | 0 |
| is_active | bool | ✅ | true |

**Índices únicos:** `name`, `slug`

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

### 4.5. news
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| title | text | ✅ | - |
| content | text | ✅ | - |
| featured_image | file | ❌ | - |
| published_date | date | ✅ | - |
| is_featured | bool | ✅ | false |
| slug | text | ✅ | - |

**Índice único:** `slug`

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

### 4.6. activities
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| title | text | ✅ | - |
| description | text | ❌ | - |
| photos | file | ❌ | - |
| event_date | date | ✅ | - |
| category | text | ✅ | otro |

**Configuración de photos:** Múltiples archivos permitidos

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

### 4.7. site_settings
| Campo | Tipo | Requerido | Default |
|-------|------|-----------|---------|
| key | text | ✅ | - |
| value | text | ✅ | - |
| section | text | ✅ | - |

**Índice único:** `key`

**API Rules:**
- List/View: `true`
- Create/Update/Delete: `@request.auth.id != ""`

---

## 5. Crear Usuarios Admin

Ve a la colección `users` (built-in) y crea estos usuarios:

### Usuario 1:
- **email:** arturo.rodriguez@uleam.edu.ec
- **password:** Pine2026
- **role:** admin

### Usuario 2:
- **email:** jhonny.villafuerte@uleam.edu.ec
- **password:** Pine2026
- **role:** admin

**Auth settings:**
- Enable Email/Password authentication
- Allow OAuth2 (opcional)

---

## 6. Probar la Conexión

1. Asegúrate de que PocketBase esté corriendo en `http://127.0.0.1:8090`
2. En el frontend, copia `.env.local.example` a `.env.local`:
   ```bash
   cd frontend
   copy .env.local.example .env.local
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Ve a `http://localhost:3000/admin/login`
5. Inicia sesión con uno de los emails y password

---

## 7. Seed Data (Datos Iniciales)

Puedes agregar datos de ejemplo manualmente desde el panel de PocketBase o usar el admin panel de la aplicación.

### Categorías de video sugeridas:
1. **Podcast - Innovación Pedagógica** (slug: `podcast-innovacion`)
2. **Podcast - Internacionalización** (slug: `podcast-internacionalizacion`)
3. **Entrevistas** (slug: `entrevistas`)
4. **Tutoriales** (slug: `tutoriales`)
5. **Eventos** (slug: `eventos`)

---

## 8. Configurar para Producción

### PocketBase Cloud:
- Usa [PocketBase Cloud](https://pocketbase.io/cloud/) o un VPS
- Configura la URL en las variables de entorno de Vercel

### Vercel:
1. Conecta tu repositorio GitHub
2. Agrega la variable de entorno:
   ```
   NEXT_PUBLIC_POCKETBASE_URL=https://tu-pocketbase.pocketbase.cloud
   ```
3. Deploy

---

## Troubleshooting

### Error: "No se puede conectar a PocketBase"
- Asegúrate de que PocketBase esté corriendo
- Verifica la URL en `.env.local`
- Revisa que el puerto 8090 no esté en uso

### Error: "No autorizado"
- Verifica que el email esté en la colección `users`
- Solo los 2 emails autorizados pueden acceder
- El password debe ser exacto: `Pine2026`

### Error: "Collection not found"
- Verifica que todas las colecciones estén creadas
- Los nombres deben ser exactos (en minúsculas)

---

**Para más ayuda, revisa QWEN.md o CHANGELOG.md**
