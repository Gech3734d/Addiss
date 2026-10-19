"use client";
import {useDeferredValue,useMemo,useState} from "react";
import useSWR from "swr";
import {fetcher} from "@/app/lib/api";
import DishCard from "./DishCard";
import {categories,dishes} from "@/app/lib/dishes";
export default function MenuBrowser({initialDishes=dishes}) {
 const [category,setCategory]=useState("All"); const [term,setTerm]=useState(""); const deferred=useDeferredValue(term);
 const {data}=useSWR("/api/dishes",fetcher,{fallbackData:{dishes:initialDishes},revalidateOnFocus:false});
 const list=useMemo(()=>((data?.dishes||initialDishes).filter(d=>(category==="All"||d.category===category)&&(`${d.name} ${d.description}`.toLowerCase().includes(deferred.toLowerCase())))),[data,initialDishes,category,deferred]);
 return <><div className="section-head"><div><div className="eyebrow">Made fresh daily</div><h2>Find your favorite</h2></div><input className="search" aria-label="Search dishes" placeholder="Search dishes..." value={term} onChange={e=>setTerm(e.target.value)}/></div><div className="filters" aria-label="Filter by category">{categories.map(c=><button key={c} className={`chip ${category===c?"selected":""}`} onClick={()=>setCategory(c)}>{c}</button>)}</div>{list.length?<div className="dish-grid">{list.map(d=><DishCard key={d.id} dish={d}/>)}</div>:<div className="empty">No dishes match your search. Try another term.</div>}</>;
}
