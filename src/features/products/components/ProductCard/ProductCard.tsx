import logo from '@/assets/images/github.png'
import { type Product } from '../../types'

import './ProductCard.css'

type ProductCardProps = {
    product: Product
    onProductClick: () => void
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="image-wrapper">
                <img className="product-img" src={logo} alt="" />
            </div>
            <div className="body-wrapper">
                <p className="category">{product.category}</p>
                <h2 className="product-name">
                    <button onClick={onProductClick}>{product.name}</button>
                </h2>
                <p className="price">{product.price} €</p>
            </div>
        </article>
    )
}
