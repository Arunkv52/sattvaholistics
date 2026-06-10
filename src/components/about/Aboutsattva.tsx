import AboutImage from '../../assets/home/left-study.jpg'

const Aboutsattva = () => {
  return (
    <>
      <div className='md:py-20 py-20 md:px-50 px-5 text-white bg-black rounded-2xl'>
        <div className='top-txt md:px-50 px-0'>
          <div>
            <h2 className='md:text-3xl text-2xl font-bold py-5'>
              About Sattva Holistics
            </h2>
          </div>
          <div>
            <p className='md:text-base text-base'>
              At Sattva Holistics, we are dedicated to helping individuals
              achieve harmony in mind, body, and spirit through holistic healing
              practices. We believe that true wellness comes from within, and
              our mission is to guide people toward a more balanced, peaceful,
              and fulfilling life.
            </p>
            <p className='md:text-base text-base'>
              Through energy healing, sound therapy, emotional release
              techniques, and mindfulness-based practices, we create a nurturing
              space where transformation, healing, and self-discovery can
              naturally unfold. Every session is designed to support your unique
              journey toward greater wellbeing and inner awareness.
            </p>
          </div>
        </div>
        <div className='top-txt md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5 pt-20'>
          <div>
            <img
              src={AboutImage}
              alt=''
              className='h-[200px] w-full object-cover rounded-2xl'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Our Mission</h2>
          </div>
          <div>
            <p className='md:text-base text-base'>
              To empower individuals to restore balance, release energetic and
              emotional blockages, and embrace holistic wellbeing through
              compassionate healing practices and personalized guidance.
            </p>
          </div>
        </div>
        <div className='top-txt md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5 pt-20'>
          <div>
            <img
              src={AboutImage}
              alt=''
              className='h-[200px] w-full object-cover rounded-2xl'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Our Vision</h2>
          </div>
          <div>
            <p className='md:text-base text-base'>
              To create a world where holistic wellness is accessible to
              everyone, inspiring individuals to live with greater awareness,
              vitality, emotional freedom, and inner peace.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutsattva
