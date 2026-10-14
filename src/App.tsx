import logo from "./assets/images/github.png";

type HeaderProps = {
    cartCount: number;
}

function Header({cartCount}: HeaderProps) {
    return (
        <header className="header">
            <div className="logo-wrapper">
                <a href="/">
                    <img className="logo" src={logo} alt="Logo web" />
                </a>
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
        <Header cartCount={13}/>
    );
}