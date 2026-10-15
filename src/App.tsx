import logo from './assets/images/github.png'

type HeaderProps = {
    cartCount: number
    onLogoClick: () => void
}

function Header({ cartCount, onLogoClick }: HeaderProps) {
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

function Footer({ onLogoClick }: HeaderProps) {
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

                <p>Copyright {year}</p>
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

export default function App() {
    return (
        <>
            <Header cartCount={13} onLogoClick={() => console.log('test')} />

            <Footer onLogoClick={() => console.log('test')} />
        </>
    )
}
