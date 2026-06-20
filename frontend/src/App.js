import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="flex-grow-1">
        <Container className="py-3">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
