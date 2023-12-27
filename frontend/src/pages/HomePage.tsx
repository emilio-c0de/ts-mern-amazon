
import LoadingBox from '@/components/LoadingBox'
import MessageBox from '@/components/MessageBox'
import ProductItem from '@/components/ProductItem'
import { ApiError } from '@/types/api-error'
import { Product } from '@/types/product.type'
import { getError } from '@/utils/utils'
import axios from 'axios'
import React, { Reducer, useEffect, useReducer } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type State = {
    products: Array<Product>
    loading: boolean
    error: string
}

type Action =
    | { type: 'FETCH_REQUEST' }
    | { type: 'FETCH_SUCCESS', payload: Array<Product> }
    | { type: 'FETCH_FAIL', payload: string }

const initialState: State = {
    products: [],
    loading: false,
    error: ''
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true }
        case "FETCH_SUCCESS":
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case "FETCH_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const HomePage = () => {
    const [{ loading, error, products }, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState)

    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQUEST' })
        try {
            const result = await axios.get('/api/products');
            dispatch({
                type: "FETCH_SUCCESS",
                payload: result.data
            })
            console.log(result)
        } catch (error) {
            dispatch({
                type: 'FETCH_FAIL',
                payload: getError(error as ApiError)
            })
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        loading ? (
            <LoadingBox />
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <Row>
                {
                    products.map((product, index) => (
                        <Col key={index} xs="6" md="4" lg={3}>
                            <ProductItem product={product} />
                        </Col>
                    ))
                }
            </Row>
        )
    )
}

export default HomePage