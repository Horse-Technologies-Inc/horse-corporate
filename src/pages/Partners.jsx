const Partnerspage = () => {
  return (
    <section className="w-full h-max col-all-start gap-y-10">
      <div className="w-[100vw] h-[45vh] bg-[url(/partners.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          Partners
        </h2>
      </div>
      <div className="w-full h-max col-all-start gap-y-4 px-4">
        <h3 className="font-[600] text-3xl max-sm:text-2xl tracking-[5%] my-8">
          Some global brands we work with
        </h3>
        <div className="w-full col-all-centered md:flex-row md:flex-wrap gap-x-8 gap-y-6">
          <img
            src="/trademarks/nvidia-logo.png"
            alt="Nvidia"
            className="w-[300px]"
          />
          <img
            src="/trademarks/microsoft-logo.png"
            alt="Microsoft"
            className="w-[300px]"
          />
          <img
            src="/trademarks/jeanee-logo.png"
            alt="Jeanee"
            className="w-[300px]"
          />
          <img
            src="/trademarks/google-logo.png"
            alt="Google"
            className="w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Partnerspage;
