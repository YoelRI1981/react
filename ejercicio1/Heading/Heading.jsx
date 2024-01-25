

function Heading({heading}) {
  return (
    <div>
    <a href = {heading.url}>
       <p>{heading.text}</p>
       </a>
    </div>
  )
}

export default Heading
