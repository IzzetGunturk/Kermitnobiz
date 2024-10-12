import React from 'react';
import { useEffect } from "react";
import Header from '@/layout/header';
import Hero from '@/components/hero';
import Slider from '@/components/slider';
import About from '@/components/about';
import Cards from '@/components/cards';
import Footer from '@/layout/footer';
import AOS from "aos";
import 'aos/dist/aos.css';

function index() {
  useEffect (() => {
    AOS.init({duration: 1500});
    AOS.refresh();
  }, []);
  
  return (
    <>
    <Header />
    <Hero />
    <Slider />
    <About />
    <Cards />
    <Footer />
    </>
  )
}

export default index