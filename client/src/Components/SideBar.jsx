import React, { useEffect, useState } from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineImport } from "react-icons/ai";

const SideBar = () => {
    
    const [sideBarContainer, setSideBarContainer] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 250) {
                setSideBarContainer(true)
            } else {
                setSideBarContainer(false)
            }
        });
    }, []);

  return (
    <div className='scroll-top-button-sideBar'>
      {sideBarContainer && (
        <div className='side-bar-container'>
            <ul>
                <li className='hover-demo app-store'><AiOutlineAppstore/></li>
                <li className='hover-demo free-download'><GoDownload/></li>
                <li className='hover-demo buy-pro'><BsCart4/></li>
                <li className='hover-demo import-demo'><AiOutlineImport/></li>
            </ul>
        </div>
      )}
    </div>
  )
}

export default SideBar
