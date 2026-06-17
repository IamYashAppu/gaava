import React from 'react';
import { ReactLenis } from 'lenis/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Capabilities from './components/Capabilities';
import Vision from './components/Vision';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans relative">
        <Header />
        <main>
          <Hero />
          <Challenge />
          <Capabilities />
          <Vision />
          <Team />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
