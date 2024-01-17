import './Footer.css'

import Fade from 'react-reveal/Fade';

export default function Footer(){
    return(
        <>
        <Fade left>
            <footer id="social" className="footer">
                <p className="texto-footer">
                © 2023 Inside Labs. All rights reserved.
                </p>
                <div className="div-social-footer">
                    <img src="/public/img/twitter.svg" alt="icone-twitter" className="social-footer" />
                    <img src="/public/img/linkedin.svg" alt="icone-linkedin" className="social-footer" />
                </div>
            </footer>
        </Fade>
        </>
    )
}