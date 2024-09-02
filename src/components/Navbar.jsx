import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-row h-[50px] items-center justify-between'>
          <div className='text-white flex items-center p-4 justify-center w-auto'><i class="fa-brands fa-youtube text-red-600 fs-2"></i>
          <h1>Youtube</h1></div>
            <div className='flex items-center justify-center'>
                <input type="text" placeholder='search' className='p-1 pl-3 text-white bg-[#111] border-[1px] border-[#444] rounded-full w-[250px]' />
                <button className='h-[50px] w-[50px]'>
                <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
            </div>
            <div>
                <i className="p-1 text-white pr-10 fa-solid fa-user"></i>
            </div>
        </div>
      )
}

export default Navbar