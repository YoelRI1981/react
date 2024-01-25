import Colors from "./Colors";
import Sizes from "./Sizes"


function Product({product}) {
  
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.ref}</p>
      <p>{product.price}</p>
     
      <img src= {product.img} alt={product.title}/>
     
     <Colors colors ={product.colors}></Colors>
     <Sizes sizes ={product.sizes}></Sizes>
    </div>
  )
}

export default Product
