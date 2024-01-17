import './Footer.css'
import twitter from '/public/img/twitter.svg'
import linkedin from '/public/img/twitter.svg'

export default function Footer(){
    return(
        <>
            <footer id="social" className="footer">
                <p className="texto-footer">
                © 2023 Inside Labs. All rights reserved.
                </p>
                <div className="div-social-footer">
                    <img src={twitter} alt="icone-twitter" className="social-footer" />
                    <img src={linkedin} alt="icone-linkedin" className="social-footer" />
                </div>
            </footer>
        </>
    )
}