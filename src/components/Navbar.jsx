// import { Link } from "react-router-dom";
// const Navbar = () => {
//     return (
//         <div className="w-10/12 mx-auto flex justify-between">
//             <h1 className="text-5xl font-bold w-full">This is Header</h1>
//             <nav className="w-10/12 mx-auto flex justify-end gap-10 py-5">
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link>
//             </nav>
//         </div>
        
//     );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
      
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-blue-500">
            <div className="md:hidden p-6" onClick={()=>{setOpen(!open)}}>
                {
                    open? <AiOutlineClose className="cursor-pointer"/>:<AiOutlineMenu className="cursor-pointer"/>
                }
            </div>
            <ul className={`mx-auto w-full absolute bg-blue-500 duration-500
                ${open? 'left-0':'-left-full'}
                md:flex md:w-10/12 md:justify-between md:relative md:left-0`}>                
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                    <Link to="/home">Home</Link>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                    <Link to="/about">About</Link>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                   <Link to="/service">Service</Link>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                   <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;