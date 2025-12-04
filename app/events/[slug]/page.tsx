// app/events/[slug]/page.tsx
import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string }; 
}) {
  // 
  // console.log(slug)
  return (
    <>
      <Suspense fallback={<div>Loading Event Details...</div>}>
        <EventDetails params={params} /> 
      </Suspense>
    </>
  );
}