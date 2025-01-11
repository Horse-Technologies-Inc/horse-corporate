const Footer = () => {
  return (
    <footer className="pt-[99px]">
      <div className="bg-s1 p-[50px]">
        <img src="/logo.png" width={181} height={71} alt="Logo" />
        <div className="flex mt-12 justify-around footer-links">
          <div className="flex flex-col gap-8">
            <span className="font-bold">Company</span>
            <span>About us </span>
            <span>Our offers</span>
          </div>

          <div className="flex flex-col gap-8">
            <span className="font-bold">Product</span>
            <span>Ride</span>
            <span>Drive</span>
            <span>Delivery</span>
            <span>JEANEÉ</span>
            <span>Quick bite</span>
          </div>

          <div className="flex flex-col gap-8">
            <span className="font-bold">Follow us</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <div className="flex">
          <button className="ml-auto hero-btn bg-white mt-8 text-s1 md:px-[65px] max-md:px-[20px]">
            Join us now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
