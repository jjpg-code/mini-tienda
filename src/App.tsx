import { useState } from 'react'

import { products } from './features/products/data/products'
import { Header } from './components/layout/Header/Header'
import { Footer } from './components/layout/Footer/Footer'
import { ProductList } from './features/products/components/ProductList/ProductList'
import { ProductDetail } from './features/products/components/ProductDetail/ProductDetail'

export default function App() {
    const [selectedProductId, setSelectedProductId] = useState<string | null>(
        null,
    )

    const productToShow = products.find((item) => item.id === selectedProductId)

    function handleGoToList() {
        setSelectedProductId(null)
    }

    function handleProductClick(id: string) {
        setSelectedProductId(id)
    }

    return (
        <>
            <Header cartCount={13} onLogoClick={handleGoToList} />

            {productToShow ? (
                <ProductDetail
                    product={productToShow}
                    onBackClick={handleGoToList}
                />
            ) : (
                <ProductList
                    products={products}
                    onProductClick={handleProductClick}
                />
            )}

            <Footer onLogoClick={handleGoToList} />
        </>
    )
}
