import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer className='text-white p-2 flex justify-between items-center px-6'>
        <div>
            <p>Copyright &copy; 2023 by Areeb Z. | All Rights Reserved.</p>
        </div>

        <div className='border border-[#00A1E4] rounded p-2'>
            <a to={"/"} className='text-[#00A1E4]'><FaArrowUp /></a>
        </div>
    </footer>
  )
}

export default Footer