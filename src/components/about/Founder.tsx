import FounderImg from '../../assets/about/founder.jpg'
const Founder = () => {
  return (
    <>
      <div className="container mx-auto md:px-50 px-10 md:py-30 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          
          {/* Left Content */}
          <div>
            <h4 className="text-gray-600 text-xl mb-2">
              Hi, I'm
            </h4>

            <h1 className="text-7xl md:text-8xl font-serif text-[#2D2A26] leading-none">
              Gabi
            </h1>

            <p className="mt-8 text-gray-600 leading-relaxed max-w-lg">
              With two small children, I was also looking for a way to be
              strong, healthy and confident again. The New Age program is
              the result of my years of experience in dance, pilates, yoga
              and resistance training.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
              I'm here for all women who want to feel strong, healthy and
              confident.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            
            {/* Main Image Card */}
            <div className="relative rounded-[30px] shadow-xl">
              <img
                src={FounderImg}
                alt="Instructor"
                className="w-full max-w-md rounded-[24px] object-cover"
              />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute top-10 -right-8 bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-medium">
                An Instructor
              </span>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute bottom-10 -left-8 bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-gray-700 font-medium">
                A Mother
              </span>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Founder

