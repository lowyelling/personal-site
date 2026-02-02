export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { password } = body;

  const correctPassword = import.meta.env.RESUME_PASSWORD;

  if (!correctPassword) {
    return new Response(JSON.stringify({ error: 'Password not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (password === correctPassword) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
};
