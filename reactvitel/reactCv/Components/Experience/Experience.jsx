
function Experience({experience}) {
  return (
    <div>
       {experience.map((item, index) => {
        return(
        <div key={index}>
        
           <p className = "name">{item.name}</p>
        <p>{item.where}</p>
        <p>{item.date}</p> 
        <p>{item.description}</p> 
        </div>)
      })}
    </div>
  )
}

export default Experience
