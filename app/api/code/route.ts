import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const instructionMessage = {
  role: "system",
  content: "you are a code generator. you must answer only in markdown code snippets. use code comments for explanation"
}

export async function POST(req: Request) {
  try {
    const {userId} = auth();
    const body = await req.json();
    const {messages} = body;

    if(!userId){
        return new NextResponse("Unauthorized", {status: 401});
    }

    if(!messages){
        return new NextResponse("Messages are reuqired",{status:400})
    }

    const response =  await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [instructionMessage, ...messages]
      });

      return NextResponse.json(response.choices[0].message)
      

    
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}