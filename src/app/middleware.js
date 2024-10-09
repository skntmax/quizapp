import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('req=>>>', request);
  return NextResponse.redirect(new URL('www.google.com', request.url))
}