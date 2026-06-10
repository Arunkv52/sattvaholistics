import Image7 from '../../assets/home/bg-hero.jpg'
export default function About () {
  return (
    <section className='w-full md:pt-20 pt-40 md:px-12 px-5 overflow-hidden'>
      <div className=' mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
        {/* Left Label */}
        <div className='lg:col-span-2 flex items-start'>
          <div className='sticky top-10'>
            <p className='text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-neutral-700 leading-relaxed'>
              ABOUT SATTVA HOLISTICS
            </p>

            {/* Decorative Line */}
            <div className='mt-6 w-14 h-[2px] bg-black rounded-full'></div>
          </div>
        </div>

        {/* Center Content */}
        <div className='lg:col-span-5'>
          <div className='relative'>
            {/* Background Glow */}
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl'></div>

            <h2 className='text-4xl md:text-5xl  font-light leading-tight tracking-tight text-neutral-900'>
              Transforming lives through healing,
              <span className='font-semibold'>
                balance, and conscious living.
              </span>
            </h2>

            <p className='mt-8 text-base md:text-base text-neutral-600 leading-relaxed max-w-xl'>
              At Sattva Holistics, we believe that true wellness begins from
              within. Our holistic healing sessions are designed to help
              individuals reconnect with their natural energy, release emotional
              burdens, and cultivate inner peace.
            </p>

            {/* CTA */}
            <div className='mt-10 flex items-center gap-4'>
              <button className='px-7 py-4 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:scale-105'>
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='lg:col-span-5'>
          <div className='relative group'>
            {/* Decorative Shape */}
            <div className='absolute -bottom-6 -right-6 w-full h-full border border-neutral-300 rounded-[2rem]'></div>

            {/* Image Card */}
            <div className='relative overflow-hidden rounded-[2rem] shadow-2xl'>
              <img
                src={Image7}
                alt='Meditation session'
                className='w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent'></div>

              {/* Floating Card */}
              <div className='absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg max-w-xs'>
                
                <h4 className='mt-1 text-base font-semibold text-neutral-900'>
                  we support physical relaxation, emotional wellbeing, mental clarity, and spiritual growth.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
