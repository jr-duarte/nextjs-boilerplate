import { PATH } from '@Routes/paths';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  // Example Page Private
  const token = request.cookies.get('JWT_TOKEN');

  if (request.url.includes(PATH.loggedArea.root)) {
    if (!token) {
      return NextResponse.redirect(
        new URL(PATH.notloggedArea.login, request.url),
      );
    }
  }

  if (request.url.includes(PATH.notloggedArea.login)) {
    if (token) {
      return NextResponse.redirect(
        new URL(PATH.loggedArea.profile, request.url),
      );
    }
  }
}
