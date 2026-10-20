"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "../lib/api";
import { MapPin, PackageCheck, Truck } from "lucide-react";

export default function TrackClient() {
  const params = useSearchParams();
  const id = params.get("order") || "AE-1042";
  const [live, setLive] = useState(true);

  const { data, error, isLoading } = useSWR(
    `/api/orders?id=${encodeURIComponent(id)}`,
    fetcher,
    {
      refreshInterval: live ? 5000 : 0,
      revalidateOnFocus: true,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => setLive(false), 120000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container page-main">
      <div className="eyebrow">Delivery updates</div>
      <h1 className="page-title">Track your order</h1>

      <p className="muted">
        Order {id} · refreshes every 5 seconds while live updates are enabled.
      </p>

      {isLoading ? (
        <div className="skeleton" />
      ) : error ? (
        <div className="notice">
          We couldn&apos;t load this order. If you just placed it, keep the
          order link open.
        </div>
      ) : (
        <div className="two-col">
          <section className="panel">
            <div className="mapbox">
              <div className="pin">
                <MapPin size={21} />
              </div>
            </div>

            <div className="notice">
              <Truck
                size={17}
                style={{ verticalAlign: "middle", marginRight: 8 }}
              />
              {data?.order?.status || "Preparing"} ·{" "}
              {data?.order?.eta || "25–40 minutes"}
            </div>

            <button
              className="btn btn-outline"
              onClick={() => setLive((value) => !value)}
            >
              {live ? "Pause live refresh" : "Resume live refresh"}
            </button>

            <p className="small-note">
              Illustrative map only; live GPS tracking is not connected.
            </p>
          </section>

          <section className="panel">
            <h3>Order timeline</h3>

            {[
              "Order received",
              "Kitchen preparing",
              "Courier pickup",
              "Delivered",
            ].map((step, index) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  gap: 13,
                  padding: "13px 0",
                  opacity: index <= (data?.order?.step ?? 1) ? 1 : 0.4,
                }}
              >
                <div
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: "50%",
                    background:
                      index <= (data?.order?.step ?? 1)
                        ? "#e7f3e9"
                        : "#f0f0eb",
                    display: "grid",
                    placeItems: "center",
                    color: "#1d6b45",
                  }}
                >
                  <PackageCheck size={17} />
                </div>

                <div>
                  <b>{step}</b>
                  <div className="small-note">
                    {index === 0
                      ? "We've received your order"
                      : index === 1
                        ? "Your meal is being prepared"
                        : "We'll update this step as your order moves"}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}