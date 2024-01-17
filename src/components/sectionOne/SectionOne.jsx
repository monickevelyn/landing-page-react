import Button from "../Button";
import './SectionOne.css'
import Fade from 'react-reveal/Fade';

export default function SectionOne() {
  return (
    <>
    <Fade left>
      <section className="section-one">
          <h1>All-in-one Finance App you always wanted</h1>
          <p>
            Gain control of your finances with our all-in-one finance app. Track
            your spending, find investment opportunities, and learn.
          </p>
          <Button classe="btn-section-one" conteudo="Get Started" />
        </section>
    </Fade>
    </>
  );
}
