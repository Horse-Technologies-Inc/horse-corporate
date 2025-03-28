const Hero = () => {
  return (
    <section className="w-full max-md:pt-[15px] md:pt-[30px] lg:pt-[10px]">
      <div className="w-full col-all-start gap-y-6 justify-center">
        <div className="min-h-[50vh] w-full py-10 px-10 w-full flex lg:row-all-centered col-all-centered">
          <div className="h-max lg:w-2/4 col-all-start">
            <h1 className="section-title tracking-[5%] font-extrabold">
              HORSIFY
            </h1>
            <p className="lg:1/2 hero-text mt-6">
              Affordability at your doorstep. Get on the Horsify app and order a
              ride wherever whenever.
            </p>
          </div>

          <img
            src="/static/rider-illustration-a.png"
            width={250}
            className="lg:translate-y-10 max-lg:w-[545px]"
            alt="Motor Bike"
          />
        </div>
        <p className="w-full md:row-all-centered col-all-start px-[2rem] text-lg">
          With our top-rated riders, your &nbsp;
          <span className="font-bold"> safety is guaranteed.</span>
        </p>

        <div className="w-full lg:row-all-centered col-all-centered gap-x-10 gap-y-4 px-[2rem]">
          <a href="/waitlist" className="hero-btn font-bold !text-center">
            Customers
          </a>
          <a
            href="/waitlist"
            className="hero-btn bg-black md:px-[65px] max-md:px-[20px] font-bold !text-center"
          >
            Riders
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
