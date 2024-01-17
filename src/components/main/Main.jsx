import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";
import SectionThree from "../sectionThree/SectionThree";
import SectionFor from "../sectionFor/SectionFor";

import './Main.css'

export default function Main() {
  return (
    <>
      <main className="main">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFor />
      </main>
    </>
  );
}
