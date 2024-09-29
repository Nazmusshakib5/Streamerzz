import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";

const App = () => {
    return (
        <main className='text-neutral-300 text-sm antialiased'>
            <Navbar/>
            <HeroSection/>
        </main>
    );
};

export default App;