import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-3">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
