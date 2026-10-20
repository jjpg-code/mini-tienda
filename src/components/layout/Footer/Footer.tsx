import logo from '../../../assets/images/github.png'

import './Footer.css'

type FooterProps = {
    onLogoClick: () => void
}

export function Footer({ onLogoClick }: FooterProps) {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="left-column">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
            </div>
            <div className="center-column">
                <button className="logo-btn" onClick={onLogoClick}>
                    <img className="logo-img" src={logo} alt="" />
                    Mini-tienda React
                </button>

                <p>© {year} Mini-tienda React</p>
            </div>
            <div className="right-column">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
            </div>
        </footer>
    )
}
