import React from 'react';
import Header from '@/layout/header';
import Hero from '@/components/hero';
import Slider from '@/components/slider';
import About from '@/components/about';
import Cards from '@/components/cards';
import Footer from '@/layout/footer';

function index() {
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