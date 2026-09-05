import  Hero  from '../components/Hero'
import FeatureDestinations from '../components/FeatureDestinations';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonials from "../components/Testimonials";
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  return (
    <> 
    <Hero />
    <FeatureDestinations />
    <ExclusiveOffers />
    <Testimonials />
    <NewsLetter />
    </>
  )
}

export default Home