import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {

    const [activeTab, setActiveTab] = useState('');

  return (
    <div className='footer-container'>
      <div className='logo-contianer'>
        <Link reloadDocument to='/oye-busy'>
            <img src={logo} alt='logo'/>
        </Link>
      </div>
      <div className='line'></div>
      <ul className='footer-paths'>
        <li>
            <Link reloadDocument to='/oye-busy' onClick={() => setActiveTab('home')} className={`${activeTab == 'home' && 'active-tab'} tab-button`} style={{
                color: location.pathname == '/oye-busy' ? '#f21d44' : 'white'
            }}>
                Home
            </Link>
        </li>
        <li>
            <Link reloadDocument to='/oye-busy/fashion' onClick={() => setActiveTab('fashion')} className={`${activeTab == 'fashion' && 'active-tab'} tab-button`} style={{
                color: location.pathname == '/oye-busy/fashion' ? '#f21d44' : 'white'
            }}>
                Fashion
            </Link>
        </li>
        <li>
            <Link reloadDocument to='/oye-busy/technology' onClick={() => setActiveTab('technology')} className={`${activeTab == 'technology' && 'active-tab'} tab-button`} style={{
                color: location.pathname == '/oye-busy/technology' ? '#f21d44' : 'white'
            }}>
                Technology
            </Link>
        </li>
        <li>
            <Link reloadDocument to='/oye-busy/life-style' onClick={() => setActiveTab('lifeStyle')} className={`${activeTab == 'lifeStyle' && 'active-tab'} tab-button`} style={{
                color: location.pathname == '/oye-busy/life-style' ? '#f21d44' : 'white'
            }}>
                Life Style
            </Link>
        </li>
        <li>
            <Link reloadDocument to='/oye-busy/environment' onClick={() => setActiveTab('environment')} className={`${activeTab == 'environment' && 'active-tab'} tab-button`} style={{
                color: location.pathname == '/oye-busy/environment' ? '#f21d44' : 'white'
            }}>
                Environment
            </Link>
        </li>
      </ul>
      <div className='line-2'></div>
      <p>Copyright{'  '}<LiaCopyrightSolid/>{'  '}2024 oyeBusy</p>
    </div>
  )
}

export default Footer
