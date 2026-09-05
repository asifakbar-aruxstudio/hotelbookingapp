import Title from './Title'
import arrow from '../assets/arrow.png'
import { exclusiveOffers } from '../data/Offer'

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="right"
          Title="Exclusive Offers"
          SubTitle="Check out our exclusive deals and special offers"
        />

        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={arrow}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all size-5"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-md
            transition-all hover:shadow-lg bg-no-repeat bg-cover bg-center h-72"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* dark overlay so text stays readable on any image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

            {/* discount badge */}
            <p className="absolute top-4 left-4 text-sm font-semibold text-white
            bg-black/40 px-3 py-1 rounded-full">
              {item.discount}% OFF
            </p>

            {/* main content, pinned to bottom, clamped so it never overflows */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
              <p className="text-xl font-bold text-white truncate">{item.name}</p>
              <p className="text-gray-200 text-sm line-clamp-2">{item.description}</p>

              <button className="mt-3 flex items-center gap-2 text-sm font-medium
              text-white cursor-pointer w-fit">
                View Offer
                <img
                  src={arrow}
                  alt="arrow-icon"
                  className="group-hover:translate-x-1 transition-all size-4 invert"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers