const Hero = () => {
  return (
    <section className="max-md:pt-[30px] md:pt-[60px] lg:pt-[20px]">
      <div className="container">
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-1/2 lg:-translate-y-10">
            <h1 className="section-title tracking-[5%] font-extrabold">
              What is Horse?
            </h1>
            <p className="hero-text mt-6">
              Affordability at your doorstep. Get on the Horse app and order a
              ride wherever whenever.
            </p>
          </div>

          <img
            src="/motor-bike.png"
            width={400}
            className="lg:translate-y-10 max-lg:w-[545px]"
            alt="Motor Bike"
          />
        </div>
        <div className="flex">
          <p className="hero-text lg:my-10 mb-6 ml-auto lg:-translate-x-[110px] xl:-translate-x-[220px]">
            With our top-rated riders, your{' '}
            <span className="lg:block"> safety is guaranteed</span>
          </p>
        </div>

        <div className="flex xl:mt-6 xl:translate-x-[80px] justify-center gap-[20px] items-center max-md:flex-col max-md:w-full">
          <button className="hero-btn">Register as customer</button>
          <button className="hero-btn md:px-[65px] max-md:px-[20px]">
            Register as rider
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
