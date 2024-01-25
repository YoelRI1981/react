
import { data } from '../../Db/Db'
import Reviews from '../Reviews'
import './App.css'


const {reviews} = data
function App() {

  return (
    <>
    <Reviews reviews={reviews}></Reviews>
    </>
  )
}

export default App
