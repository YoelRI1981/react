

function Review({review}) {
   
    return (
        <div>
           {review.map((item, index) => {
            return(
            <div key={index}>
            
           <img src = {item.review.avatar} alt = ""/>
           <p>{item.review.title}</p>
           <p>{item.review.description}</p>
           <p>{item.review.date}</p>
           
           
           
            </div>)
          })}
     
        </div>
      )
}

export default Review
