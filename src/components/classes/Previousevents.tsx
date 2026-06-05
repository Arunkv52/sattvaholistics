import { CalendarDays, Users, Star, ArrowRight } from 'lucide-react'

const Previousevents = () => {
  const previousClasses = [
    {
      title: 'Sunset Beach Yoga Retreat',
      date: '12 May 2026',
      attendees: '250+',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773'
    },
    {
      title: 'Morning Mindfulness Session',
      date: '28 April 2026',
      attendees: '180+',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597'
    },
    {
      title: 'Nature Meditation Workshop',
      date: '15 April 2026',
      attendees: '220+',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1518611012118-fb3d5df7a4e6'
    }
  ]
  return (
    <>
      <section className='py-32'>
        <div className='mx-auto max-full px-6'>
          {/* Header */}
          <div className='mb-20 text-center'>
            <span className='uppercase tracking-[0.3em] text-stone-400'>
              Previous Experiences
            </span>

            <h2 className='mt-4 text-5xl font-light md:text-7xl'>
              Moments We've
              <span className='font-serif italic'> Shared Together</span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-stone-400'>
              Explore highlights from our past yoga and wellness sessions that
              inspired transformation and connection.
            </p>
          </div>

          {/* Featured Experience */}
          <div className='relative overflow-hidden rounded-[40px]'>
            <img
              src={previousClasses[0].image}
              alt=''
              className='h-[650px] w-full object-cover'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent' />

            <div className='absolute bottom-0 left-0 p-12'>
              <span className='rounded-full bg-white/80 px-4 py-2 backdrop-blur-xl'>
                Completed Experience
              </span>

              <h3 className='mt-6 text-5xl font-light text-white'>
                {previousClasses[0].title}
              </h3>

              <div className='mt-8 flex flex-wrap gap-8 text-sm text-white'>
                <div className='flex items-center gap-2'>
                  <CalendarDays size={18} />
                  {previousClasses[0].date}
                </div>

                <div className='flex items-center gap-2 text-white'>
                  <Users size={18} />
                  {previousClasses[0].attendees} Attendees
                </div>

                <div className='flex items-center gap-2'>
                  <Star size={18} className='fill-yellow-400 text-yellow-400' />
                  {previousClasses[0].rating}
                </div>
              </div>

              <button className='mt-10 flex items-center gap-3 rounded-full bg-white px-6 py-4 text-black'>
                View Gallery
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className='mt-12 grid gap-8 md:grid-cols-2 text-white'>
            {previousClasses.slice(1).map(item => (
              <div
                key={item.title}
                className='group overflow-hidden rounded-[32px] bg-[#1b1b1b]'
              >
                <div className='overflow-hidden'>
                  <img
                    src={item.image}
                    alt=''
                    className='h-80 w-full object-cover transition duration-700 group-hover:scale-105'
                  />
                </div>

                <div className='p-8'>
                  <h3 className='text-2xl font-light'>{item.title}</h3>

                  <div className='mt-6 flex justify-between text-stone-400'>
                    <span>{item.date}</span>

                    <span className='flex items-center gap-1'>
                      <Star
                        size={14}
                        className='fill-yellow-400 text-yellow-400'
                      />
                      {item.rating}
                    </span>
                  </div>

                  <div className='mt-4 flex items-center gap-2 text-stone-400'>
                    <Users size={16} />
                    {item.attendees} Participants
                  </div>

                  <button className='mt-8 flex items-center gap-2 text-white'>
                    Explore Memories
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Previousevents
