import { APP_NAME } from '../../constants/app.constants';

const Credibity = () => {
  return (
    <section className="w-full col-all-centered py-[4rem] pb-0 h-max">
      <div className="lg:py-[10rem] py-[2rem] bg-[#F5BC62B0] w-full col-all-centered rounded px-[2rem]">
        <div className="w-full lg:row-all-centered gap-x-10 col-all-centered">
          <div className="flex justify-center">
            <img
              src="/static/rider-illustration-b.png"
              width={300}
              alt="Rider"
              className="w-[15rem] h-[17rem]"
            />
          </div>
          <div className="lg:w-2/4 col-all-start gap-y-6">
            <h2 className="text-black lg:text-5xl text-2xl font-bold max-md:mt-8">
              🚀 Earn More, Ride Smart!
            </h2>

            <p className="text-sm font-medium  mb-12">
              Join horsify today and enjoy higher earnings, instant payouts,
              and flexible schedules. Get more ride requests, lower commissions,
              and 24/7 support to keep you moving. Sign up in minutes and start
              earning better, faster, and smarter! {'Don’t'} miss out—switch now
              and drive your success! Let me know if you want any tweaks! 😊
            </p>
            <div className="w-full col-all-centered ">
              <a
                href="/waitlist"
                className="hero-btn font-bold !border-2 border-gray-100 text-center"
              >
                JOIN WAITING LIST
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibity;
