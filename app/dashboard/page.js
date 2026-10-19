import DashboardClient from "./DashboardClient";
export const metadata={title:"Operations dashboard",description:"Order metrics, revenue, and delivery overview for Addis Eats."};
export default function DashboardPage(){return <main className="container page-main"><div className="eyebrow">Operations overview</div><h1 className="page-title">Good afternoon, team.</h1><p className="muted">A sample dashboard with query-driven refresh, charts, order table and delivery map.</p><DashboardClient/></main>}
