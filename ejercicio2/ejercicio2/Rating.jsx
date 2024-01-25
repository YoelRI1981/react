

function Rating({rating}) {
    console.log(rating);
    return (
        <div>
           {rating.map((item, index) => {
            return(
            <div key={index}>
            
         
           <p>{item.review.rating}</p>
         
           
           
            </div>)
          })}
     
        </div>
      )
}

export default Rating
