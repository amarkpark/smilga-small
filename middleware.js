export function middleware(request) {
  // console.log("logging in the middleware", request.url);
  return Response.json({ msg: "monkey in the middleware" });
};

export const config = {
  matcher: ["/about/:path*", "/prisma-example/:path*"],
};