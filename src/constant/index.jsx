const K = {
  NAVLINKS: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Products',
      path: '#',
      dropdown: [
        {
          name: 'Product One',
          path: '/products/product-one',
        },
        {
          name: 'Product Two',
          path: '/products/product-two',
        },
        {
          name: 'Product Three',
          path: '/products/product-three',
        },
      ],
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Contact',
      path: '/contact-us',
    },
  ],
};

export default K;
