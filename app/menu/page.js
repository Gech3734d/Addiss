import {dishes} from "@/app/lib/dishes";
import MenuBrowser from "@/app/components/MenuBrowser";
export const metadata={title:"Menu",description:"Browse Ethiopian meals, vegetarian favorites, breakfast and drinks."};
export default function MenuPage(){return <main className="container page-main"><div className="eyebrow">Something delicious</div><h1 className="page-title">The Addis Eats menu</h1><p className="muted">Comforting classics, prepared fresh. Prices are shown in Ethiopian birr (ETB).</p><MenuBrowser initialDishes={dishes}/></main>}
