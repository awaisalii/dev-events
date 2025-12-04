import { NextResponse } from 'next/server';
import connectDB from "@/lib/mongodb";
import { Event } from '@/database';
interface RouteParams {
  params: {
    slug: string;
  };
}


export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params; 

  // console.log("API /events/[slug] called with slug:", slug);

  try {
    await connectDB();

    if (!slug || typeof slug !== "string") {
      // console.log("Bad slug:", slug);
      return NextResponse.json({ error: "Invalid or missing slug parameter" }, { status: 400 });
    }

    if (!/^[a-z0-9-]+$/i.test(slug)) {
      // console.log("Slug invalid chars:", slug);
      return NextResponse.json({ error: "Slug contains invalid characters" }, { status: 400 });
    }

    const event = await Event.findOne({ slug }).lean();
    // console.log("Event found:", event);

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json({ event }, { status: 200 });

  } catch (error) {
    console.error("GET /api/events/[slug] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

