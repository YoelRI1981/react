import "./Hero.css"

const Hero = ({hero}) => {
    
  return (
    <div>
      <div className= "hero">
       <img src= "{hero.image}" alt="" /> 
        <div className= "card">
            <h2>
            {hero.name} {hero.adress}
            </h2>
                <p>{hero.city}</p>
                <p>{hero.birthDate}</p>
                <p>
                    <a href={"mailto:" + hero.email}>tony@starkindustries.com</a>
                </p>
                <p>{hero.phone}</p>
                <p><a href ={hero.gitHub}></a></p>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
