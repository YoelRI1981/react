
function Links({links}) {
    return (
        <div>
           {links.map((item, index) => {
            return(
            <div key={index}>
            
            <a href = {item.url}>  
            <p>{item.text}</p>
            </a>
           
           
            </div>)
          })}
        </div>
      )}

  
   
  

export default Links
