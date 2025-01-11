const Rider = () => {
  return (
    <section className="pt-[99px] pb-[90px]">
      <div
        className="container relative border rounded-[25px] text-center p-[39px] lg:max-w-[800px] xl:max-w-[900px]"
        style={{
          background: 'linear-gradient(180deg, #F8931F 0%, #925712 100%)',
        }}
      >
        <h2 className="section-title text-white font-[600]">
          Who is an Errie?
        </h2>
        <h2 className="section-title text-s2 font-[600]">
          All you need is a bike!!!
        </h2>
        <p className="hero-text text-white font-[500] tracking-[5%] my-10">
          Horse grants the best platform for commercial motorcyclists to
          increase their income per day by riding clients around and running
          errands for customers.
        </p>
        <button className="hero-btn border-none md:px-[65px] max-md:px-[20px] mt-10 mb-[120px]">
          Register as rider
        </button>

        <img
          src="/errie.png"
          width={300}
          alt="Motor Rider"
          className="max-md:w-[230px] border-[3px] border-[#F8931F] rounded-[360px] absolute top-0 left-0 bottom-0 right-0 m-auto translate-y-[300px] xl:translate-y-[325px] max-md:translate-y-[305px]"
        />
      </div>
    </section>
  );
};

export default Rider;
