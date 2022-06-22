import { Context } from 'netlify:edge';

export default async (request: Request, context: Context) => new Response(request.url, { status: 200 });