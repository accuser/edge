import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const slug = url.pathname.split("/get-group/")[1];

  if (!slug) {
    return {
      status: 400,
      body: "Missing slug"
    };
  }

  return {
    status: 200
  }
}
