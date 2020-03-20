const BOOKS = '/books';
const BOOK_DETAIL = '/book/:id';
const LIBRARY = '/library';
const SEARCH = '/auth';
const SETTINGS = '/settings';
const ACCOUNTS = '/accounts';
const ABOUT = '/about';
const LANGUAGE = '/language';
const LOCATION = '/location';
const HELP = '/help';


export default  [
  {
    name: 'books',
    path: BOOKS
  },

  {
    name: 'book',
    path: BOOK_DETAIL
  },
  {
    name: 'library',
    path: LIBRARY
  },
  {
    name: 'auth',
    path: SEARCH
  },
  {
    name: 'settings',
    path: SETTINGS,
    children: [
      {
        name: 'accounts',
        path: ACCOUNTS
      },
      {
        name: 'about',
        path: ABOUT
      },
      {
        name: 'language',
        path: LANGUAGE
      },
      {
        name: 'location',
        path:LOCATION
      },
      {
        name: 'help',
        path: HELP
      }
    ]
  },
];