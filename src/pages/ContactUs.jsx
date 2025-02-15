import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MAILING_CONFIG } from '../../constants/app.constants';
import { ButtonLoader } from '../elements/loader';

const ContactUspage = () => {
  // const formRef = useRef();
  //component states
  const [mailingData, setMailingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [mailMessage, setNetworkMessage] = useState('');
  const [networkStatus, setNetworkStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    let formMail = {
      from_name: `${mailingData.firstName} ${mailingData.lastName}`,
      first_name: mailingData.firstName,
      last_name: mailingData.lastName,
      message: mailingData.message,
      phone_number: mailingData.phoneNumber,
      email: mailingData.email,
    };

    setLoading(true);
    let response = await emailjs.send(
      MAILING_CONFIG.serviceID,
      MAILING_CONFIG.templateId,
      formMail,
      MAILING_CONFIG.publicKey,
    );
    console.log('response', response);
    if (response.status == 200) {
      console;
      setLoading(false);
      setNetworkStatus(response.status);
      setNetworkMessage(
        'Your message has been sent successfully. The team will get back to your shortly',
      );
    } else if (response.status != 200) {
      setLoading(false);
      setNetworkStatus('Error');
      setNetworkMessage(
        'Uh uh! we ran into an issue while processing your message. Please try again later.',
      );
    }

    // return;
  };
  return (
    <section className="w-full h-max col-all-start gap-y-10">
      <div className="w-[100vw] h-[45vh] bg-[url(/telephone.png)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          Contact Us
        </h2>
      </div>

      <div className="lg:row-all-start w-full col-all-start">
        <form
          id="#contactform"
          className="w-full lg:w-3/4 col-all-start gap-y-4 pt-8 px-6"
          onSubmit={(e) => sendEmail(e)}
        >
          <div className="w-full lg:grid-2-cols col-all-start gap-x-4">
            <div className="lg:w-[48%] w-full flex flex-col">
              <label
                className="text-xl   font-bold mb-2 ml-1"
                htmlFor="first_name"
              >
                First name
              </label>
              <input
                required
                type="text"
                id="first_name"
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
                id="last_name"
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
                minLength={10}
                maxLength={12}
                id="phone_number"
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
                  setMailingData({ ...mailingData, email: e.target.value })
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
              onChange={(e) =>
                setMailingData({ ...mailingData, message: e.target.value })
              }
            />
          </div>
          {mailMessage !== '' && (
            <div
              className={`w-full h-max px-6 py-2 rounded-md text-white ${networkStatus == 200 || networkStatus == 'ok' ? 'bg-green-600' : 'bg-red-700'}`}
            >
              {mailMessage}
            </div>
          )}
          <button
            disabled={loading}
            type="submit"
            className={`rounded-[20px] bg-[#F8931F] w-max lg:px-20  px-10 py-4 text-white font-bold text-2xl place-self-center ${loading && 'border-2 border-[#F8931F] bg-white'}`}
          >
            {loading ? <ButtonLoader type={'white'} /> : <>Send Message</>}
          </button>
        </form>
        <img
          src="/static/contact-illustration.png"
          alt="Contact Book"
          className="hidden lg:block translate-x-[-60px]"
          width={400}
          height={'auto'}
        />
      </div>
    </section>
  );
};

export default ContactUs;
