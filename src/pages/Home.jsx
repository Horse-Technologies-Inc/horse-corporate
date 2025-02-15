import CallToAction from '../components/CallToAction';
import Credibity from '../components/Credibity';
import { Gradient } from '../components/Gradient';
import Hero from '../components/Hero';
import Rider from '../components/Rider';

const Homepage = () => {
  return (
    <div className="pt-[85px] col-all-start !gap-y-10">
      <Hero />
      <Rider />
      <Gradient />
      <Credibity />
      <CallToAction />
    </div>
  );
};

export default Home;
