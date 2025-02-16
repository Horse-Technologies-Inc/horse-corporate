import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ContactUsPage from './pages/ContactUs';
import TeamPage from './pages/Team';
import PartnersPage from './pages/Partners';
import WaitListPage from './pages/WaitList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact-us', element: <ContactUsPage /> },
      { path: '/team', element: <TeamPage /> },
      { path: '/partners', element: <PartnersPage /> },
      { path: '/waitlist', element: <WaitListPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
