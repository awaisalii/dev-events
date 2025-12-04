'use server'
import { Booking } from "@/database";
import connectDB from "./mongodb";
import Error from "next/error";

export const createBooking = async ({eventId,slug,email}:{eventId:string, slug:string, email:string}) => {
    try{
        await connectDB();

        const booking=  ( await Booking.create({eventId,slug,email})).lean();
        return {success:true,booking}

    }catch(error){
        console.log(error);
        return {success:false, error}
    }
}