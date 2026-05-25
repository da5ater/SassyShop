import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded shadow-sm transition-all hover-lift'>
        <Link to={`/product/${product._id}`}>

            <Card.Img src={product.image} variant='top' className='shadow  rounded-4' />
        </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card.Title className='text-decoration-underline '>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className='lead display-6'>
          ${product.price?.toFixed(2)}
        </Card.Text>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
        </Card.Text>

      </Card.Body>

    </Card>
  )
}


export default Product