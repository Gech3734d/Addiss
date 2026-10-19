"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetcher } from "@/app/lib/api";
export default function LoginPage() {
 const [username,setUsername]=useState("admin"); const [password,setPassword]=useState("");
 const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
 const router=useRouter(); const params=useSearchParams();
 async function submit(event) { event.preventDefault(); setBusy(true); setError("");
  try { await fetcher("/api/auth/login",{method:"POST",body:JSON.stringify({username,password})});
   const next=params.get("next"); router.replace(next && next.startsWith("/") && !next.startsWith("//") ? next : "/admin"); router.refresh();
  } catch(err) { setError(err.message || "Unable to sign in."); } finally { setBusy(false); }
 }
 return <main className="container page-main"><form className="form-card" onSubmit={submit}>
  <div className="eyebrow">Team access</div><h1 className="page-title">Admin sign in</h1>
  <p className="muted">Sign in with your local demo credentials.</p>
  <div className="field"><label htmlFor="username">Username</label><input id="username" autoComplete="username" value={username} onChange={e=>setUsername(e.target.value)} required /></div>
  <div className="field"><label htmlFor="password">Password</label><input id="password" type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required /></div>
  {error && <p className="error" role="alert">{error}</p>}
  <button className="btn btn-primary" disabled={busy} style={{width:"100%"}}>{busy?"Signing in…":"Sign in"}</button>
  <div className="notice"><b>Default local demo login</b><br/>Username: <code>admin</code><br/>Password: <code>AddisEats@2026</code></div>
  <p className="small-note">For learning only. Replace this demo authentication with signed sessions or an identity provider before production.</p>
 </form></main>;
}
