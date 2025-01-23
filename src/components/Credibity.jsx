const Credibity = () => {
  return (
    <section className="pt-[99px] overflow-x-clip">
      <div className="bg-[#F5BC62B0] p-20 lg:p-[100px]">
        <div className="md:flex text-center items-center justify-center gap-[20px] lg:gap-[50px]">
          <div className="flex justify-center">
            <img src="/rider.png" width={300} alt="Rider" />
          </div>
          <div className="md:w-[70%] lg:max-w-[700px]">
            <h2 className="section-title text-black font-bold max-md:mt-8">
              HIGH CREDIBILITY
            </h2>
            <p className="text-[#0000008F] font-inter mb-12">
              we give the best offers to our users
            </p>
            <p className="hero-text font-inter font-[500] tracking-[5%] mb-12">
              By joining horse as a rider, You have a chance of obtaining your
              own license if you don’t have one and pay it in installments
            </p>
            <div className="flex justify-center">
              <button className="border-none rounded-[70px] bg-s1 font-outfit font-normal text-[28px] text-white md:hero-btn max-md:px-[15px] max-sm:py-[15px] xl:translate-x-[260px]">
                JOIN WAITING LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibity;
