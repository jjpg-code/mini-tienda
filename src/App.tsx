import logo from "./assets/images/github.png";

type HeaderProps = {
    cartCount: number;
    onLogoClick: () => void;
}

function Header({cartCount, onLogoClick}: HeaderProps) {
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

export default function App() {
    return (
        <Header cartCount={13} onLogoClick={() => console.log('test')}/>
    );
}