import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectSection'
import ClientCarousel from '../components/ClientSection'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <ProjectsSection/>
    <ClientCarousel/>
    <TestimonialSection/>
    </>
  )
}
