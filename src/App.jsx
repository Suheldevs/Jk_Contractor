import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import PageNotFound from './pages/PageNotFound'
import ContactUsPage from './pages/ContactUsPage'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetailPage'
import ProjectPage from './pages/ProjectPage'
import Footer from './components/Footer'
import CompanyOverview from './pages/about/CompanyOverview'
import CertificatesPage from './pages/about/CertificatesPage'
import VehiclesEquipmentPage from './pages/VehiclesEquipmentPage'
import Gallery from './pages/Gallery'
import ServiceDetail from './pages/ServiceDetailPage'
import ScrollToTop from './components/ScrollToTop'
import TeamPage from './pages/TeamPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import Service from './pages/Service'
import VisionMisionPage from './pages/VisionMisionPage'


export default function App() {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about/overview' element={<CompanyOverview/>}/>
      <Route path='/about/certification' element={<CertificatesPage/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog-detail/:slug' element={<BlogDetail/>}/>
      <Route path='/project' element={<ProjectPage/>}/>
      <Route path='/vehicles' element={<VehiclesEquipmentPage/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/services/:slug' element={<ServiceDetail/>}/>
      <Route path='/about/team' element={<TeamPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
      <Route path='/about/vision-mission' element={<VisionMisionPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
