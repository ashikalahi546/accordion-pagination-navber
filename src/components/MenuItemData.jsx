export const menuItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Services',
      path: '/services',
      submenu: [
        {
          label: 'Service 1',
          path: '/services/service1',
        },
        {
          label: 'Service 2',
          path: '/services/service2',
        },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];