import Title from './Title'
import { testimonials } from '../data/testimonials'

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={i < rating ? '#facc15' : '#e5e7eb'}
            className="w-4 h-4"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.168L12 19.771l-7.335 3.389 1.401-8.168L.132 9.21l8.2-1.192z" />
          </svg>
        ))}
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <Title
        align="center"
        Title="What Our Guests Say"
        SubTitle="Real experiences from travelers who booked their stay with us across Pakistan"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 bg-white rounded-xl shadow-md hover:shadow-lg
            transition-all p-6"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.city}</p>
              </div>
            </div>

            <StarRating rating={item.rating} />

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
  