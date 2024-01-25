const Education = ({ education }) => {
  console.log(education);
  return (
    <div>
      {education.map((item, index) => {
        return(
        <div key={index}>
        
           <p className = "name">{item.name}</p>
        <p>{item.where}</p>
        <p>{item.date}</p> 
        </div>)
      })}
    </div>
  );
};

export default Education;
