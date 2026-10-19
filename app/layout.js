import "./globals.css";
import { AppProviders } from "@/app/providers";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: { default: "Addis Eats | Ethiopian food, delivered", template: "%s | Addis Eats" },
  description: "Discover Ethiopian favorites, order delicious meals, and follow your Addis Eats delivery.",
  openGraph: { title: "Addis Eats", description: "Fresh Ethiopian favorites, made with care.", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><AppProviders><div className="shell"><Header />{children}<Footer /></div></AppProviders></body></html>;
}
