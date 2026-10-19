"use client";
import { createContext,useContext,useEffect,useMemo,useState } from "react";
const CartContext=createContext(null);
export function CartProvider({children}) {
 const [items,setItems]=useState([]);
 useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem("addis-eats-cart")||"[]"))}catch{}},[]);
 useEffect(()=>{localStorage.setItem("addis-eats-cart",JSON.stringify(items))},[items]);
 const add=(dish)=>setItems(old=>{const found=old.find(x=>x.id===dish.id);return found?old.map(x=>x.id===dish.id?{...x,qty:x.qty+1}:x):[...old,{...dish,qty:1}]});
 const remove=(id)=>setItems(old=>old.filter(x=>x.id!==id));
 const change=(id,qty)=>setItems(old=>old.map(x=>x.id===id?{...x,qty:Math.max(1,qty)}:x));
 const clear=()=>setItems([]);
 const value=useMemo(()=>({items,add,remove,change,clear,count:items.reduce((n,x)=>n+x.qty,0),total:items.reduce((n,x)=>n+x.price*x.qty,0)}),[items]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart(){return useContext(CartContext)||{items:[],add:()=>{},remove:()=>{},change:()=>{},clear:()=>{},count:0,total:0};}
