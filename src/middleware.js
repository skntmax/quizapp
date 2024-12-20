import { NextResponse } from 'next/server';
import { bytecodeUrls, cookies } from './constant';
export function middleware(request) {
  // Check if a specific cookie exists
  // const myCookie = request.cookies.get(cookies.btcode_live_cd); // Replace 'myCookieName' with your cookie name

  // // If the cookie does not exist, redirect to bytecode.live
  // if (!myCookie) {
  //   return NextResponse.redirect(new URL(bytecodeUrls.authenticatedFalse, request.url));
  // }

  // If the cookie exists, proceed with other logic or return the original response
  return NextResponse.next(); // Allow the request to continue
}
