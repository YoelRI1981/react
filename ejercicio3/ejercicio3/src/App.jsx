
import { data } from '../Db/Db'
import Product from '../Product'
import './App.css'


const {product} = data
function App() {


  return (
    <>
     <Product product = {product}></Product>
     
    </>
  )
}

export default App
