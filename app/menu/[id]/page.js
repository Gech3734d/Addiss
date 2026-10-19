import {notFound} from "next/navigation";
import Link from "next/link";
import {dishes} from "@/app/lib/dishes";
import DishDetailClient from "./DishDetailClient";
export function generateStaticParams(){return dishes.map(d=>({id:d.id}))}
export async function generateMetadata({params}){const dish=dishes.find(d=>d.id===params.id);return {title:dish?.name||"Dish",description:dish?.description||"Explore Addis Eats dishes."}}
export default function DishPage({params}){const dish=dishes.find(d=>d.id===params.id);if(!dish)notFound();return <main className="container page-main"><Link href="/menu" className="muted">← Back to menu</Link><div className="two-col" style={{marginTop:25,alignItems:"center"}}><div className="hero-art" style={{minHeight:330}}><span style={{fontSize:130}}>{dish.emoji}</span></div><div><div className="eyebrow">{dish.category}</div><h1 className="page-title">{dish.name}</h1><p className="lead">{dish.description}</p><h2 className="price">{dish.price} ETB</h2><DishDetailClient dish={dish}/></div></div></main>}
