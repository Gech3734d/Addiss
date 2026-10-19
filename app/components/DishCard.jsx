"use client";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/app/lib/cart";
export default function DishCard({dish}) {
 const {add,items}=useCart(); const inCart=items.some(x=>x.id===dish.id);
 return <article className="dish-card"><div className="dish-art"><span className="dish-tag">{dish.tag}</span><span role="img" aria-label={dish.name}>{dish.emoji}</span></div><div className="dish-info"><h3>{dish.name}</h3><p>{dish.description}</p><div className="dish-bottom"><span className="price">{dish.price} ETB</span><button className="iconbtn" aria-label={`Add ${dish.name} to cart`} onClick={()=>add(dish)}>{inCart?<Check size={18}/>:<Plus size={19}/>}</button></div></div></article>
}
