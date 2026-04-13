# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### TODO
- [ ] Setup PocketBase backend locally with collections
- [ ] Extract content from Word documents and seed database
- [ ] Create additional public pages (videos, news, publications with full views)
- [ ] Deploy to Vercel and PocketBase Cloud
- [ ] Add file upload functionality for images and PDFs
- [ ] Add rich text editor for news content

## [0.3.0] - 2026-04-12 (Session 3 - Admin Panel Complete)

### Added - Admin Panel
- Full admin panel with sidebar navigation
- Authentication system with middleware protection
- Login page with email/password (only authorized emails)
- Dashboard with statistics and quick actions
- CRUD for Members (create, read, update, delete)
- CRUD for Videos with YouTube URL parsing
- CRUD for Video Categories with auto-slug generation
- CRUD for Publications with type selection
- CRUD for News with slug generation
- CRUD for Activities with category selection
- Site Settings page with social media links
- DataTable reusable component for all CRUD pages
- Admin layout with sidebar navigation
- Logout functionality
- Protected routes via middleware

### Technical
- Middleware for route protection (/admin/*)
- Admin auth helper library
- Suspense boundary for useSearchParams
- Build successful: 14 static pages generated
- First Load JS: 87.3 kB - 118 kB

## [0.2.0] - 2026-04-12 (Session 2 - Landing Page Complete)

### Added - Landing Page
- Complete landing page with all sections (Hero, About, Team, Videos, Publications, News, Activities, Contact)
- Video gallery with category filtering system
- Responsive header with sticky navigation
- Footer with social links and contact info
- TypeScript interfaces for all data models
- PocketBase client with auth and data fetching helpers
- Image assets integrated (logos, team photos, activity photos)
- Smooth scrolling and modern UI/UX with TailwindCSS
- ULEAM branding colors (blue #003366, gold #FFD700)
- Build successful (no errors)

## [0.1.0] - 2026-04-12 (Session 1 - Initial Setup)

### Initial Setup
- Created project structure
- Configured Next.js with TypeScript and TailwindCSS
- Defined PocketBase schema (8 collections)
- Created TypeScript types for all data models
- Built Header and Footer components
- Set up PocketBase client with helper functions
- Created QWEN.md and CHANGELOG.md
- Session interrupted due to internet issues
