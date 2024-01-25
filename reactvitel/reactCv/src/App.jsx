
import "./App.css";
import { CV } from "../Cv/Cv";
import Hero from "../Components/Hero/Hero";

import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import More from "../Components/More/More";

const { hero, education, experience, languages, habilities, volunteer } = CV;
function App() {
  return (
    <>
      <div className="App">
        <Hero hero={hero}></Hero>
      
        <Education education={education}></Education>
        <Experience experience={experience}></Experience>
        <More languages = {languages}
        habilities={habilities}
         volunteer={volunteer}></More>
         
       
      </div>
    </>
  );
}

export default App;
