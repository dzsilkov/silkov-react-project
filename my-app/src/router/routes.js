export const routes = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'library',
    path: '/library'
  },
  {
    name: 'search',
    path: '/search'
  },
  {
    name: 'settings',
    path: '/settings',
    children: [
      {
        name: 'accounts',
        path: '/accounts'
      },
      {
        name: 'about',
        path: '/about'
      },
      {
        name: 'language',
        path: '/language'
      },
      {
        name: 'location',
        path: '/location'
      },
      {
        name: 'help',
        path: '/help'
      }
    ]
  },
];