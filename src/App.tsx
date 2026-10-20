import logo from './assets/images/github.png'
import { products } from './features/products/data/products.ts'
import { type Product } from './features/products/types.ts'
import { Header } from './components/layout/Header/Header.tsx'
import { Footer } from './components/layout/Footer/Footer.tsx'

type ProductCardProps = {
    product: Product
}

type ProductListProps = {
    products: Product[]
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
