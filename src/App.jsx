import { useEffect } from 'react';

import Seo       from './components/seo/Seo';
import { ScrollProgress, BackgroundLayer, GlowCards } from './components/effects/Effects';
import Header    from './components/header/Header';
import Hero      from './components/intro/Intro';
import Features  from './components/features/Features';
import Services  from './components/product/Services';
import Solutions from './components/modules/Solutions';
import Stats     from './components/metrics/Stats';
import About     from './components/about/About';
import Clients   from './components/clients/Clients';
import Contact   from './components/contact/Contact';
import Footer    from './components/footer/Footer';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <>
      <Seo />
      <ScrollProgress />
      <BackgroundLayer />
      <GlowCards />
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Solutions />
        <Stats />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
