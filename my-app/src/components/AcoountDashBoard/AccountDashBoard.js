import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faUserAlt, faUserNinja, faUserTie } from '@fortawesome/free-solid-svg-icons';


const AccountDashBoard = ({signOutUser, authUser}) => {

  const {firstName, lastName, email} = authUser;

  return (
    <div>
      <div className="w-full m-5 max-w-md bg-white rounded overflow-hidden shadow-xlg">
        <div className="flex flex-wrap flex-col px-6 py-2">
          <span className="self-start mb-1 pt-2">
          <FontAwesomeIcon size="6x" icon={faUserTie}/>
        </span>
          <div className="w-full">
            <p className="font-bold text-md pl-2 mb-1">First Name:</p>
            <p className="text-xl">{firstName}</p>
          </div>
          <div className=""
          >
            <p className="font-bold text-md pl-2 mb-1">Last Name:</p>
            <p className="text-xl"><i>{lastName}</i></p>
          </div>
          <div className=""
          >
            <p className="font-bold text-md pl-2 mb-1">E-Mail:</p>
            <p className="text-xl">{email}</p>
          </div>
        </div>


        <div className="px-6 py-2">
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
            className="w-full rounded-full mb-2 px-3 py-1 text-sm font-semibold text-gray-700 shadow bg-blue-500 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold"
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
