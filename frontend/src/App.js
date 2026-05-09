import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
          <h1>App</h1>
        </Container>
      </main>
      <Footer/>
    </>
  
  )
}
