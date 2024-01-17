import Sections from "../Sections";
import ListaItem from "./ListaItem";
import './SectionThree.css'

import Fade from 'react-reveal/Fade';

export default function SectionThree() {
  return (
    <>
    <Fade left>
      <section id="features" className="section-three">
        <Sections
          classe="div-titulo-section-three"
          titulo="Start growing your wealth with Eclipse"
          paragrafo="All-in-one personal finance app that simplifies investment opportunities, expense tracking, and financial news for users.."
        />
        <ListaItem />
      </section>
    </Fade>
    </>
  );
}
