import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectSection'
import ClientCarousel from '../components/ClientSection'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../components/Footer'
import WhyChooseUs from '../components/WhyChooseUs'
import BlogSection from '../components/BlogSection'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <WhyChooseUs/>
    <ProjectsSection/>
    <ClientCarousel/>
    <TestimonialSection/>
    <BlogSection/>
    </>
  )
}
