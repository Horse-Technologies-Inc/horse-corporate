const Partners = () => {
  return (
    <div className="pt-[85px] max-sm:pt-[47px] overflow-x-clip">
      <div className="relative">
        <img src="/partners.png" alt="Partners" />
        <p className="  font-[600] text-[64px] tracking-[5%] max-md:text-[40px] leading-[80px] absolute max-sm:top-[130px] max-sm:left-[260px] max-md:top-[200px] max-md:left-[460px] md:top-[230px] md:left-[470px] lg:top-[320px] lg:left-[680px] xl:top-[500px] xl:left-[20px]">
          {' '}
          Partners
        </p>
      </div>

      <div className="">
        <p className="  font-[600] text-3xl max-sm:text-2xl tracking-[5%] my-8">
          Some global brands we work with
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 mb-[200px]">
          <img src="/nvidia.png" alt="Nvidia" className="w-[300px] shadow-sm" />
          <img
            src="/microsoft.png"
            alt="Microsoft"
            className="w-[300px] shadow-sm"
          />
          <img src="/jeanee.png" alt="Jeanee" className="w-[300px] shadow-sm" />
          <img src="/google.png" alt="Google" className="w-[300px] shadow-sm" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
