import { Product } from '@/types/product.type'
import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

type ProductItemProps = {
    product: Product
}
const ProductItem: FC<ProductItemProps> = ({ product }) => {
    return (
        <Card>
            <Link to={'/product/' + product.slug}>
                <img src={product.image} alt="any" className='card-img-top' />
            </Link>
            <Card.Body>
                <Link to={'/product/' + product.slug}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                {
                    product.countInStock === 0 ? (
                        <Button variant='light' disabled>
                            Out of stock
                        </Button>
                    ) : (
                        <Button>Add to cart</Button>
                    )
                }
            </Card.Body>
        </Card>
    )
}

export default ProductItem