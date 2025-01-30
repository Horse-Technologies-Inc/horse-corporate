const CallToAction = () => {
  return (
    <section className="col-all-centered w-full h-max">
      <div
        className="container col-all-centered h-max gap-y-10  rounded text-center lg:w-2/4 w-full lg:px-20 px-4 py-20"
        style={{
          background:
            'linear-gradient(99.39deg, rgba(248, 147, 31, 0.34) 22.49%, rgba(146, 87, 18, 0.34) 69.24%)',
        }}
      >
        <h1 className="text-white text-5xl font-bold">ARE YOU READY?</h1>
        <h2 className="text-black font-medium text-3xl">
          BE A PART OF THE NEXT BIG THING
        </h2>
        <a
          href="/waitlist"
          className="hero-btn font-bold bg-black md:px-[75px] max-md:px-[20px] text-center"
        >
          GET STARTED
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
