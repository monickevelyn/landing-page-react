import './SectionTwo.css'
import imagemprincipal from '../../../public/img-section-one.png'

export default function SectionTwo(){
    return(
        <>
            <section className="section-two">
                <img 
                    src={imagemprincipal} 
                    alt="imagem roxa com ilustração do aplicativo" 
                    className="section-two-img"
                />
            </section>
        </>
    )
}