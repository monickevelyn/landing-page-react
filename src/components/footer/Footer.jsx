import './Footer.css'

export default function Footer(){
    return(
        <>
            <footer id="social" className="footer">
                <p className="texto-footer">
                © 2023 Inside Labs. All rights reserved.
                </p>
                <div className="div-social-footer">
                    <img src="/src/assets/img/twitter.svg" alt="icone-twitter" className="social-footer" />
                    <img src="/src/assets/img/linkedin.svg" alt="icone-linkedin" className="social-footer" />
                </div>
            </footer>
        </>
    )
}