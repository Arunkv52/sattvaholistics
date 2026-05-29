import MenuItems from '../data/TopMenu'
import Social from '../data/SocialLinks'
import Noise from './Noise'
import Logo from '../assets/logo/logo.png'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#010506] md:py-8 py-5 px-3'>
        <Noise
          patternSize={160}
          patternScaleX={1.9}
          patternScaleY={1.9}
          patternRefreshInterval={2}
          patternAlpha={10}
        />
        <div className='footer-top md:flex justify-between'>
          <div className='md:w-1/2 w-full'>
            <div className='md:py-0 py-3 md:flex md:justify-start flex justify-center  md:bg-transparent bg-white  md:p-0 p-3'>
              <img src={Logo} alt='' className='md:w-30 w-30' />
            </div>
          </div>
          {/* Social Links section */}
          <div className='md:w-1/2 w-full'>
            <div>
              {MenuItems.map(item => (
                <>
                  <div>
                    <p className='text-white text-3xl border-b border-b-white font-semibold'>
                      {item.title}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className='footer-bottom md:flex justify-between mt-15'>
          <div className='md:w-1/2 w-full'>
            <div className='w-[50%]'>
              <p className='text-white text-sm leading-4'>
                Few companies can say they have the world at their feet, both
                literally and figuratively. As a global marketer of branded
                footwear, apparel, and accessories, this apt saying speaks to
                our focus on building great brands and making amazing products,
                and the bright future before us.
              </p>
            </div>
          </div>
          {/* Social Links section */}
          <div className='md:w-1/2 w-full'>
            <div className='grid grid-cols-2'>
              <div className='w-full flex flex-col justify-between items-start md:pt-0 pt-5'>
                <div className='md:text-base text-base text-white pb-2'>
                  <ul>
                    <li>admin@sattvaholistics.com</li>
                    <li>+91 99940 53595</li>
                  </ul>
                </div>
              </div>
              <div>
                {Social.map(iitem => (
                  <>
                    <div>
                      <p className='text-base text-white'>{iitem.title}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='text-left text-white/50 text-sm md:px-0 pt-20'>
          <p>2026 All rights reserved by Sattva Holistics</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
