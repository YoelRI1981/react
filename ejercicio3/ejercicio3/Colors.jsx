

function Colors({colors}) {
   console.log(colors);
    return (
        <div>

           {colors.map((item, index) => {
            return(
            <div key={index}>
           
           <p>{item}</p>
           
           
           
            </div>)
          })}
     <p>hola</p>
        </div>
      )
}

export default Colors
