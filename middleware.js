import { NextResponse } from 'next/server';
import { CarritoUrl } from './helpers/URL';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const response = NextResponse.next();

  return response;
}
