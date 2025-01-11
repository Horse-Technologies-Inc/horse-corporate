const Hero = () => {
  return (
    <section className="pt-[99px]">
      <div className="container">
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-1/2 lg:-translate-y-10">
            <h1 className="section-title tracking-[5%] font-extrabold">
              What is Horse?
            </h1>
            <p className="hero-text mt-6">
              Affordability at your doorstep. Get on the Horse app and order a
              motorcycle wherever whenever.
            </p>
          </div>

          <img
            src="/motor-bike.png"
            width={400}
            className="lg:translate-y-10 max-lg:w-[545px]"
            alt="Motor Bike"
          />
        </div>
        <div className="flex">
          <p className="hero-text lg:my-10 mb-6 ml-auto -translate-x-[110px] xl:-translate-x-[220px]">
            With our top-rated riders, your{' '}
            <span className="lg:block"> safety is guaranteed</span>
          </p>
        </div>

        <div className="flex xl:mt-6 xl:translate-x-[80px] justify-center gap-[20px] items-center max-md:flex-col max-md:w-full">
          <button className="hero-btn">Register as customer</button>
          <button className="hero-btn md:px-[65px] max-md:px-[20px]">
            Register as rider
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//     return (
//       <section className="pt-[317px]">
//         <div className="container">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h3 className="mb-6 max-lg:mb-7 max-md:mb-4 font-inter font-extrabold text-[84px] leading-[84px] tracking-[-0.03em] text-s1 max-lg:text-[64px] max-lg:leading-[64px] max-md:text-5xl max-md:leading-12">
//                 What is Horse?
//               </h3>
//               <p className="hero-text">
//                 Affordability at your doorstep. Get on the Horse app and order a
//                 motorcycle wherever whenever.
//               </p>
//             </div>
//             <img
//               src="/motor-bike.png"
//               width={905}
//               height={863}
//               alt="Motor Bike"
//             />
//             <p className="hero-text">
//               With our top-rated riders, your safety is guaranteed.
//             </p>

//             <div className="flex justify-between gap-[20px] items-center max-md:flex-col max-md:w-full">
//               <button className="hero-btn">Register as customer</button>
//               <button className="hero-btn md:px-[65px] max-md:px-[20px]">
//                 Register as rider
//               </button>
//             </div>

//             <p>Hello</p>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   export default Hero;
