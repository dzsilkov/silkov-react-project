import React from 'react';
import { Link } from 'react-router5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import {
  faUserTie,
  faBook,
  faHeart,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import './AccountsDashBoard.css';
import { useRoute } from 'react-router5';

const AccountDashBoard = ({signOutUser, activeUser, allBooksLength, readBooksLength, favouriteBooksLength}) => {
  const {router} = useRoute();
  const {firstName, lastName, email} = activeUser;
  return (
    <div className="accountDashboard">
      <div className="accountCard bg-white rounded overflow-hidden shadow-xlg">
        <div className="accountImg">
          <FontAwesomeIcon
            size="10x"
            icon={faUserTie}
          />
        </div>
        <div className=" self-auto">
          <div className="w-full" >
            <p className="font-bold text-xl mb-1">First Name:</p>
            <p className="pl-10 text-3xl"><i>{firstName}</i></p>
          </div>
          <div className="w-full"
          >
            <p className="font-bold text-xl mb-1">Last Name:</p>
            <p className="pl-10 text-3xl"><i>{lastName}</i></p>
          </div>
          <div className="w-full"
          >
            <p className="font-bold text-xl mb-1">E-Mail:</p>
            <p className="pl-10 text-3xl"><i>{email}</i></p>
          </div>
        </div>
        <div className="self-end px-6 pb-4">
          <Link
            className="bookAction bg-gray-200 rounded-full mb-2 px-3 py-1 text-md hover:bg-gray-400 font-semibold text-gray-700"
            router={router}
            routeName={'library'}
          >
            <span>#My Books</span>
            <span>
              <FontAwesomeIcon size="2x" icon={faBook}/>
              <span className="px-5 text-4xl">
                {allBooksLength}
              </span>
              </span>
          </Link>
          <Link
            className="bookAction bg-gray-200 rounded-full mb-2 py-1 text-md hover:bg-gray-400 font-semibold text-gray-700"
            router={router}
            routeName={'library'}
          >
            <span>#Favorite Books</span>
            <span>
              <FontAwesomeIcon size="2x" icon={faHeart}/>
              <span className="px-5 text-4xl rounded-full bg-white-400 ">
                {favouriteBooksLength}
              </span>
              </span>
          </Link>
          <Link
            className="bookAction bg-gray-200 rounded-full mb-2 px-3 py-1 text-md hover:bg-gray-400 font-semibold text-gray-700"
            router={router}
            routeName={'library'}
          >
            <span>#Read books</span>
            <span>
              <FontAwesomeIcon size="2x" icon={faBookOpen}/>
              <span className="px-5 text-4xl">
                {readBooksLength}
              </span>
              </span>
          </Link>
          <button
            onClick={() => signOutUser()}
            className="w-full rounded-full px-3 py-1 text-sm font-semibold text-gray-700 shadow bg-blue-500 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold"
            type="submit"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDashBoard;
