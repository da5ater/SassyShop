import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';


function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (error) {
    return toast.error(error?.data?.message || error.error);
  }

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {isLoading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default HomeScreen;
