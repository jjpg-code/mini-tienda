import logo from './assets/images/github.png'
import { products, type Product } from './data/products.ts'
import { Footer } from './components/layout/Footer/Footer.tsx'

type HeaderProps = {
    cartCount: number
    onLogoClick: () => void
}

type ProductCardProps = {
    product: Product
}

type ProductListProps = {
    products: Product[]
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

function ProductList({ products }: ProductListProps) {
    const listProducts = products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))

    return (
        <div className="product-list-wrapper">
            <h1>Products</h1>
            <div className="product-list">{listProducts}</div>
        </div>
    )
}

export default function App() {
    return (
        <>
            <Header cartCount={13} onLogoClick={() => console.log('test')} />
            <ProductList products={products} />
            <Footer onLogoClick={() => console.log('test')} />
        </>
    )
}
