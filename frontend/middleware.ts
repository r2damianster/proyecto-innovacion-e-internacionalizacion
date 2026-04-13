import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow access to login page
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for auth token
    const token = request.cookies.get('pb_auth')?.value;
    
    if (!token) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Verify token is valid
    try {
      const authData = JSON.parse(token);
      if (!authData.token || !authData.model?.email) {
        const loginUrl = new URL('/admin/login', request.url);
        return NextResponse.redirect(loginUrl);
      }

      // Check if user is authorized
      const authorizedEmails = [
        'arturo.rodriguez@uleam.edu.ec',
        'jhonny.villafuerte@uleam.edu.ec'
      ];

      if (!authorizedEmails.includes(authData.model.email)) {
        // Unauthorized user - redirect to login
        const loginUrl = new URL('/admin/login', request.url);
        return NextResponse.redirect(loginUrl);
      }
    } catch {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
