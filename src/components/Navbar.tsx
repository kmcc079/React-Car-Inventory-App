import { useState } from "react";
import { Link } from 'react-router-dom';
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, Providers } from "../config/firebase";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
      location.reload();
    }
  }

  const dropDown = () => {
    setIsVisible(!isVisible)    
  };

  const clicked = () => {
    setIsVisible(false)
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-5 border-b-2 border-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' 
              onClick={ clicked }
              className="font-semibold text-xl tracking-wide">
                T.C.I.
            </Link>
        </div>
        <div className="block">
            <button 
              onClick={dropDown}
              className="flex items-center px-3 py-2 text-teal-200 border rounded
              border-teal-400 hover:text-white hover:border-white">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        { isVisible ? (
        <div className="block w-full flex-grow items-center">
            <div className="flex flex-row text-center text-sm lg:flex-grow justify-end">
                <button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                        <Link to='/' 
                          onClick={ clicked }
                          className="flex place-items-center text-center mt-4 lg:inline-block lg:mt-0
                          text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                    </div>
                </button>
                <button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                        <Link to='/account' 
                          onClick={ clicked }
                          className="flex items-center text-center mt-4 lg:inline-block lg:mt-0
                          text-teal-200 hover:text-white mr-4">
                            Account
                        </Link>
                    </div>
                </button>
                <button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                        <Link to='/dashboard' 
                          onClick={ clicked }
                          className="flex items-center text-center mt-4 lg:inline-block lg:mt-0
                          text-teal-200 hover:text-white mr-4">
                            Dashboard
                        </Link>
                    </div>
                </button>
                <button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                        <Link to='/about' 
                          onClick={ clicked }
                          className="flex items-center text-center mt-4 lg:inline-block lg:mt-0
                          text-teal-200 hover:text-white mr-4">
                            About
                        </Link>
                    </div>
                </button>
                {
                  !auth.currentUser ?

                  <button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                      <Link to="/" onClick={ () => { signInOnClick() } } 
                        className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-300 hover:text-white">
                        Sign In
                      </Link>
                    </div>
                  </button>
                  :
                  <button className="p-3 m-5 bg-teal-400 justify-center">
                    <div>
                      <Link to="/" onClick={ () => { signOutOnClick() } } 
                        className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-300 hover:text-white">
                        Sign Out
                      </Link>
                    </div>
                  </button>
                }
            </div>
        </div> 
        ) : (
        <></>
        ) }
    </nav>
  );
}

export default Navbar
