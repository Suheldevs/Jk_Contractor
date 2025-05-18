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


export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUsPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog/:slug' element={<BlogDetail/>}/>
      <Route path='/project' element={<ProjectPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
