import { sampleProducts } from '@/mocks/data'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Row>
            {
                sampleProducts.map((product, index) => (
                    <Col key={index} xs="6" md="4" lg={3}>
                        <Link to={'/product/' + product.slug}>
                            <img src={product.image} alt="any" className='product-image' />
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default HomePage