const ArticelBigCard = ({articelDetails}) => {

    const {
        category, 
        title, 
        imageBig, 
        author, 
        date} = articelDetails

  return (
    <div className="diff-category-articel-displayer">
        <img src={imageBig} alt='big-image'/>
      <div className="big-details-container">
        <p>{category}</p>
        <h1>{title}</h1>
        <div>
            <p>By {author}</p>
            <p>{date}</p>
        </div>
        <p className="big-para">Most of us have, at some point, considered what we would do if we could travel back in time. Maybe we would give ourselves some hot investment advice and become […]</p>
        <div className="line" style={{
            color: "rgba(182, 182, 182, 0.888)",
        }}></div>
        <p className="read-more">Read More</p>
      </div>
    </div>
  )
}

export default ArticelBigCard
