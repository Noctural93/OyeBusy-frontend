import { SlCalender } from "react-icons/sl";

const ArticleCard = ({articelDetails}) => {
    const {title, image, date} = articelDetails;

  return (
    <div className='article-card-item'>
      <div>
        <img src={image} alt='small-img'/>
      </div>
      <div style={{
        width: '66.66%'
      }}>
        <h1>{title}</h1>
        <p><SlCalender/>{'  '}{date}</p>
      </div>
    </div>
  )
}

export default ArticleCard
