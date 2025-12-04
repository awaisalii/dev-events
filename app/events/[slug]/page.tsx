
import EventDetails from "@/components/EventDetails";
import { cacheLife } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const slug= params?.then((p)=>p.slug);
    return(
      <>
      <Suspense fallback={<div>Loading...</div>} >
        <EventDetails params={slug} />
      </Suspense>
      </>
    )

}
