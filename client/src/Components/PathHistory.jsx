import { useEffect, useState } from "react"
import { LiaGreaterThanSolid } from "react-icons/lia";

const PathHistory = () => {

  const [path, setPath] = useState('');

  useEffect(() => {
    let newString = ''
    const array = location.pathname.split('/')
    const output = array.filter(val => val !== '');
    const output1 = output.map(item => newString = ' > ' + item)
    setPath(output1);
    // console.log(output1)
  }, []);

  return (
    <div>
        <h1 style={{
          fontSize: "17px",
          color: "rgba(35, 35, 35, 0.742)",
          fontWeight: "100",
        }}>home{path}</h1>      
    </div>
  )
}

export default PathHistory
