"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, LayoutDashboard, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/app/lib/cart";
export default function Header() {
  const path = usePathname(); const {count} = useCart();
  return <header className="topbar"><Link href="/" className="brand">addis<span>eats.</span></Link>
    <nav className="navlinks"><Link className={path==="/"?"active":""} href="/">Discover</Link><Link className={path==="/menu"?"active":""} href="/menu">Menu</Link><Link href="/track">Track order</Link><Link href="/dashboard"><LayoutDashboard size={15} style={{verticalAlign:"middle",marginRight:5}}/>Dashboard</Link></nav>
    <div className="navright"><Link className="btn btn-soft" href="/menu"><UtensilsCrossed size={16}/> Menu</Link><Link className="btn btn-primary" href="/cart"><ShoppingBag size={16}/> <span>{count}</span></Link></div>
  </header>;
}
