import { User } from "@/app/db";
import { SECRET } from "../utils/auth";
import jwt from "jsonwebtoken";
// import { dbConnect } from "../utils/db";

export const POST = async (req: Request) => {
    // await dbConnect();
    const { email, password } = await req.json();
    const user = await User.findOne({ email, password });

    if (!SECRET) {
        throw new Error('SECRET_KEY is not set');
    }

    if (user) {
        const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
        return new Response(JSON.stringify({
            message: 'Logged in Succesfully !',
            token
        }))
    } else {
        return new Response('invalid email or password !');
    }
}