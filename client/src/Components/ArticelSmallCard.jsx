import { RiUserLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

const ArticelSmallCard = ({articelDetails}) => {

  const {image, title, date, author, category} = articelDetails

  return (
    <div className='small-article-cards'>
      <div>
        <img src={image} alt={title}/>
        <div className='details-small-card'>
          <p>{category}</p>
          <h1>{title}</h1>
          <div>
            <p><RiUserLine/>{'  '}{author}</p>
            <p><SlCalender/>{'  '}{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticelSmallCard