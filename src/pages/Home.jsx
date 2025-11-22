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
import VisionMission from '../components/VisionMission'
import Service from './Service'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <VisionMission/>
    <ServicesSection/>
    {/* <Service bg={true}/> */}
    <WhyChooseUs/>
    <ProjectsSection/>
    <ClientCarousel/>
    <TestimonialSection/>
    <BlogSection/>
    </>
  )
}
