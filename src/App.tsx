import logo from './assets/images/github.png'
import { products, type Product } from './data/products.ts'

type HeaderProps = {
    cartCount: number
    onLogoClick: () => void
}

type FooterProps = {
    onLogoClick: () => void
}

type ProductCardProps = {
    product: Product
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

function Footer({ onLogoClick }: FooterProps) {
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

function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="image-wrapper">
                <img className="product-img" src={logo} alt="" />
            </div>
            <div className="body-wrapper">
                <p className="category">{product.category}</p>
                <h2 className="product-name">{product.name}</h2>
                <p className="price">{product.price} €</p>
            </div>
        </article>
    )
}

export default function App() {
    return (
        <>
            <Header cartCount={13} onLogoClick={() => console.log('test')} />
            <ProductCard product={products[0]} />
            <Footer onLogoClick={() => console.log('test')} />
        </>
    )
}
