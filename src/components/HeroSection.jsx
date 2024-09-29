import {HERO_CONTENT,BRAND_LOGOS} from "../constants/index.jsx";
import heroImage from '../assets/hero.jpg'

const HeroSection = () => {
    return (
        <section className='mt-28 lg:mt-36'>
            <div className='max-w-7xl mx-auto flex flex-col items-center
            text-center'>
                <div className='mb-8 border-neutral-800 px-3 py-2 rounded-full
                text-xs'>
                    {HERO_CONTENT.badgeText}
                </div>
                <h1 className='text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b
                from-neutral-50 via-0% to-neutral-700 bg-clip-text text-transparent'>
                    {HERO_CONTENT.mainHeading.split('\n').map((item,i)=>{
                        return(<span key={i}>
                            {item}
                            <br/>
                        </span>)
                    })}
                </h1>
                <p className='mt-6 text-neutral-400 md:max-w-xl max-w-lg'>
                    {HERO_CONTENT.subHeading}
                </p>
                <div className='mt-6 space-x-4'>
                    <a className='inline-block bg-blue-600 hover:bg-black/60 hover:border-gray-500
                    hover:border text-white py-3 px-6 border border-black
                    rounded-lg font-medium'>
                        {HERO_CONTENT.callToAction.primary}
                    </a>
                    <a className='inline-block border border-gray-500 hover:bg-blue-600 text-white py-3 px-6
                    rounded-lg font-medium'>
                        {HERO_CONTENT.callToAction.secondary}
                    </a>
                </div>
                <div className='py-10'>
                    <p className='text-gray-400 text-center mb-8'>
                        {HERO_CONTENT.trustedByText}
                    </p>
                    <div className='flex flex-wrap justify-center gap-8 px-3 md:px-0'>
                        {BRAND_LOGOS.map((item,i)=>{
                            return(
                                <img key={i} src={item.src} alt='logos' className='h-8'/>
                            )
                        })}
                    </div>
                </div>
                <div className='mt-12'>
                    <img src={heroImage} alt='heroImage' className='w-full h-auto rounded-3xl
                    border border-neutral-800 mb-20'/>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;