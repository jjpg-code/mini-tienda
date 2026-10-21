import { products } from './features/products/data/products'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { ProductList } from './features/products/components/ProductList/ProductList'

export default function App() {
    return (
        <>
            <Header cartCount={13} onLogoClick={() => console.log('test')} />
            <ProductList products={products} />
            <Footer onLogoClick={() => console.log('test')} />
        </>
    )
}
