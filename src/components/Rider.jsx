const Rider = () => {
  return (
    <section className="col-all-centered w-full">
      <div className="w-full container bg-[#925712] relative rounded-md text-center py-[2rem] row-content-between">
        <div className="lg:w-2/3 w-full col-all-centered gap-y-4"><h1 className="text-white font-bold text-5xl">Who is an Errie?</h1>
        <h2 className="section-title text-5xl font-[600]">
          All you need is a bike!!!
        </h2>
        <p className="hero-text text-white font-[500] tracking-[5%] my-10">
          Horsify grants the best platform for commercial motorcyclists to
          increase their income per day by riding clients around and running
          errands for customers.
        </p>

        <a
          href="/waitlist"
          className="hero-btn md:px-[65px] max-md:px-[20px] mt-10 mb-[120px] font-bold text-center"
        >
          Get onboarded
        </a>
</div>        <img
          src="/errie.png"
          width={300}
          alt="Motor Rider"
          className="hidden lg:block max-md:w-[230px] border-[3px] border-[#F8931F] rounded-[360px]"
        />
      </div>
    </section>
  );
};

export default Rider;
