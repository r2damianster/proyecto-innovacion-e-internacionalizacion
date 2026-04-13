# 🚀 Script de Configuración Rápida de PocketBase

Este script te guía paso a paso para configurar PocketBase.

## Paso 1: Descargar PocketBase

### Windows (PowerShell):
```powershell
# Descarga la última versión
$url = "https://github.com/pocketbase/pocketbase/releases/download/v0.22.23/pocketbase_0.22.23_windows_amd64.zip"
Invoke-WebRequest -Uri $url -OutFile "pocketbase.zip"

# Descomprime
Expand-Archive -Path "pocketbase.zip" -DestinationPath "pocketbase" -Force

# Ejecuta
cd pocketbase
.\pocketbase.exe serve --http=127.0.0.1:8090
```

### Linux/Mac (Terminal):
```bash
# Descarga
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.23/pocketbase_0.22.23_linux_amd64.zip

# Descomprime
unzip pocketbase_*.zip

# Permisos
chmod +x pocketbase

# Ejecuta
./pocketbase serve --http=127.0.0.1:8090
```

---

## Paso 2: Acceder al Panel

Abre tu navegador: **http://127.0.0.1:8090/_/**

Crea tu primera cuenta admin.

---

## Paso 3: Crear Colecciones con API

Puedes usar la API REST para crear colecciones automáticamente:

### Script para crear colecciones (JavaScript):

```javascript
// Ejecuta esto en la consola del navegador en http://127.0.0.1:8090/_/
// O usa curl/Postman

const PB_URL = 'http://127.0.0.1:8090';

// Primero haz login como admin
async function login() {
  const res = await fetch(`${PB_URL}/api/admins/auth-with-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identity: 'tu-email@ejemplo.com',
      password: 'tu-password'
    })
  });
  const data = await res.json();
  return data.token;
}

// Crear colección
async function createCollection(token, schema) {
  const res = await fetch(`${PB_URL}/api/collections`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(schema)
  });
  return res.json();
}

// Ejemplo de uso:
// const token = await login();
// await createCollection(token, {
//   name: 'members',
//   type: 'base',
//   fields: [
//     { name: 'name', type: 'text', required: true },
//     { name: 'role', type: 'text', required: true },
//     { name: 'email', type: 'email', required: true },
//     { name: 'is_leader', type: 'bool', required: true }
//   ],
//   listRule: 'true',
//   viewRule: 'true',
//   createRule: '@request.auth.id != ""',
//   updateRule: '@request.auth.id != ""',
//   deleteRule: '@request.auth.id != ""'
// });
```

---

## Paso 4: Configurar Variables de Entorno

```bash
cd frontend
copy .env.local.example .env.local
# O en Linux/Mac: cp .env.local.example .env.local
```

El archivo `.env.local` debe contener:
```
NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
```

---

## Paso 5: Probar Conexión

```bash
cd frontend
npm run dev
```

Ve a: **http://localhost:3000/admin/login**

Inicia sesión con:
- Email: arturo.rodriguez@uleam.edu.ec (debe estar creado en PocketBase)
- Password: Pine2026

---

## Colecciones Requeridas

1. ✅ **members** - Miembros del equipo
2. ✅ **publications** - Publicaciones científicas
3. ✅ **videos** - Videos de YouTube
4. ✅ **video_categories** - Categorías de videos
5. ✅ **news** - Noticias
6. ✅ **activities** - Actividades/fotos
7. ✅ **site_settings** - Configuración del sitio
8. ✅ **users** - Usuarios auth (built-in)

**Detalles de cada colección en:** `POCKETBASE_SETUP.md`

---

## Verificación

- [ ] PocketBase corriendo en http://127.0.0.1:8090
- [ ] Panel admin accesible en http://127.0.0.1:8090/_/
- [ ] 8 colecciones creadas
- [ ] 2 usuarios admin creados
- [ ] .env.local configurado
- [ ] Login funciona en http://localhost:3000/admin/login
- [ ] Puedes crear/editar/eliminar items

---

**Para instrucciones detalladas, revisa `POCKETBASE_SETUP.md`**
