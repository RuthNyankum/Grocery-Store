import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layout/rootLayout';
import Home from './pages/home';
import Products from './pages/products';
import Cart from './pages/cart';
import Blog from './pages/blog';
import Contact from './pages/contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'contact-us',
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

