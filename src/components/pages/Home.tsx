import Header from '../Header'
import Services from '../home/Services'
import About from '../home/About'
import Benefits from '../home/Benefits'
import Preview from '../home/Preview'
import Footer from '../Footer'

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

     {/* Footer */}
     <Footer />


    </>
  )
}

export default Home
