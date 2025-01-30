import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ContactUs from './pages/ContactUs';
import Team from './pages/Team';
import Partners from './pages/Partners';
import WaitListPage from './pages/WaitList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/team', element: <Team /> },
      { path: '/partners', element: <Partners /> },
      { path: '/waitlist', element: <WaitListPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
