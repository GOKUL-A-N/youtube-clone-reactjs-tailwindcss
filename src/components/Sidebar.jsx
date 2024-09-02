import React from 'react';


export default function Sidebar() {
  return (
    <div className='text-white flex mt-20 flex-col '>
      <i className="fa-solid fa-house p-4 fs-3"></i>
      <i className="fa-solid fa-music p-4 fs-3"></i>
      <i className="fa-solid fa-bell border border-black border-3 rounded-pill m-3 p-2 fs-3"></i>
      <i className="fa-solid fa-video fs-3 p-4"></i>
      <i className="fa-solid fa-download fs-3 p-4"></i>
    </div>
  );
}