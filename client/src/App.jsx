import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Loader from './Components/Loader'
import Header from './Components/Header'
import Footer from './Components/Footer';
import ScrollTop from './Components/ScrollTop';
import SideBar from './Components/SideBar';

const Home = lazy(() => import("./pages/Home"));
const Fashion = lazy(() => import('./pages/Fashion'));
const Technology = lazy(() => import('./pages/Technology'));
const LifeStyle = lazy(() => import('./pages/LifeStyle'));
const Environment = lazy(() => import('./pages/Environment'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
      <Header/>
      <ScrollTop/>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Navigate to='/oye-busy' replace/>}/>
        <Route path='/oye-busy' element={<Home/>}/>
        <Route path='/oye-busy/fashion' element={<Fashion/>}/>
        <Route path='/oye-busy/technology' element={<Technology/>}/>
        <Route path='/oye-busy/life-style' element={<LifeStyle/>}/>
        <Route path='/oye-busy/environment' element={<Environment/>}/>
      </Routes>
      <Footer/>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

