import React, { useEffect, useState } from 'react';
import { setLocalStroage } from '../../utils/LocalStorage';

const Header = ({data, changeUser}) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (!data) {
      setUsername('Admin');
    } else {
      setUsername(data.firstName);
    }
  }, [data]);

  const logOut = () => {
    localStorage.setItem("loggedInUser", "")
    changeUser('')
    // window.location.reload()
  }

  return (
    <>
      <div className=' flex justify-between'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold flex justify-start'>{username} 👋</span> </h1>
        
      
     
      <button onClick={logOut} className=' bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'>Log Out</button>
      </div>

    </>
  );
}

export default Header;