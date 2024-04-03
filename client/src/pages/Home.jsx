import data from '../assets/data.json'
import { RiUserLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RxReader } from "react-icons/rx";
import ArticelSmallCard from '../Components/ArticelSmallCard';
import ArticleCard from '../Components/ArticleCard';

const Home = () => {
  return (
    <div className="home-container-desktop">
      <div className="top-most-content">
        <div className='top-main-article-card'>
          <img src={data.fashion[0].image} alt={data.fashion[0].title}/>
          <div>
            <p>Fashion</p>
            <h1>{data.fashion[0].title}</h1>
            <div>
              <p><RiUserLine/>{'  '}{data.fashion[0].author}</p>
              <p><SlCalender/>{'  '}{data.fashion[0].date}</p>
            </div>
          </div>
        </div>
        <div className='top-side-article-card'>
          <div className='top-side-articel-card-items item-1'>
            <img src={data.technology[0].image} alt={data.technology[0].title}/>
            <div>
              <p>Technology</p>
              <h1>{data.technology[0].title}</h1>
              <div className='para-text'>
                <p><RiUserLine/>{'  '}{data.technology[0].author}</p>
                <p><SlCalender/>{'  '}{data.technology[0].date}</p>
              </div>
            </div>
          </div>
          <div className='top-side-articel-card-items'>
            <img src={data.fashion[1].image} alt={data.fashion[1].title}/>
            <div>
              <p>Fashion</p>
              <h1>{data.fashion[1].title}</h1>
              <div className='para-text'>
                <p><RiUserLine/>{'  '}{data.fashion[1].author}</p>
                <p><SlCalender/>{'  '}{data.fashion[1].date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hot-topics-fashion-heading-container'>
        <div className='hot-topics-heading-line'>
          <h1>Hot Topics</h1>
          <div></div>
        </div>
        <div className='left-right-button'>
            <button disabled={true} className='left-btn'><MdKeyboardArrowLeft/></button>
            <button className='right-btn'><MdKeyboardArrowRight/></button>
        </div>
        <div className='fashion-heading-line'>
          <h1>Fashion</h1>
          <div></div>
        </div>
      </div>
      <div className='hot-topic-fashion-details-container'>
        <div className='eating-organic'>
          <div className='eating-organic-text'>
            <h1>Why Should You Be Eating Organic ?</h1>
            <div>
              <p><RiUserLine/>{'  '}Gowtham</p>
              <p><SlCalender/>{'  '}Feb 7 , 2022</p>
              <p><RxReader/>{'  '}8 min read</p>
            </div>
            <p>
              Most of us have, at some point, considered what 
              we would do if we could...
            </p>
          </div>
        </div>
        <div className='hot-topic-articles'>
          <ul>
            <li>
              <h1>Which Camera Is Better: The Pixel 6 Vs S21 Ultra?</h1>
              <div>
                <p><RiUserLine/>{'  '}Gowtham</p>
                <p><SlCalender/>{'  '}Feb 7, 2022</p>
              </div>
            </li>
            <li>
              <h1>Truth About Beauty In 3 Little Words</h1>
              <div>
                <p><RiUserLine/>{'  '}Gowtham</p>
                <p><SlCalender/>{'  '}Feb 8, 2022</p>
              </div>
            </li>
            <li>
              <h1>This Is The Sixth Warmest Year On Record For The Planet</h1>
              <div>
                <p><RiUserLine/>{'  '}Gowtham</p>
                <p><SlCalender/>{'  '}Feb 7, 2022</p>
              </div>
            </li>
            <li>
              <h1>The Source Of Horizon Bottled Water Is The Subject Of A Fierce Feud.</h1>
              <div>
                <p><RiUserLine/>{'  '}Gowtham</p>
                <p><SlCalender/>{'  '}Feb 7, 2022</p>
              </div>
            </li>
          </ul>
        </div>
        <div className='features-articles'>
          <div className='truth-about-article'>
            <div>
              <h1>{data.fashion[2].title}</h1>
              <div>
                <p><RiUserLine/>{'  '}{data.fashion[2].author}</p>
                <p><SlCalender/>{'  '}{data.fashion[2].date}</p>
                <p><RxReader/>{'  '}{data.fashion[2].duration}</p>
              </div>
              <p className='read-more-text'>READ MORE</p>
            </div>
          </div>
          <div className='facts-details-article'>
            <img src='https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/sigmund-4UGmm3WRUoQ-unsplash-150x150.jpg' alt='facts-article'/>
            <div>
              <h1>Facts Everyone Should Know About Design</h1>
              <div>
                <p><RiUserLine/>{'  '}Gowtham</p>
                <p><SlCalender/>{'  '}Feb 4, 2022</p>
                <p><RxReader/>{'  '}8 Min Read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hot-topics-heading-container'>
        <div className='next-heading-hot-topic'>
          <h1>Hot Topics</h1>
          <div></div>
        </div>
        <div className='next-l-r-btn'>
            <button disabled={true} className='left-btn'><MdKeyboardArrowLeft/></button>
            <button className='right-btn'><MdKeyboardArrowRight/></button>
        </div>
      </div>
      <div className='environment-hot-topics-card-contianer'>
        {
          data.environment.map(items => (
            <ArticelSmallCard key={items.title} articelDetails={items}/>
          ))
        }
      </div>
      <div className='fashion-lifestyle-tech-heading-container'>
        <div className='line-heading'>
          <h1>Fashion</h1>
          <div></div>
        </div>
        <div className='line-heading'>
          <h1>Lifestyle</h1>
          <div></div>
        </div>
        <div className='line-heading'>
          <h1>Tech</h1>
          <div></div>
        </div>
      </div>
      <div className='diff-category-articel-cards'>
        <div>
          {data.fashion.slice(0, 4).map(items => (
            <ArticleCard key={items.title} articelDetails={items}/>
          ))}
        </div>
        <div>
          {data.lifestyle.slice(0, 4).map(items => (
            <ArticleCard key={items.title} articelDetails={items}/>
          ))}
        </div>
        <div>
          {data.technology.slice(0, 4).map(items => (
            <ArticleCard key={items.title} articelDetails={items}/>
          ))}
        </div>
      </div>
      <div className='advertisement-card'>
        <div>
          <h1>Checkout my recommended gadgets</h1>
          <p>Subscribe and get 15% OFF</p>
        </div>
        <button>Learn More</button>
      </div>
      <div className='dont-miss-heading-tech-line-container'>
        <div className='dont-miss-heading'>
          <h1>Don't Miss</h1>
          <div></div>
        </div>
        <div className='tech-heading'>
          <h1>Tech</h1>
          <div></div>
        </div>
      </div>
      <div className='dont-miss-tech-articel-details'>
        <div className='dont-miss-articles-details'>
          <div className='dont-miss-truth-beauty'>
            <div className='dont-miss-image-contianer'>
              <img src={data.fashion[2].image} alt='truth-beauty'/>
            </div>
            <div className='dont-miss-details-container'>
              <h1>{data.fashion[2].title}</h1>
              <div>
                <p><RiUserLine/>{'  '}{data.fashion[2].author}</p>
                <p><SlCalender/>{'  '}{data.fashion[2].date}</p>
              </div>
              <p>
                Most of us have, at some point, considered what we 
                would do if we could travel back in time. Maybe...
              </p>
            </div>
          </div>
          <div className='dont-miss-truth-beauty'>
            <div className='dont-miss-image-contianer'>
              <img src={data.technology[4].image} alt='truth-beauty'/>
            </div>
            <div className='dont-miss-details-container'>
              <h1>{data.technology[4].title}</h1>
              <div>
                <p><RiUserLine/>{'  '}{data.technology[4].author}</p>
                <p><SlCalender/>{'  '}{data.technology[4].date}</p>
              </div>
              <p>
                Most of us have, at some point, considered what we 
                would do if we could travel back in time. Maybe...
              </p>
            </div>
          </div>
          <div className='dont-miss-truth-beauty'>
            <div className='dont-miss-image-contianer'>
              <img src={data.lifestyle[2].image} alt='truth-beauty'/>
            </div>
            <div className='dont-miss-details-container'>
              <h1>{data.lifestyle[2].title}</h1>
              <div>
                <p><RiUserLine/>{'  '}{data.lifestyle[2].author}</p>
                <p><SlCalender/>{'  '}{data.lifestyle[2].date}</p>
              </div>
              <p>
                Most of us have, at some point, considered what we 
                would do if we could travel back in time. Maybe...
              </p>
            </div>
          </div>
          <div className='dont-miss-truth-beauty'>
            <div className='dont-miss-image-contianer'>
              <img src={data.environment[0].image} alt='truth-beauty'/>
            </div>
            <div className='dont-miss-details-container'>
              <h1>{data.environment[0].title}</h1>
              <div>
                <p><RiUserLine/>{'  '}{data.environment[0].author}</p>
                <p><SlCalender/>{'  '}{data.environment[0].date}</p>
              </div>
              <p>
                Most of us have, at some point, considered what we 
                would do if we could travel back in time. Maybe...
              </p>
            </div>
          </div>
          <div className='dont-miss-truth-beauty'>
            <div className='dont-miss-image-contianer'>
              <img src={data.environment[1].image} alt='truth-beauty'/>
            </div>
            <div className='dont-miss-details-container'>
              <h1>{data.environment[1].title}</h1>
              <div>
                <p><RiUserLine/>{'  '}{data.environment[1].author}</p>
                <p><SlCalender/>{'  '}{data.environment[1].date}</p>
              </div>
              <p>
                Most of us have, at some point, considered what we 
                would do if we could travel back in time. Maybe...
              </p>
            </div>
          </div>
        </div>
        <div className='tech-articels-details'>
          <div className='which-camera-6-s21'>
            <div>
              <img src={data.technology[1].image} alt='camera-diff'/>
              <div>
                <h1>{data.technology[1].title}</h1>
                <div>
                  <p><RiUserLine/>{'  '}{data.technology[1].author}</p>
                  <p><SlCalender/>{'  '}{data.technology[1].date}</p>
                  <p><RxReader/>{'  '}{'8 Min Read'}</p>
                </div>
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className='tech-2-articels-cards'>
            <div className='tech-2-article-card'>
              <img src={data.technology[0].image} alt='tech'/>
              <div>
                <h1>{data.technology[0].title}</h1>
                <p><SlCalender/>{'  '}{data.technology[0].date}</p>
              </div>
            </div>
            <div className='tech-2-article-card'>
              <img src={data.technology[2].image} alt='tech'/>
              <div>
                <h1>{data.technology[2].title}</h1>
                <p><SlCalender/>{'  '}{data.technology[2].date}</p>
              </div>
            </div>
          </div>
          <div className='popular-category-line-heading'>
            <div>
              <h1>Popular Categories</h1>
              <div></div>
            </div>
            <ul>
              <li>
                <p>Environment</p>
                <p>5</p>
              </li>
              <li>
                <p>Fashion</p>
                <p>5</p>
              </li>
              <li>
                <p>Life Style</p>
                <p>5</p>
              </li>
              <li>
                <p>Technology</p>
                <p>5</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
