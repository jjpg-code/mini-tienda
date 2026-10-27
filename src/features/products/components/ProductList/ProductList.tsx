import { type Product } from '../../types'
import { ProductCard } from '../ProductCard/ProductCard'

import './ProductList.css'

type ProductListProps = {
    products: Product[]
    onProductClick: (id: string) => void
}

export function ProductList({ products, onProductClick }: ProductListProps) {
    const listProducts = products.map((product) => (
        <ProductCard
            key={product.id}
            product={product}
            onProductClick={() => onProductClick(product.id)}
        />
    ))

    return (
        <div className="product-list-wrapper">
            <h1>Products</h1>
            <div className="product-list">{listProducts}</div>
        </div>
    )
}
