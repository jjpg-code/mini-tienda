import { products } from './features/products/data/products.ts'
import { Header } from './components/layout/Header/Header.tsx'
import { Footer } from './components/layout/Footer/Footer.tsx'
import { ProductList } from './features/products/components/ProductList/ProductList.tsx'

export default function App() {
    return (
        <>
            <Header cartCount={13} onLogoClick={() => console.log('test')} />
            <ProductList products={products} />
            <Footer onLogoClick={() => console.log('test')} />
        </>
    )
}
