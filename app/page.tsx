import ExploreBtn from '@/components/ExploreBtn'
import EventCard from '@/components/EventCard';
import { events } from '@/lib/constraints';
import { IEvent } from '@/database/event.model';
import { cacheLife } from 'next/cache';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const Page = async () => {
  'use cache'
  cacheLife("hours");
  const response = await fetch(`${baseUrl}/api/events`);
  const data = await response.json();
  const events: IEvent[] = data.events;
  console.log(events)

  return (
    <>
      <section>
        <h1 className='text-center mt-10' > The Hub for every Dev <br /> Event you can't miss </h1>
        <p className='text-center mt-5 ' >Hackathons, Meetups and Conferences, All in One Place</p>
      </section>
      <ExploreBtn />
      <div className='mt-20 space-y-7' >
        <h3>Featured Events</h3>

        <ul className='events' >
          {events && events.length > 0 ? events.map((event: IEvent) => {
            return <li className='list-none' key={event?.title} >
              <EventCard  {...event} />
            </li>
          }) : ""}
        </ul>

      </div>
    </>
  )
}

export default Page
