

function Menu({menu}) {
    return (
        <div>
           {menu.map((item, index) => {
            return(
            <div key={index}>
            
            <a href = {item.url}>  
            <p>{item.text}</p>
            </a>
           
           
            </div>)
          })}
        </div>
      )
}

export default Menu
