import { NextResponse } from "next/server";

interface prop {
    name: string;
    age: number;
}

export const POST = async (req: Request) => {
    const body = await req.json();
    console.log('body : ', body);
    return NextResponse.json({
        body
    });
}

export const GET = async (req: Request) => {
    console.log('wokring ?')
    return new Response('hi');
}