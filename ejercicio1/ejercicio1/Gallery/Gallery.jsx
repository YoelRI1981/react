

function Gallery({gallery}) {
    console.log(gallery);
    return (
        <div>
           {gallery.map((item, index) => {
            return(
            <div key={index}>
            <p>{item.card.title}</p>   
            <p>{item.card.discount}</p>
            <p>{item.card.price}</p>
            <p>{item.card.tag}</p>
            <img src ={item.card.img} alt = ""/>
           
           
           
            </div>)
          })}
        </div>
      )
}

export default Gallery
