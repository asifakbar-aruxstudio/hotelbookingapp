import Title from './Title'
import arrow from '../assets/arrow.png'
import { exclusiveOffers } from '../data/Offer'

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30"> 
    <div className="flex flex-col md:flex-row items-center justify-between w-full">    
         <Title  align='right' Title='Exclusive Offers'  
         SubTitle='Check out our exclusive deals and special offers'  />
   
<button 
  className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
  View All Offers
  <img src={arrow} alt="arrow-icon" 
    className="group-hover:translate-x-1 transition-all size-5" />
</button>
    </div>
    
    <div>
     {exclusiveOffers.map((item) => (
          <div key={item.id} 
          className="group relative flex flex-col items-start md:flex-row items-center 
          justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl shadow-md transition-all 
          hover:shadow-lg bg-no-repeat bg-cover bg-center mb-10" 
          style={{ backgroundImage: `url(${item.image})` }}>
              <p className="text-2xl font-semibold text-white">{item.price}% OFF </p>
              <div>
            <p className="text-xl font-bold text-white">{item.name}</p>
            <p className="text-gray-300">{item.description}</p>
            <p className="text-yellow-400">Expires:{item.expiryDate}</p>
            </div>  
            <button 
            className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
            View All Offers
            <img src={arrow} alt="arrow-icon" 
                className="group-hover:translate-x-1 transition-all size-5" />
            </button>

        </div>
        ))}   
     </div>
    </div>

  )
}

export default ExclusiveOffers

