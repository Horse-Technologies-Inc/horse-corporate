const Partners = () => {
  return (
    <section className="pt-[85px] max-sm:pt-[60px]">
      <div className="w-[100vw] h-[45vh] bg-[url(/partners.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          Partners
        </h2>
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
    </section>
  );
};

export default Partners;
