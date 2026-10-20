import logo from '../../../assets/images/github.png'

import './Header.css';

type HeaderProps = {
    cartCount: number
    onLogoClick: () => void
}

export function Header({ cartCount, onLogoClick }: HeaderProps) {
    return (
        <header className="header">
            <div className="logo-wrapper">
                <button className="logo-btn" onClick={onLogoClick}>
                    <img className="logo-img" src={logo} alt="" />
                    Mini-tienda React
                </button>
            </div>
            <div className="search-wrapper">
                <input type="text" className="search" />
            </div>
            <div className="cart-wrapper">
                <div className="cart">
                    Cart ( <span>{cartCount}</span> )
                </div>
            </div>
        </header>
    )
}