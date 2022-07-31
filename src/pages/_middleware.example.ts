import { PATH } from '@Routes/paths';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  // Example Page Private
  const token = request.cookies.JWT_TOKEN;

  if (request.url.includes(PATH.dashboard.root)) {
    if (!token) {
      return NextResponse.redirect(new URL(PATH.login.root, request.url));
    }
  }

  if (request.url.includes('/login')) {
    if (token) {
      return NextResponse.redirect(new URL(PATH.dashboard.root, request.url));
    }
  }
}
