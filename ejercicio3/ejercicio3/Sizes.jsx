

function Sizes({sizes}) {
  return (
    <div>

       {sizes.map((item, index) => {
        return(
        <div key={index}>
       
       <p>{item.name}</p>
       <p >{item.qty <= 5 ? "Pocas" : item.qty }</p>
       
       
        </div>)
      })}
 <p>hola</p>
    </div>
  )
}

export default Sizes
