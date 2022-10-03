import './App.css';
import { Hero } from './components/hero/Hero';
import { Cards_Data } from './components/cards_div/Cards_Data';
import GymCards from './gym_divs/GymCards';
import { PaymentCard } from './paymentData/PaymentCard';
import Testimonial from './Testimonials/Testimonial';
import { Footer_Section } from './FooterSection/Footer_Section';
import Footer_Bottom from './FooterSection/Footer_Bottom/Footer_Bottom';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Cards_Data/>
      <GymCards/>
      <PaymentCard/>
      <Testimonial to="/test"/>
      <Footer_Section/>
      <Footer_Bottom/>
    </div>
  );
}

export default App;
