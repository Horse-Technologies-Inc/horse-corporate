import CallToAction from '../components/CallToAction';
import Credibity from '../components/Credibity';
import Footer from '../components/Footer';
import { Gradient } from '../components/Gradient';
import Hero from '../components/Hero';
import Rider from '../components/Rider';

const Home = () => {
  return (
    <div className="pt-[85px]">
      <Hero />
      <Rider />
      <Gradient />
      <Credibity />
      <CallToAction />
    </div>
  );
};

export default Home;
