import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faUserAlt, faUserNinja, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './AccountsDashBoard.css';

const AccountDashBoard = ({signOutUser, activeUser}) => {

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
        <div className="self-auto px-6">
          <div className="w-full">
            <p className="font-bold text-md pl-2 mb-1">First Name:</p>
            <p className="text-xl"><i>{firstName}</i></p>
          </div>
          <div className="w-full"
          >
            <p className="font-bold text-md pl-2 mb-1">Last Name:</p>
            <p className="text-xl"><i>{lastName}</i></p>
          </div>
          <div className="w-full"
          >
            <p className="font-bold text-md pl-2 mb-1">E-Mail:</p>
            <p className="text-xl"><i>{email}</i></p>
          </div>
        </div>
        <div className="self-end px-6 pb-4">
          <div className="bg-gray-200 rounded-full mb-2 px-3 py-1 text-sm hover:bg-gray-400 font-semibold text-gray-700"
          >
            #My Books
          </div>
          <div className="bg-gray-200 rounded-full mb-2 px-3 py-1 text-sm hover:bg-gray-400 font-semibold text-gray-700"
          >
            #Favorite Books
          </div>
          <div className="bg-gray-200 rounded-full mb-2 px-3 py-1 text-sm hover:bg-gray-400 font-semibold text-gray-700"
          >#Read books
          </div>
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
