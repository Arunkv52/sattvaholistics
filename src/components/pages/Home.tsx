import Header from '../Header'
import Services from '../home/Services'
import About from '../home/About'
import Benefits from '../home/Benefits'
import FeatureCards from '../home/FeatureCards'
import Preview from '../home/Preview'

const Home = () => {
  return (
    <>
      <Header />
      {/* About */}
      <section className='md:py-10 md:px-3'>
       <About />
      </section>

      {/* Services */}
      <section>
        <Services />
      </section>

      
      {/* Product scroll */}
      <section>
        <Benefits/>
      </section>

      {/* Why Yoga */}
      <section>
        <Preview />
      </section>

     


    </>
  )
}

export default Home
