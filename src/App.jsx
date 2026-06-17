import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Capabilities from './components/Capabilities';
import Vision from './components/Vision';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
