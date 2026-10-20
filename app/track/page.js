import { Suspense } from "react";
import TrackClient from "./TrackClient";

export default function TrackPage() {
  return (
    <Suspense
      fallback={
        <main className="container page-main">
          <div className="eyebrow">Delivery updates</div>
          <h1 className="page-title">Track your order</h1>
          <div className="skeleton" />
        </main>
      }
    >
      <TrackClient />
    </Suspense>
  );
}
