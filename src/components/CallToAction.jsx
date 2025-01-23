const CallToAction = () => {
  return (
    <section className="pt-[99px] mb-[200px]">
      <div
        className="container flex flex-col h-[480px] justify-between items-center relative border rounded-[25px] text-center p-[80px] lg:max-w-[800px] xl:max-w-[900px]"
        style={{
          background:
            'linear-gradient(99.39deg, rgba(248, 147, 31, 0.34) 22.49%, rgba(146, 87, 18, 0.34) 69.24%)',
        }}
      >
        <p className="text-white font-inter font-[600]">ARE YOU READY?</p>
        <h2 className="section-title text-black font-extrabold">
          BE A PART OF THE NEXT BIG THING
        </h2>
        <button className="hero-btn font-inter font-bold bg-black md:px-[75px] max-md:px-[20px]">
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
