"use client";
import { useCart } from "../../lib/cart";
export default function DishDetailClient({dish}){const {add}=useCart();return <button className="btn btn-primary" onClick={()=>add(dish)}>Add to basket · {dish.price} ETB</button>}
