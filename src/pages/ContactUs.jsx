const ContactUs = () => {
  return (
    <div className="pt-[85px] max-sm:pt-[47px]">
      <div className="relative">
        <img src="telephone.png" alt="Contact Us" />
        <h2 className="text-3xl font-inter font-bold absolute lg:top-60 left-10 max-lg:top-[200px] max-md:top-[160px] max-sm:top-[125px]">
          Contact Us
        </h2>
      </div>

      <div className="container xl:flex items-center lg:max-w-[1600px] overflow-x-clip">
        <form className="flex flex-col pt-8">
          <div className="lg:flex gap-8">
            <div className="flex flex-col">
              <label
                className="text-xl font-inter font-bold mb-2 ml-1"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Please enter your first name here"
                className="w-full lg:w-[440px] rounded-[20px] shadow-input font-inter text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-xl font-inter font-bold mb-2 ml-1"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Please enter your Last name here"
                className="w-full lg:w-[440px] rounded-[20px] shadow-input font-inter text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
              />
            </div>
          </div>

          <div className="lg:flex gap-8">
            <div className="flex flex-col gap-2">
              <label
                className="text-xl font-inter font-bold ml-1"
                htmlFor="phoneNumber"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Please enter your Phone number here"
                className="w-full lg:w-[440px] rounded-[20px] shadow-input font-inter text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-xl font-inter font-bold mb-2 ml-1"
                htmlFor="email"
              >
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Please enter your e-mail here"
                className="w-full lg:w-[440px] rounded-[20px] shadow-input font-inter text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              className="text-xl font-inter font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Please leave your message here"
              className="w-full lg:w-[900px] shadow-textarea font-inter text-xl px-8 py-7 h-[215px] mb-[40px] focus:outline-none"
            />

            <button className="rounded-[20px] bg-[#F8931F] max-lg:w-full px-[85px] py-4 text-white font-inter font-[600] text-[24px] lg:ml-auto lg:translate-x-[-20px] xl:translate-x-0 mb-[200px]">
              Send
            </button>
          </div>
        </form>
        <img
          src="contact-book.png"
          alt="Contact Book"
          className="hidden xl:block translate-y-[-60px] translate-x-[-60px]"
        />
      </div>
    </div>
  );
};

export default ContactUs;
