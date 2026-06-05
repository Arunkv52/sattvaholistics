import { useState, useEffect } from 'react'
import { Play, Clock, Video, ChevronRight, Leaf } from 'lucide-react'
import Navbar from '../Navbar'

const yogaImages = {
  meditation:
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  pose: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
  outdoor:
    'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80'
}

const stats = [
  { value: '81K+', label: 'Worldwide Members' },
  { value: '240+', label: 'Expert Instructors' }
]

export default function Herosection () {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <section className='relative min-h-screen contact-bg overflow-hidden flex items-center'>
        {/* Subtle background blobs */}
        <div className='absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-[#D4E8D1]/40 blur-3xl pointer-events-none' />
        <div className='absolute bottom-0 right-[35%] w-56 h-56 rounded-full bg-[#B7D5B4]/30 blur-2xl pointer-events-none' />

        <div className='max-w-full mx-auto w-full px-6 md:px-12  py-25 grid lg:grid-cols-2 gap-12 items-center md:mt-20 mt-20'>
          {/* ── LEFT COLUMN ── */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white border border-[#C8DEC5] rounded-full px-4 py-1.5 w-fit shadow-sm '>
              <Leaf size={14} className='text-[#4A7C59]' />
              <span className='text-sm font-medium text-[#4A7C59] tracking-wide'>
                Welcome To Shanty
              </span>
            </div>

            {/* Headline */}
            <h1 className='text-[clamp(2.6rem,5.5vw,4rem)] font-bold leading-[1.1] text-white tracking-tight'>
              Discover the <br />
              Power of Yoga <br />
              <span className='text-white/50'>& Meditation</span>
            </h1>

            {/* Description */}
            <p className='text-white text-base md:text-lg leading-relaxed max-w-md'>
              Find balance, flexibility, and inner peace with expert-led classes
              for all levels — from sunrise flows to deep evening restoratives.
            </p>

            {/* CTA Row */}
            <div className='flex flex-wrap items-center gap-4 mt-2'>
              <a
                href='/classes'
                className='flex items-center gap-2 bg-[#4A7C59] hover:bg-[#3A6347] active:scale-95 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#4A7C59]/30'
              >
                Let's Get Started
                <ChevronRight size={16} />
              </a>
             
            </div>

            {/* Stats */}
            <div className='flex items-center gap-10 pt-4 mt-2 border-t border-[#D8E8D5]'>
              {stats.map((s, i) => (
                <div key={i} className='flex flex-col'>
                  <span className='text-2xl font-bold text-[#ffffff]'>
                    {s.value}
                  </span>
                  <span className='text-sm text-[#e3e3e3]'>{s.label}</span>
                </div>
              ))}

              
              
            </div>
          </div>

          {/* ── RIGHT COLUMN — Image Mosaic ── */}
          <div
            className={`relative h-[480px] md:h-[560px] transition-all duration-700 delay-200 ease-out hidden md:block ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Top-right large image */}
            <div className='absolute top-0 right-0 w-[60%] h-[58%] rounded-3xl overflow-hidden shadow-xl'>
              <img
                src={yogaImages.meditation}
                alt='Meditation outdoors'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>

            {/* Middle-left course card */}
            <div className='absolute top-[30%] left-0 w-[54%] bg-white rounded-2xl shadow-xl overflow-hidden z-10 border border-[#E8F0E6]'>
              <div className='h-36 overflow-hidden'>
                <img
                  src={yogaImages.pose}
                  alt='Yoga for beginners'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>
              <div className='px-4 py-3'>
                <p className='font-semibold text-[#1C2B1E] text-sm'>
                  Yoga For Beginners
                </p>
                <div className='flex items-center gap-4 mt-1.5 text-xs text-[#6B7D6E]'>
                  <span className='flex items-center gap-1'>
                    <Video size={13} className='text-[#4A7C59]' />6 Videos
                  </span>
                  <span className='flex items-center gap-1'>
                    <Clock size={13} className='text-[#4A7C59]' />
                    12 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-right image */}
            <div className='absolute bottom-0 right-[2%] w-[48%] h-[42%] rounded-3xl overflow-hidden shadow-xl border-4 border-[#F8F6F1]'>
              <img
                src={yogaImages.outdoor}
                alt='Outdoor yoga session'
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>

            {/* Floating pill — class rating */}
            <div className='absolute top-[10%] left-[4%] bg-white rounded-full px-3.5 py-2 flex items-center gap-2 shadow-lg border border-[#E8F0E6] z-20 animate-bounce-slow'>
              <span className='text-lg'>🧘</span>
              <div className='flex flex-col leading-none'>
                <span className='text-xs font-semibold text-[#1C2B1E]'>
                  4.9★ Rating
                </span>
                <span className='text-[10px] text-[#6B7D6E]'>
                  2,400 reviews
                </span>
              </div>
            </div>

            {/* Floating pill — next class */}
            <div className='absolute bottom-[12%] left-[8%] bg-[#4A7C59] text-white rounded-2xl px-4 py-2.5 shadow-lg z-20'>
              <p className='text-[10px] font-medium opacity-80 uppercase tracking-wider'>
                Next Class
              </p>
              <p className='text-sm font-bold'>Morning Flow — 7 AM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
