"use client";
export default function Error({error,reset}){return <main className="container page-main"><div className="panel"><h1>Something went wrong</h1><p className="muted">{error?.message||"Unexpected error."}</p><button className="btn btn-primary" onClick={()=>reset()}>Try again</button></div></main>}
