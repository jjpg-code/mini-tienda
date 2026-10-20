import { type Product } from '../../types'
import { ProductCard } from '../ProductCard/ProductCard'

import './ProductList.css'

type ProductListProps = {
    products: Product[]
}

export function ProductList({ products }: ProductListProps) {
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
