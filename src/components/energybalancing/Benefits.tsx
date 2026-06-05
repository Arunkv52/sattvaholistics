import Yoga1 from '../../assets/home/premium-images/image-11.jpg'
import Yoga2 from '../../assets/home/premium-images/image-11.jpg'
import Yoga3 from '../../assets/home/premium-images/image-11.jpg'
import Yoga4 from '../../assets/home/premium-images/image-11.jpg'

const Benefits = () => {
  const classes = [
    {
      title: 'Vinyasa Yoga',
      image: Yoga1,
      desc: 'Flow through poses with breath awareness and mindfulness.',
      height: 'h-[420px]',
    },
    {
      title: 'Hatha Yoga',
      image: Yoga2,
      desc: 'Improve flexibility, balance and strength.',
      height: 'h-[200px]',
    },
    {
      title: 'Mindfulness Yoga',
      image: Yoga3,
      desc: 'Connect movement with mental clarity and relaxation.',
      height: 'h-[200px]',
    },
    {
      title: 'Meditation Sessions',
      image: Yoga4,
      desc: 'Reduce stress and cultivate inner peace.',
      height: 'h-[450px]',
    },
  ]

  return (
    <section className="py-24 bg-[#000] rounded-2xl">
      <div className="w-full mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-sm uppercase tracking-[4px] text-gray-500">
            Yoga Classes
          </span>

          <h2 className="text-4xl md:text-5xl font-serif mt-4 text-white">
            Explore Diverse Yoga Classes
            <br />
            For Everyone
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-white/80">
            Discover sessions designed to improve flexibility, balance,
            mindfulness and overall wellbeing.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Left Large Card */}
          <Card
            image={classes[0].image}
            title={classes[0].title}
            desc={classes[0].desc}
            className="h-[500px]"
          />

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            <Card
              image={classes[1].image}
              title={classes[1].title}
              desc={classes[1].desc}
              className="h-[240px]"
            />

            <Card
              image={classes[2].image}
              title={classes[2].title}
              desc={classes[2].desc}
              className="h-[240px]"
            />
          </div>

          {/* Bottom Wide Card */}
          <div className="lg:col-span-2">
            <Card
              image={classes[3].image}
              title={classes[3].title}
              desc={classes[3].desc}
              className="h-[500px]"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

type CardProps = {
  image: string
  title: string
  desc: string
  className?: string
}

const Card = ({ image, title, desc, className }: CardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-[30px] ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10" />

      {/* Glass Content */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4">
          <h3 className="font-semibold text-lg text-gray-900">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefits