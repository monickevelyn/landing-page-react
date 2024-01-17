import Sections from "../Sections";
import Button from "../Button";

import './SectionFor.css'

export default function SectionFor() {
  return (
    <>
        <section className="section-for">
          <Sections
            classe="div-titulo-section-for"
            titulo="Build a head start to your finances"
            paragrafo="Eclipse is the perfect answer! Our platform enables you to create wealth, manage your expenses, stay up to date with the latest financial news, and get ready for upcoming tax season."
          />

          <Button classe="btn-section-for" conteudo="Start now" />
        </section>
    </>
  );
}