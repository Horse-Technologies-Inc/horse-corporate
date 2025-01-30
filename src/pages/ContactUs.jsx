import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [mailingData, setMailingData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    message: '',
  });
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log('Sending email', mailingData);
    return;
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        () => alert('Email sent!'),
        (err) => console.error(err),
      );
  };
  return (
    <div className="pt-[85px] max-sm:pt-[47px] gap-y-10 col-all-start">
      <div className="w-[100vw] h-[45vh] bg-[url(/telephone.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          Contact Us
        </h2>
      </div>

      <div className="lg:row-all-start w-full col-all-start">
        <form className="w-full lg:w-3/4 col-all-start pt-8 px-6">
          <div className="w-full lg:grid-2-cols col-all-start gap-x-4">
            <div className="lg:w-[48%] w-full flex flex-col">
              <label
                className="text-xl   font-bold mb-2 ml-1"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                required
                type="text"
                id="firstName"
                placeholder="Please enter your first name here"
                className="w-full lg:w-[440px] rounded shadow-input text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
                onChange={(e) =>
                  setMailingData({ ...mailingData, firstName: e.target.value })
                }
              />
            </div>

            <div className="lg:w-[48%] w-full flex flex-col">
              <label className="text-xl font-bold mb-2 ml-1" htmlFor="lastName">
                Last name
              </label>
              <input
                required
                type="text"
                id="lastName"
                placeholder="Please enter your Last name here"
                className="w-full lg:w-[440px] rounded shadow-input   text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
                onChange={(e) =>
                  setMailingData({ ...mailingData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="w-full lg:grid-2-cols col-all-start gap-x-4">
            <div className="lg:w-[48%] w-full flex flex-col">
              <label className="text-xl font-bold ml-1" htmlFor="phoneNumber">
                Phone number
              </label>
              <input
                required
                type="tel"
                id="phoneNumber"
                placeholder="Please enter your Phone number here"
                className="w-full lg:w-[440px] rounded shadow-input   text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
                onChange={(e) =>
                  setMailingData({
                    ...mailingData,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </div>

            <div className="lg:w-[48%] w-full flex flex-col">
              <label className="text-xl   font-bold mb-2 ml-1" htmlFor="email">
                E-Mail Address
              </label>
              <input
                required
                type="email"
                id="email"
                placeholder="Please enter your e-mail here"
                className="w-full lg:w-[440px] rounded shadow-input   text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none"
                onChange={(e) =>
                  setMailingData({ ...mailingData, message: e.target.value })
                }
              />
            </div>
          </div>

          <div className="lg:w-[48%] w-full flex flex-col">
            <label className="text-xl   font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              id="message"
              placeholder="Please leave your message here"
              className="w-full lg:w-[900px] shadow-textarea text-xl px-8 py-7 h-[215px] mb-[40px] focus:outline-none"
            />
          </div>
          <button
            onClick={(e) => sendEmail(e)}
            type="button"
            className="rounded-[20px] bg-[#F8931F] w-max lg:px-20  px-10 py-4 text-white font-bold text-2xl place-self-center"
          >
            Send Message
          </button>
        </form>
        <img
          src="/static/contact-illustration.png"
          alt="Contact Book"
          className="hidden lg:block translate-x-[-60px]"
        />
      </div>
    </div>
  );
};

export default ContactUs;
