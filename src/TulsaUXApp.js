import React, { Component } from 'react';
import './styles/App.css';
import HeaderHero from './components/HeaderHero';
import HeroEvent from './components/HeroEvent';
import AboutSection from './components/AboutSection';
import RecentSpeakers from './components/RecentSpeaker'
import Mission from './components/Mission';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQs';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

const TulsaUXApp = () => (
  <div>
    <HeaderHero />
    <main>
      <HeroEvent />
      <AboutSection />
      <RecentSpeakers />
      <Mission />
      <Sponsors />
      <FAQs />
    </main>
    <NewsletterSignup />
    <Footer />
  </div>
)

export default TulsaUXApp;
