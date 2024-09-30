import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import KeyFeatures from "./components/KeyFeatures.jsx";
import PricingPlans from "./components/PricingPlans.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main className='text-neutral-300 text-sm antialiased'>
            <Navbar/>
            <HeroSection/>
            <HowItWorks/>
            <KeyFeatures/>
            <PricingPlans/>
            <Testimonial/>
            <Footer/>
        </main>
    );
};

export default App;