import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    title: string,
    image: string,
    slug: string,
    date: string,
    location: string,
    time: string,
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
    return (
        <div>
            <Link href={`/events/${slug}`} id='event-card' >
                <Image src={image} height={300} width={410} alt='event Image' />
                <div className='flex flex-row gap-2' >
                    <Image src="/icons/pin.svg" alt='location' width={14} height={14} />
                    <span>
                        {location}
                    </span>
                </div>
                <p>{title}</p>
                <div className='datetime' >
                    <div>
                        <Image src="/icons/calendar.svg" alt='icon' width={14} height={14} />
                        <p>{date}</p>
                    </div>
                    <div>
                        <Image src="/icons/calendar.svg" alt='icon' width={14} height={14} />
                        <p>{time}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EventCard
