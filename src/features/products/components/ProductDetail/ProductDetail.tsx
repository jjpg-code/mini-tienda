import { type Product } from '../../types'

import logo from '@/assets/images/github.png'
import './ProductDetail.css'

type ProductDetailProps = {
    product: Product
    onBackClick: () => void
}

export function ProductDetail({ product, onBackClick }: ProductDetailProps) {
    return (
        <div className="product-detail-wrapper">
            <button className='back-btn' onClick={onBackClick}> Back to products</button>
            <div className="body-wrapper">
                <div className='product-img'>
                    <img className="logo-img" src={logo} alt="" />
                </div>
                <div className='product-information'>
                    <h1 className="product-name">{product.name}</h1>
                    <p className="category">{product.category}</p>
                    <p className="price">{product.price} €</p>
                    <p className="description">{product.description}</p>
                </div>
            </div>
        </div>
    )
}
