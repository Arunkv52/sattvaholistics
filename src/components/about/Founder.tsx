import FounderImg from '../../assets/about/founder.jpg'
const Founder = () => {
  return (
    <>
      <div className='container mx-auto md:px-50 px-10 md:py-30 py-20'>
        <div className='grid lg:grid-cols-2 items-center gap-12'>
          {/* Left Content */}
          <div>
            <h1 className='text-7xl md:text-6xl font-serif text-[#2D2A26] leading-none'>
              Meet the Founder
            </h1>

            <p className='mt-8 text-gray-600 leading-relaxed max-w-lg'>
              Sattva Holistics was founded with a deep passion for helping
              people reconnect with their authentic selves and unlock their
              natural healing potential. Through years of learning, practice,
              and dedication to holistic wellness, our founder has developed a
              heart-centered approach that combines traditional healing wisdom
              with modern wellbeing techniques.
            </p>

            <p className='mt-4 text-gray-600 leading-relaxed max-w-lg'>
              The vision behind Sattva Holistics is simple: to provide a safe,
              supportive environment where individuals can heal, grow, and
              thrive on every level of their being.
            </p>
          </div>

          {/* Right Image */}
          <div className='relative flex justify-center'>
            {/* Main Image Card */}
            <div className='relative rounded-[30px] shadow-xl'>
              <img
                src={FounderImg}
                alt='Instructor'
                className='w-full max-w-md rounded-[24px] object-cover'
              />
            </div>

            {/* Floating Badge 1 */}
            <div className='absolute top-10 -right-8 bg-white px-6 py-3 rounded-full shadow-md'>
              <span className='text-gray-700 font-medium'>An Instructor</span>
            </div>

            {/* Floating Badge 2 */}
            <div className='absolute bottom-10 -left-8 bg-white px-6 py-3 rounded-full shadow-md'>
              <span className='text-gray-700 font-medium'>Founder</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Founder
