'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section id="home" className="section-padding">
        <Hero />
      </section>

      <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
        <About />
      </section>

      <section id="skills" className="section-padding">
        <Skills />
      </section>

      <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
        <Experience />
      </section>

      <section id="projects" className="section-padding">
        <Projects />
      </section>

      <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
        <Education />
      </section>

      <section id="contact" className="section-padding">
        <Contact />
      </section>
    </div>
  );
} 