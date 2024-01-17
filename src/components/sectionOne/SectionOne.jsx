import Button from "../Button";
import './SectionOne.css'

export default function SectionOne() {
  return (
    <>
      <section className="section-one">
          <h1>Finance App</h1>
          <p>
            Gain control of your finances with our all-in-one finance app. Track
            your spending, find investment opportunities, and learn.
          </p>
          <Button classe="btn-section-one" conteudo="Get Started" />
        </section>
    </>
  );
}
