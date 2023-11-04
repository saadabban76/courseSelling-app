import { User } from "@/app/db";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
// import { dbConnect } from "../utils/auth";
import { MdConnectionstring } from '../../../lib/db';
import { json } from "stream/consumers";
import * as z from 'zod';
import { NextApiResponse } from "next";
const secret = process.env.SECRET_KEY;

if (!secret) {
    throw new Error('SECRET_KEY is not set');
};

const signupInputs = z.object({
    username: z.string().email(),
    password: z.string().min(4)
})

export const POST = async (req: Request) => {
    await mongoose.connect(MdConnectionstring);
    // const { email, password } = signupSchema.parse(req.body)
    // const body = await req.json();
    // console.log('req : ', body);
    // const zodAuth = await signupInputs.safeParse(body);
    // if (!zodAuth.success) {
    //     return new Response(JSON.stringify({
    //         message: 'invalid user credentials !'
    //     }));
    // }

    const { email, password } = await req.json();
    console.log('email : ', email);
    console.log('password : ', password);
    // check if the user already exist in the db
    const userExist = await User.findOne({ email, password });
    console.log('user : ', userExist);
    if (userExist) {
        // console.log(JSON.stringify({ message: 'User Already Exist with this Email ID !' }));
        return new Response(JSON.stringify({ message: 'User Already Exist with this Email ID !' }))
    } else {
        const newUser = new User({ email, password });
        await newUser.save();
        const token = jwt.sign({ email, password }, secret, { expiresIn: 3600 });

        console.log(JSON.stringify({
            user: email,
            token,
        }));

        return new Response(JSON.stringify({
            user: email,
            token,
        }))
    }
}