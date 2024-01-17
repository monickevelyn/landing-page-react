import './SectionTwo.css'

import Fade from 'react-reveal/Fade';

export default function SectionTwo(){
    return(
        <>
        <Fade left>
            <section className="section-two">
                <img 
                    src="/public/img/img-section-one.png" 
                    alt="imagem roxa com ilustração do aplicativo" 
                    className="section-two-img"
                />
            </section>
        </Fade>
        </>
    )
}