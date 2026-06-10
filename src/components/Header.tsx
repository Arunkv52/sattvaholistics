import Navbar from './Navbar'

import { ArrowUpRight } from 'lucide-react'
import HeroVideo from '../assets/video/yoga.mp4'



const Header = () => {
  const panelOpacities = [0.05, 0.08, 0.12, 0.18, 0.25, 0.35, 0.45]
  return (
    <>
      <header>
        <Navbar />

        <div className='relative min-h-screen overflow-hidden bg-[#020611]'>
          {/* Background Gradient */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(circle at center, #4BA3FF 0%, #156CFC 40%, #042B7A 100%)'
            }}
          />

          {/* Center Glow */}
          <div className='absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[180px]' />

          {/* Vertical Panels */}
          <div className='absolute inset-0 flex'>
            {panelOpacities.map((opacity, index) => (
              <div
                key={index}
                className='flex-1 border-l border-white/10'
                style={{
                  backgroundColor: `rgba(255,255,255,${opacity})`
                }}
              />
            ))}
          </div>

          {/* Left Shadow */}
          <div className='absolute left-0 top-0 h-full w-80 bg-gradient-to-r from-black/60 via-black/20 to-transparent' />

          {/* Right Shadow */}
          <div className='absolute right-0 top-0 h-full w-80 bg-gradient-to-l from-black/60 via-black/20 to-transparent' />

          {/* Noise Overlay */}
          <div
            className='absolute inset-0 opacity-10 mix-blend-overlay'
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '4px 4px'
            }}
          />

          {/* Content */}
          <div className='relative z-10 container mx-auto px-6 md:mt-0 mt-20'>
            <div className='grid min-h-screen items-center gap-16 lg:grid-cols-2'>
              {/* Left Content */}
              <div className='max-w-2xl'>
                <h1 className='text-5xl font-bold leading-15 text-white md:text-7xl'>
                  Restore Balance. 
                  <span className='block text-white/60'>Awaken Your Inner Energy.</span>
                </h1>

                <p className='mt-6 max-w-lg text-base text-white/70'>
                  Experience holistic healing through energy work, sound vibrations, and mindful practices designed to bring harmony to your mind, body, and spirit.
                </p>

                <button className='group mt-10 flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-black cursor-pointer'>
                  Discover More
                  <ArrowUpRight
                    size={18}
                    className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
                  />
                </button>
              </div>

              {/* Right Video Card */}
              <div className='relative md:bottom-0 bottom-30'>
                <div className='overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl'>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='aspect-video w-full object-cover'
                  >
                    <source src={HeroVideo} type='video/mp4' />
                  </video>

                  <button className='absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black transition-transform hover:scale-105'>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
