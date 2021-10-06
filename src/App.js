import './App.css';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <SlideShow />
      <Footer />
    </div>
  );
}

export default App;
