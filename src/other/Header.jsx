// import React, { useState } from 'react'
// import { setLocalStorage } from '../utils/localStorage'

// const Header = (props,data) => {
// // const[username,setUsername]=useState('')
// // if(!data){
// //     setUsername('Admin')
// // }else{
// //     setUsername(data.firstName)
// // }

// const logOutUser=()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
// }

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'> 👋 </span></h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-6 py-3 rounded-3xl'>LogOut</button>
//     </div>
//   )
// }

// export default Header


// import React, { useEffect, useState } from 'react';

// const Header = (props) => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (!user || user.type === 'admin') {
//       setUsername('Admin');
//     } else {
//       setUsername(user.firstName);
//     }
//   }, []);

//   const logOutUser = () => {
//     localStorage.removeItem('loggedInUser');
//     props.changeUser('');
//   };

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>
//         Hello <br />
//         <span className='text-3xl font-semibold'>{username} 👋</span>
//       </h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-6 py-3 rounded-3xl'>
//         LogOut
//       </button>
//     </div>
//   );
// };

// export default Header;



// import React, { useEffect, useState } from 'react';

// const Header = (props) => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const userStr = localStorage.getItem('loggedInUser');
//     console.log('User from localStorage:', userStr); // Debug log
//     const user = userStr ? JSON.parse(userStr) : null;
//     if (!user || user.type === 'admin') {
//       setUsername('Admin');
//     } else if (user.firstName) {
//       setUsername(user.firstName);
//     } else {
//       setUsername('User');
//     }
//   }, []);

//   const logOutUser = () => {
//     localStorage.removeItem('loggedInUser');
//     props.changeUser('');
//   };

//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>
//         Hello <span className='text-3xl font-semibold'>{username.firstName} 👋</span>
//       </h1>
//       <button onClick={logOutUser} className='bg-red-600 text-white px-6 py-3 rounded-3xl'>
//         LogOut
//       </button>
//     </div>
//   );
// };

// export default Header;

const Header = ({ changeUser, data }) => {
  const username = data?.firstName || "Admin";
  console.log("Header loaded with user:", data);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-800/60 pb-6">
      <div>
        <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
          Welcome Back
        </span>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mt-1">
          👋 <span className="text-white">{username}</span>
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 hover:border-rose-500/40 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;