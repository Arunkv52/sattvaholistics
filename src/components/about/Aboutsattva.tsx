import AboutImage from '../../assets/home/left-study.jpg'

const Aboutsattva = () => {
  return (
    <>
      
      <div className='md:py-20 py-20 md:px-50 px-5 text-white bg-black rounded-2xl'>
       
        <div className='top-txt md:px-50 px-0'>
          <div>
            <h2 className='md:text-3xl text-2xl font-bold py-10'>Our Values.</h2>
          </div>
          <div>
            <p className='md:text-3xl text-2xl'>
              We believe in always asking why. Learn every day–picking up new
              insights from the global marketplace and our consumers. Study
              today’s trends and look around corners for tomorrow’s. Be curious.
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
            <h2 className='text-2xl font-bold'>Our Values.</h2>
          </div>
          <div>
            <p className='md:text-2xl text-base'>
              Our Vision only becomes real through the principles that guide how
              we work, create, and move forward every day.
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
            <h2 className='text-2xl font-bold'>Our Values.</h2>
          </div>
          <div>
            <p className='md:text-2xl text-base'>
              Our Vision only becomes real through the principles that guide how
              we work, create, and move forward every day.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutsattva
