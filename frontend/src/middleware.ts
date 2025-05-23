import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAlunoRoute = pathname.startsWith('/aluno');
  const isLoginRoute = pathname === '/aluno/login';

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') // arquivos estáticos como .css, .png, etc.
  ) {
    return NextResponse.next();
  }

  // Redirecionar '/' ou qualquer rota que não começa com /aluno → /aluno
  if (!isAlunoRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/aluno';
    return NextResponse.redirect(url);
  }

  // Autenticação nas rotas /aluno/*
  const token = request.cookies.get('auth-token')?.value;

  if (!token && !isLoginRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/aluno/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
