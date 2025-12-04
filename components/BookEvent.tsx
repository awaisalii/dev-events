"use client"
import { createBooking } from "@/lib/booking.actions";
import { useState } from "react"

const BookEvent = ({ eventId, slug }: { eventId: string, slug: string }) => {

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { success, error } = await createBooking({ eventId, slug, email });

        if (success) {
            setSubmitted(true);
        } else {
            console.log(error);
        }
    };


    return (
        <div className="" id="book-event" >
            {
                submitted ? (
                    <p className="text-sm">Thanks you for signing up!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <button type="submit" className="button-submit" > Submit </button>
                        </div>
                    </form>
                )
            }
        </div>
    )
}

export default BookEvent
