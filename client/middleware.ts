import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profile', 
  '/settings',
  '/wallet',
  '/transactions'
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  if (isProtectedRoute) {
    // Check for the presence of the auth cookie
    const token = request.cookies.get('paycort_token')?.value;

    if (!token) {
      // Redirect to login if no token is found
      const loginUrl = new URL('/login', request.url);
      // Optionally preserve the return URL
      loginUrl.searchParams.set('from', path);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (auth pages)
     * - register
     * - learn (public page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|register).*)',
  ],
};
