import React from 'react'
import HeroSection from '../components/home/HeroSection'
import LegacySection from '../components/home/LegacySection'
import AlumniAssociationSection from "../components/home/AlumniAssociationSection";
import DharoharSection from '../components/home/DharoharSection'
import WelcomeMessages from '../components/home/WelcomeMessage';

const HomePage = () => {
  return (
    <>
     <HeroSection/> 
     <LegacySection/>
     <AlumniAssociationSection/>
     <DharoharSection/>
     <WelcomeMessages/>
    </>
  )
}

export default HomePage
