import { useEffect } from 'react';

import Seo          from './components/seo/Seo';
import { ScrollProgress, SectionConnector } from './components/effects/Effects';
import Header        from './components/header/Header';
import Hero          from './components/intro/Intro';
import About         from './components/about/About';
import Services      from './components/product/Services';
import Solutions     from './components/modules/Solutions';
import Features      from './components/features/Features';
import Stats         from './components/metrics/Stats';
import Clients       from './components/clients/Clients';
import Contact       from './components/contact/Contact';
import Footer        from './components/footer/Footer';


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
      <Header />
      <main>
        <Hero />
        <About />
        <SectionConnector from="white" to="blue" />
        <Services />
        <SectionConnector from="blue" to="deep" />
        <Solutions />
        <SectionConnector from="deep" to="soft" />
        <Features />
        <SectionConnector from="soft" to="deep" />
        <Stats />
        <SectionConnector from="deep" to="soft" />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
