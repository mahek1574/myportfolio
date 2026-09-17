import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#111111] text-[#F3F0EA] min-h-screen selection:bg-[#D6A85F]/30 selection:text-[#D6A85F] overflow-x-hidden font-sans">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

