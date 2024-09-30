import {HERO_CONTENT,BRAND_LOGOS} from "../constants/index.jsx";
import heroImage from '../assets/hero.jpg'
import {motion} from "framer-motion";

const containerVariants={
    hidden:{opacity:0},
    visible:{opacity: 1, transition:{staggerChildren:0.2}}
}

const fadeIn={
    hidden: {opacity:0},
    // visible: {opacity:1,transition: { duration:0.6}},
    show:{
        opacity:1,
        transition:{
            type:'tween',
            duration:1.2,
            delay:0.2,
            ease:[0.25,0.25,0.25,0.75]
        }
    }
}

const fadeInUp={
    hidden: {opacity:0,y:20},
    visible: {opacity:1,y:0,transition: {duration:0.6}}
}


const HeroSection = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='mt-28 lg:mt-36'>
            <div className='max-w-7xl mx-auto flex flex-col items-center
            text-center'>
                <motion.div
                    variants={fadeInUp}
                    className='mb-8 border-neutral-800 px-3 py-2 rounded-full
                text-xs'>
                    {HERO_CONTENT.badgeText}
                </motion.div>
                <motion.h1
                    variants={fadeInUp}
                    className='text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b
                from-neutral-50 via-0% to-neutral-700 bg-clip-text text-transparent'>
                    {HERO_CONTENT.mainHeading.split('\n').map((item,i)=>{
                        return(<span key={i}>
                            {item}
                            <br/>
                        </span>)
                    })}
                </motion.h1>
                <motion.p
                    variants={fadeInUp} className='mt-6 text-neutral-400 md:max-w-xl max-w-lg'>
                    {HERO_CONTENT.subHeading}
                </motion.p>
                <motion.div
                    variants={fadeInUp}
                    className='mt-6 space-x-4'>
                    <a className='inline-block bg-blue-600 hover:bg-black/60 hover:border-gray-500
                    hover:border text-white py-3 px-6 border border-black
                    rounded-lg font-medium'>
                        {HERO_CONTENT.callToAction.primary}
                    </a>
                    <a className='inline-block border border-gray-500 hover:bg-blue-600 text-white py-3 px-6
                    rounded-lg font-medium'>
                        {HERO_CONTENT.callToAction.secondary}
                    </a>
                </motion.div>
                <motion.div
                    variants={fadeIn}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className='py-10'>
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
                </motion.div>
                <motion.div
                    variants={fadeIn}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{once:false,amount:0.2}}
                    className='mt-12'>
                    <img src={heroImage} alt='heroImage' className='w-full h-auto rounded-3xl
                    border border-neutral-800 mb-20'/>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;