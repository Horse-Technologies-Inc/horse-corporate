const Team = () => {
  return (
       <section className="pt-[85px] max-sm:pt-[60px]">
      <div className="w-[100vw] h-[45vh] bg-[url(/team.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          Team
        </h2>
      </div>        
         <p className="mt-[30px] text-[20px] leading-[40px]   tracking-[5%] mx-[15px] mb-[35px]">
          Horse is built on the basis of team work. It rides on a team with the
          best team players. With a strong team created we are determined to
          answer and help solve the problems of our users with immediate
          response. Team work being the hallmark,This are some consistent
          characters that keeps the team moving:
        </p>
        <h2 className="font-bold section-title text-black tracking-[5%] ml-[15px]">
          Commitment
        </h2>
        <p className="text-[20px] leading-[40px]   tracking-[5%] mx-[15px] mb-[60px]">
          We are committed to the vision of the company. We give out all our
          best to reach the satisfaction of our users.{' '}
        </p>
        <h2 className="font-bold section-title text-black tracking-[5%] ml-[15px]">
          Dedication
        </h2>
        <p className="text-[20px] leading-[40px]   tracking-[5%] mx-[15px] mb-[60px]">
          We are willing to sacrifice everything just so we can meet the needs
          of our users.
        </p>
        <h2 className="font-bold section-title text-black tracking-[5%] ml-[15px]">
          Resilience
        </h2>
        <p className="text-[20px] leading-[40px]   tracking-[5%] mx-[15px] mb-[35px]">
          We driven by the spirit of “never give up”.We work till our last
          breath to fix any problem our company and the users are facing.
        </p>
        <div className="flex mt-24">
          <button className="hero-btn bg-black rounded-[40px] md:px-[100px] md:mx-auto md:py-[5px]   font-[600] mb-[200px]">
            Contact our team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
