
import './App.css'
import { sampleProducts } from './mocks/data'

function App() {

  return (
    <>
      <header>TS Amazon</header>
      <main>
        <ul>
          {
            sampleProducts.map((product, index) => (
              <li key={index}>
                <img src={product.image} alt="any" className='product-image' />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </li>
            ))
          }
        </ul>
      </main>
      <footer>All right reserved</footer>
    </>
  )
}

export default App
