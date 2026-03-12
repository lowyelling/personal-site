export const prerender = false;

import type { APIRoute } from 'astro';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export const POST: APIRoute = async ({ request }) => {
  if (import.meta.env.PROD) {
    return new Response(JSON.stringify({ error: 'Not available in production' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const order: { file: string; cropX: number; cropY: number }[] = await request.json();
  const filePath = resolve('src/data/art-order.json');
  writeFileSync(filePath, JSON.stringify(order, null, 2) + '\n');

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
