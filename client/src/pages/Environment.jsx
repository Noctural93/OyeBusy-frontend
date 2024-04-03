import React from 'react'
import PathHistory from '../Components/PathHistory'
import ArticelBigCard from '../Components/ArticelBigCard'
import data from '../assets/data.json'
import { CiSearch } from "react-icons/ci";

const Fashion = () => {
  return (
    <>
      <div className='path-history-container'>
        <PathHistory/>
        <h1>Environment</h1>
      </div>
      <div className='fashion-main-container'>
        <div className='fashion-articel-displayer'>
          {data.environment.map(items => (
            <ArticelBigCard key={items.title} articelDetails={items}/>
          ))}
        </div>
        <div className='serarchBar-recentPosts-categories-popularPosts-container'>
          <div className='searchBar-container'>
            <input required type='search' placeholder='Search'/>
            <CiSearch/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fashion
