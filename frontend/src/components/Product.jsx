import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
        </a>

      <Card.Body>
        <a href={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card.Title>{product.name}</Card.Title>
        </a>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
      </Card.Body>

    </Card>
  )
}


export default Product