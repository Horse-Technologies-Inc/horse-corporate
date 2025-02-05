const Footer = () => {
  return (
    <footer className="pt-[2rem]">
      <div className="bg-s1 p-[2rem] w-full h-max">
        <div className="w-full md:grid-4-cols  justify-around footer-links col-all-centered gap-y-10">
          <img
            src="/logo.png"
            width={181}
            height={71}
            alt="Logo"
            className="md:border-none md:pb-0 pb-2 border-b border-gray-200"
          />
          <div className="w-full md:col-all-start col-all-centered gap-y-4">
            <span className="font-bold text-lg">Site map</span>
            <a href="/">Home</a>
            <a href="/about">About us </a>
            <a href="/team">Our team </a>
            <a href="/partners">Partners</a>
          </div>

          <div className="w-full md:col-all-start col-all-centered gap-y-4">
            <span className="font-bold text-lg">Products</span>
            <a href="/#">The Horse App</a>
            <a href="/#">The Horse App - Riders</a>
            <a href="/#">JEANEÉ</a>
            <a href="/#">Quick bite</a>
          </div>

          <div className="w-full md:col-all-start col-all-centered gap-y-4">
            <span className="font-bold text-lg">Follow us</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <div className="flex">
          <a
            href="/waitlist"
            className="ml-auto hero-btn bg-white mt-8 text-s1 md:px-[65px] max-md:px-[20px] text-center font-bold"
          >
            Join us now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
