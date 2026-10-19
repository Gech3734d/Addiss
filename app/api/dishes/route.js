import {NextResponse} from "next/server";
import {dishes} from "@/app/lib/dishes";
export const dynamic="force-dynamic";
export async function GET(){return NextResponse.json({dishes,updatedAt:new Date().toISOString()},{headers:{"Cache-Control":"no-store"}})}
