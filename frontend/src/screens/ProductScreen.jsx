import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid" />
        </Col>
        <Col md={3} className="my-3 ">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="lead">{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="my-3 ">
          <Card className="my-3 p-3 rounded shadow-lg">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price?.toFixed(2)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Rating:</Col>
                  <Col>{product.rating} / 5</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  className="btn btn-block btn-primary my-3"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
