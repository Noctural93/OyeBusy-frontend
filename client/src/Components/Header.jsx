import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import { useEffect, useState } from "react";

import logo from '../assets/logo.png'

const Header = () => {

    const [searchBar, setSearchBar] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    const [activeSideBar, setActiveSideBar] = useState(false);

    const searchcontainer = () => {
        setSearchBar(prev => !prev);
    };

    const showSideBar = () => {
        setActiveSideBar(prev => !prev);
    };

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>
        setIsSticky(window.pageYOffset > 120)
        );
      }, []);

  return (
    <>
        <div className="header-container">
            <div>
                <Link reloadDocument to='/oye-busy'>
                    <img src={logo} alt="oyeBusyLogo"/>
                </Link>
            </div>
            <nav className={`header-path-container ${isSticky && 'is-sticky'}`}>
                <ul className="social-links">
                    <li>
                        <Link reloadDocument to='/oye-busy'>
                            <BiLogoFacebook/>
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy'>
                            <IoLogoInstagram/>
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy'>
                            <LiaLinkedinIn/>
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy'>
                            <RiTwitterXLine/>
                        </Link>
                    </li>
                </ul>
                <ul className="route-paths">
                    <li>
                        <Link reloadDocument to='/oye-busy' onClick={() => setActiveTab('home')} className={`${activeTab == 'home' && 'active-tab'} tab-button`} style={{
                    color: location.pathname == '/oye-busy' ? '#f21d44' : ''
                }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy/fashion' onClick={() => setActiveTab('fashion')} className={`${activeTab == 'fashion' && 'active-tab'} tab-button`} style={{
                    color: location.pathname == '/oye-busy/fashion' ? '#f21d44' : ''
                }}>
                            Fashion
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy/technology' onClick={() => setActiveTab('technology')} className={`${activeTab == 'technology' && 'active-tab'} tab-button`} style={{
                    color: location.pathname == '/oye-busy/technology' ? '#f21d44' : ''
                }}>
                            Technology
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy/life-style' onClick={() => setActiveTab('lifeStyle')} className={`${activeTab == 'lifeStyle' && 'active-tab'} tab-button`} style={{
                    color: location.pathname == '/oye-busy/life-style' ? '#f21d44' : ''
                }}>
                            Life Style
                        </Link>
                    </li>
                    <li>
                        <Link reloadDocument to='/oye-busy/environment' onClick={() => setActiveTab('environment')} className={`${activeTab == 'environment' && 'active-tab'} tab-button`} style={{
                    color: location.pathname == '/oye-busy/environment' ? '#f21d44' : ''
                }}>
                            Environment
                        </Link> 
                    </li>
                </ul>
                <button type="button" onClick={searchcontainer}><FaSearch/></button>
                {searchBar && 
                    <>
                        <div className="search-contianer">
                            <input type="search" placeholder="Search"/>
                            <button>
                                <FaSearch/>
                            </button>
                        </div>
                        <button className="close-btn" onClick={searchcontainer}>
                            <IoMdClose/>
                        </button>
                    </>
                }
            </nav>
        </div>
        <div className="small-devices-headedr-container">
            <div>
                <Link reloadDocument to='/oye-busy'>
                    <img src={logo} alt="oyeBusyLogo"/>
                </Link>
            </div>
            <div className="hamburger-container" onClick={showSideBar}>
                <div className={activeSideBar ? 'active' : ''}></div>
                <div className={activeSideBar ? 'active' : ''}></div>
                <div className={activeSideBar ? 'active' : ''}></div>
            </div>
            <div className={activeSideBar ? "active-nav-side-bar-container" : "nav-side-bar-container"}>
                <ul className="small-devices-route-paths">
                        <li>
                            <Link reloadDocument to='/oye-busy' onClick={() => setActiveTab('home')} className={`${activeTab == 'home' && 'active-tab'} tab-button`} style={{
                        color: location.pathname == '/oye-busy' ? '#f21d44' : ''
                        }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link reloadDocument to='/oye-busy/fashion' onClick={() => setActiveTab('fashion')} className={`${activeTab == 'fashion' && 'active-tab'} tab-button`} style={{
                        color: location.pathname == '/oye-busy/fashion' ? '#f21d44' : ''
                        }}>
                                Fashion
                            </Link>
                        </li>
                        <li>
                            <Link reloadDocument to='/oye-busy/technology' onClick={() => setActiveTab('technology')} className={`${activeTab == 'technology' && 'active-tab'} tab-button`} style={{
                        color: location.pathname == '/oye-busy/technology' ? '#f21d44' : ''
                        }}>
                                Technology
                            </Link>
                        </li>
                        <li>
                            <Link reloadDocument to='/oye-busy/life-style' onClick={() => setActiveTab('lifeStyle')} className={`${activeTab == 'lifeStyle' && 'active-tab'} tab-button`} style={{
                        color: location.pathname == '/oye-busy/life-style' ? '#f21d44' : ''
                        }}>
                                Life Style
                            </Link>
                        </li>
                        <li>
                            <Link reloadDocument to='/oye-busy/environment' onClick={() => setActiveTab('environment')} className={`${activeTab == 'environment' && 'active-tab'} tab-button`} style={{
                        color: location.pathname == '/oye-busy/environment' ? '#f21d44' : ''
                        }}>
                                Environment
                            </Link> 
                        </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header
