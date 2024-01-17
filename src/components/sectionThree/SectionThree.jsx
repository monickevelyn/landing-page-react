import Sections from "../Sections";
import ListaItem from "./ListaItem";
import './SectionThree.css'

export default function SectionThree() {
  return (
    <>
      <section id="features" className="section-three">
        <Sections
          classe="div-titulo-section-three"
          titulo="Start growing your wealth with Eclipse"
          paragrafo="All-in-one personal finance app that simplifies investment opportunities, expense tracking, and financial news for users.."
        />
        <ListaItem />
      </section>
    </>
  );
}
