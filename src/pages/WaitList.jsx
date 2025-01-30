import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { WAITLIST_CONFIG } from '../../constants/app.constants';
import { ButtonLoader } from '../elements/loader';

const WaitListPage = () => {
  // const formRef = useRef();
  //component states
  const [mailingData, setMailingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
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
      role: mailingData.role,
      phone_number: mailingData.phoneNumber,
      email: mailingData.email,
    };

    setLoading(true);
    setNetworkMessage(``);
    let response = await emailjs.send(
      WAITLIST_CONFIG.serviceID,
      WAITLIST_CONFIG.templateId,
      formMail,
      WAITLIST_CONFIG.publicKey,
    );
    console.log('response', response);
    if (response.status == 200) {
      console;
      setLoading(false);
      setNetworkStatus(response.status);
      setNetworkMessage(
        `Hey, ${mailingData.firstName}, thank you for joining us. We will onboard you once we launch, and you are sure to get a 10% discount off your first three activities 🎉`,
      );
    } else if (response.status != 200) {
      setLoading(false);
      setNetworkStatus('Error');
      setNetworkMessage(
        'Uh uh! we ran into an issue while aadding you to the waiting list. Please try again later.',
      );
    }

    // return;
  };
  return (
    <div className="pt-[85px] max-sm:pt-[47px] gap-y-10 col-all-start">
      <div className="w-[100vw] h-[45vh] bg-[url(/static/waitlist-banner.svg)] bg-center bg-no-repeat bg-cover col-all-centered">
        <h2 className="bg-white px-10 py-2 rounded-full opacity-50 text-3xl font-bold w-max">
          Join us
        </h2>
      </div>

      <div className="lg:row-all-start w-full col-all-start">
        <form
          id="#contactform"
          className="w-full lg:w-3/4 col-all-start gap-y-4 pt-8 px-6"
          onSubmit={(e) => sendEmail(e)}
        >
          <div className="w-full col-all-start gap-x-4">
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

          <div className="w-full col-all-start gap-x-4">
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
            <label className="text-xl   font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
              onChange={(e) =>
                setMailingData({ ...mailingData, role: e.target.value })
              }
              className="w-full lg:w-[440px] rounded shadow-input  text-sm opacity-[80%] px-8 py-7 h-[17px] mb-[50px] focus:outline-none bg-white"
            >
              <option disabled value={'-'}>
                Select your role
              </option>
              <option value={'Customer'}>Customer</option>
              <option value={'Rider'}>Rider</option>
            </select>
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
            {loading ? <ButtonLoader type={'white'} /> : <>Join us</>}
          </button>
        </form>
        <img
          src="/static/waitlist-banner.svg"
          alt="Waitlist"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default WaitListPage;
