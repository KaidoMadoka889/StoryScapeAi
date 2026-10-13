import { NextResponse } from 'next/server';
import { prisma } from '../../../src/lib/prisma';

export async function GET() {
  try {
    // Try a lightweight query to verify database connectivity.
    // If the database or migrations aren't applied yet, this will throw.
    const userCount = await prisma.user.count();

    return NextResponse.json({ status: 'ok', database: true, userCount });
  } catch (error: any) {
    // Return a helpful error message without leaking secrets.
    return new NextResponse(
      JSON.stringify({ status: 'error', database: false, message: error?.message ?? 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
