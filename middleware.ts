import { auth } from "@/auth"
 
export default auth((req) => {
  // Protect all routes under /dashboard and /admin
  const isAuth = !!req.auth
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/dashboard') || 
                          req.nextUrl.pathname.startsWith('/admin')
  
  if (isProtectedRoute && !isAuth) {
    return Response.redirect(new URL('/login', req.nextUrl))
  }
  
  // Additional admin route protection
  const isAdmin = req.auth?.user?.role === 'ADMIN'
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
  
  if (isAdminRoute && !isAdmin) {
    return Response.redirect(new URL('/', req.nextUrl))
  }
})

// Optionally configure Middleware matcher
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 