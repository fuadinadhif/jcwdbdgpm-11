export async function GET() {
  return Response.json({
    message: "API is running",
    uptime: process.uptime(),
  });
}

// export async function POST() {}
