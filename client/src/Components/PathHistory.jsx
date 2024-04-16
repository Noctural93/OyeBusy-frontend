import { useEffect, useState } from "react"
import { LiaGreaterThanSolid } from "react-icons/lia";
import {Link} from 'react-router-dom';

const PathHistory = () => {

  const [path, setPath] = useState('');

  const array = location.pathname.split('/').filter(val => val !== '');

  let newString = ''

  return (
    <div>
        <h1 style={{
          fontSize: "17px",
          fontWeight: "100",
        }}><Link to='/' style={{
          textDecoration: 'none',
          color: "rgba(35, 35, 35, 0.742)",
        }}>home</Link>
          {
            array.map((item, index) => {
              newString += `/${item}`
              return <Link key={index} to={newString} style={{
                textDecoration: 'none',
                color: "rgba(35, 35, 35, 0.742)",
              }}>{' > '}{' '}{item}</Link>
            })
          }
        </h1>      
    </div>
  )
}

export default PathHistory
