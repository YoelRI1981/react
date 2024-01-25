
import './App.css'
import Header from '../Header/Header'
import { data } from '../Lista/Lista'
import Promotion from '../Promotion/Promotion';
import Heading from '../../Heading/Heading';
import Gallery from '../Gallery/Gallery';

const {header, promotion, heading, gallery} = data;

function App() {
  

  return (
    <>
     <Header header={header}></Header>
<Promotion promotion={promotion}> </Promotion>
<Heading heading = {heading}></Heading>
<Gallery gallery = {gallery}></Gallery>
    </>
  )
}

export default App
