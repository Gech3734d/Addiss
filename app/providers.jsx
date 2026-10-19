"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { CartProvider } from "@/app/lib/cart";
export function AppProviders({ children }) {
 const [client] = useState(() => new QueryClient({defaultOptions:{queries:{staleTime:30000,refetchOnWindowFocus:false,retry:1}}}));
 return <QueryClientProvider client={client}><CartProvider>{children}</CartProvider></QueryClientProvider>;
}
