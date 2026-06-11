// import {
//   FaDumbbell,
//   FaLeaf,
//   FaGlobe,
//   FaPersonWalking,
// } from 'react-icons/fa6'

import HeroBg from '../../assets/home/premium-images/yoga-bg-2.jpg'

const Whychooseus = () => {
  const features = [
    {
      title: 'Personalized Healing Experiences',
      desc: 'Every individual is unique. Our sessions are thoughtfully tailored to address your specific emotional, energetic, and wellness needs.'
    },
    {
      title: 'Learn Anytime, Anywhere',
      desc: 'Access guided wellness practices, meditation sessions, and healing techniques from the comfort of your home.'
    },
    {
      title: 'Experienced Wellness Practitioners',
      desc: 'Receive guidance from compassionate practitioners dedicated to helping you achieve balance, clarity, and personal transformation.'
    },
    {
      title: 'Growth That Fits Your Lifestyle',
      desc: 'Flexible classes and healing programs designed to integrate seamlessly into your daily routine and wellness journey.'
    }
  ]

  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <img
        src={HeroBg}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/35 backdrop-brightness-75' />

      {/* Content */}
      <div className='relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10'>
        <div className='flex h-full flex-col justify-between py-14'>
          {/* Top Content */}
          <div className='grid lg:grid-cols-2 gap-10 items-start py-5'>
            <div>
              <h1 className='md:max-w-3xl w-full text-white md:text-5xl text-3xl font-light leading-tight'>
                Healing Programs for Every Stage of Your Journey
              </h1>

              <p className='md:mt-6 mt-3 max-w-lg text-white/80 text-base'>
                Whether you're seeking emotional balance, energy healing, inner
                clarity, or spiritual growth, our holistic programs are designed
                to support your wellbeing and help you reconnect with your true
                self.
              </p>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <button className='mt-10 lg:mt-28 cursor-pointer border border-white/60 text-white px-10 py-4 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500'>
                Join Our Classes
              </button>
            </div>
          </div>

          {/* Bottom Glass Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:mb-8 md:mt-0 mt-10'>
            {features.map((item, index) => (
              <div
                key={index}
                className='
                  group
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  rounded-[32px]
                  p-8
                  text-white
                  transition-all
                  duration-500
                  hover:bg-white/20
                  hover:-translate-y-2
                '
              >

                <h3 className='text-2xl font-light mb-4'>{item.title}</h3>

                <p className='text-white/70 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whychooseus
