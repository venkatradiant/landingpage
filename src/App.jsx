import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Features from './components/Features';
import Demo from './components/Demo';
import Impact from './components/Impact';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Features />
        <Demo />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
