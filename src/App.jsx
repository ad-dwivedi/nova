import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Features from './components/Features.jsx'
import Product from './components/Product.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Statistics from './components/Statistics.jsx'
import Solutions from './components/Solutions.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div id="get-started" className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
        <Statistics />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  )
}

export default App