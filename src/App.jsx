import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Homescreen';
import Aboutpage from './pages/About';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ContactUspage from './pages/ContactUs';
import TeamPage from './pages/Team';
import Partnerspage from './pages/Partners';
import WaitListPage from './pages/WaitList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <Aboutpage /> },
      { path: '/contact-us', element: <ContactUspage /> },
      { path: '/team', element: <TeamPage /> },
      { path: '/partners', element: <Partnerspage /> },
      { path: '/waitlist', element: <WaitListPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
