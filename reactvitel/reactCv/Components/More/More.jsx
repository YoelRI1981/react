

function More({languages, habilities , volunteer}) {
    console.log(volunteer );
  return (
    <div>
     <p>{languages.language}</p>
     <p>{languages.splevel}</p>
     <p>{languages.wrlevel}</p>
     
           {habilities.map((item, index) => {
        return(
        <div key={index}>
      
        <p>{item}</p>
        </div>)
      })} 
      {volunteer.map((item, index) => {
        return(
            <div key={index}>

      <p>{item.name}</p> 
        <p>{item.where}</p> 
        <p>{item.description}</p> 
         </div>)
            })} 
    </div>
  )
}

export default More
