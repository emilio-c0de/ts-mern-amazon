
import { sampleProducts } from './mocks/data'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
function App() {

  return (
    <div className='d-flex flex-column h-full'>
      <header>
        <Navbar bg='dark' variant='dark' expand="lg">
          <Container>
            <Navbar.Brand>TS Amazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">Cart</a>
            <a href="/signin" className="nav-link">Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Row>
            {
              sampleProducts.map((product, index) => (
                <Col key={index} xs="6" md="4" lg={3}>
                  <img src={product.image} alt="any" className='product-image' />
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </Col>
              ))
            }
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">
          All right reserved
        </div>
      </footer>
    </div>
  )
}

export default App
