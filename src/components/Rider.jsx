const Rider = () => {
  return (
    <section className="col-all-centered w-full">
      <div className="container bg-[#925712] relative rounded-md text-center py-[2rem] lg:w-2/4 xl:w-2/4 opacity-90">
        <h1 className="text-white font-bold text-5xl">Who is an Errie?</h1>
        <h2 className="section-title text-5xl font-[600]">
          All you need is a bike!!!
        </h2>
        <p className="hero-text text-white font-[500] tracking-[5%] my-10">
          Horse grants the best platform for commercial motorcyclists to
          increase their income per day by riding clients around and running
          errands for customers.
        </p>

        <a
          href="/waitlist"
          className="hero-btn md:px-[65px] max-md:px-[20px] mt-10 mb-[120px] font-bold text-center"
        >
          Get onboarded
        </a>

        <img
          src="/errie.png"
          width={300}
          alt="Motor Rider"
          className="max-md:w-[230px] border-[3px] border-[#F8931F] rounded-[360px] absolute top-0 left-0 bottom-0 right-0 m-auto translate-y-[300px] xl:translate-y-[325px] max-md:translate-y-[305px] max-sm:translate-y-[370px]"
        />
      </div>
    </section>
  );
};

export default Rider;
