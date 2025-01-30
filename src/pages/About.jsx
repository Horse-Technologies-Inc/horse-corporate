const About = () => {
  return (
    <section className="pt-[85px] max-sm:pt-[60px]">
      <div className="w-[100vw] h-[45vh] bg-[url(/motor-bike_about.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          About us
        </h2>
      </div>
      <div className="container max-w-[1580px]">
        <h2 className="section-title text-black mt-[57px] mb-[27px] ml-[15px] font-bold font-outfit">
          We make movement faster in a better way.{' '}
        </h2>
        <p className="hero-text   tracking-[5%] mx-[15px] mb-[57px]">
          Horse is the two-in-one mobility app that offers ride-hailing and
          deliveries services. Our aim is to provide convenient transportation
          services, increase user base, improve user experience and
          satisfaction.We provide a transportation service that helps our users
          skip traffic, beat time and get to wherever they plan to go on time
          and before time. As much as this service makes transportation more
          faster, the safety of our users is our priority so we provide them
          with the best and top-rated motor riders to make sure their safety is
          guaranteed. Our services are also cost-effective and reliable.
        </p>
      </div>

      <div className="w-[100vw] h-[35vh] bg-[url(/rider_about.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="px-10 py-2 rounded-full text-white text-3xl font-bold w-full text-center">
          Delivery made easy <span className="block">with an Errie</span>
        </h2>
      </div>
      <div className="container">
        <h4 className="  text-2xl font-bold tracking-[5%] mt-[57px] ml-[15px]">
          What is horse Errie?
        </h4>
        <p className="hero-text   tracking-[5%] mx-[17px] mb-[57px]">
          Well, comfort is also a thing for us.So we give our customers the
          freedom of making someone (an Errie) run all their errands whilst they
          comfortably focus on doing other things.{' '}
        </p>

        <div className="lg:row-all-start">
          <div className="flex flex-col md:items-center lg:items-start lg:mt-10 ml-[15px]">
            <h4 className="  text-2xl font-bold tracking-[5%] max-md:mt-[57px]">
              Our Motivation
            </h4>
            <p className="hero-text   tracking-[5%]">
              We draw motivation from circumstances of life that hinder fast
              movements. We understand the frustration traffic brings to us and
              we are determined to help you skip all of it. Horse also creates a
              platform for commercial motorcyclist to increase their income per
              day by riding clients around and running errands for customers.
            </p>
            <p className="max-md:hidden hero-text   tracking-[5%]">
              Motorcycles add value to our economy. The affordability of
              obtaining a motorcycle, whether due to its lower price compared to
              a car or the cost of purchasing it in a store, makes it an ideal
              means of transport for cities with heavy traffic.{' '}
            </p>
            <p className="md:hidden hero-text   tracking-[5%] lg:mt-0 max-md:mt-0">
              Motorcycles add value to our economy. The affordability of
              obtaining a motorcycle, whether due to its lower price compared to
              a car or the cost of purchasing it in a store, makes it an ideal
              means of transport for cities with heavy traffic.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="container shadow-custom2 p-[39px] max-w-[600px] text-center mt-[180px] mb-[200px]">
        <div className="flex justify-center">
          <img
            src="/sarpong.png"
            width={108}
            alt="Samuel Sarpong"
            className="mt-[-100px]"
          />
        </div>
        <h2 className="hero-text   font-bold tracking-[5%] my-3">
          Samuel Jeimel Sarpong
        </h2>
        <h4 className="hero-text   tracking-[5%] mb-8">Founder & CEO</h4>
        <p className="hero-text   tracking-[5%]">
          Samuel is a visionary student entrepreneur with a passion for
          innovation.This company embodies the spirit of creativity and
          resilience. Balancing academics and entrepreneurship, Samuel has
          transformed bold ideas into thriving opportunities and delivers
          impactful solutions. This unique blend of youthful energy and
          entrepreneurial drive is at the heart of everything we do.
        </p>
      </div>
    </section>
  );
};

export default About;
