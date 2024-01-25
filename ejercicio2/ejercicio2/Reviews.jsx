import Rating from "./Rating"
import Review from "./Review"

const Reviews =({reviews}) =>{

  return (
    <div>
  <Review review = {reviews}></Review>
   <Rating rating = {reviews}></Rating>
   </div>
  )
  }

export default Reviews
