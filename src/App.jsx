import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Products from './pages/products';
import Cart from './pages/cart';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Login from './pages/login';

function App() {
  const router = createBrowserRouter([
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
    {
      path: 'login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
