import React, { Component } from 'react';
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


class Navbar extends Component {

   

    
    render() {
        return (
            
            <nav>
                    <div className=" flex justify-between h-[70px] border-b border-solid border-gray-300 items-center">
        <div className=" cursor-pointer ml-[60px] text-2xl font-bold text-blue-600"> <a href='#'>JOOBEY</a></div>
         <div className=' hidden mr-[200px] border pl-[20px] pr-[20px] pt-1 pb-1 rounded-[30px] text-blue-600 hover:border-blue-600 duration-200  '> <button>Sign in</button></div>


        <div className=" mr-[50px] relative flex  ">

            <div className=" group ">
                
                <div className='navbariconDesing'>
                    <MdMessage color='black' size={25}/>
                    {/* <p className=' p-[px] items-center bg-red-600 font-bold text-xs rounded-[2px] flex' >1</p> */}
                </div>
                <div className=" iconsUnderLineDesign  "></div>
            </div>

            <div className=" group ">
                <div className=' navbariconDesing '>
                        <IoNotifications size={25} color='black'/>
                </div>
                <div className="  left-[40px] iconsUnderLineDesign "></div>
            </div>

            <div className=" group ">
            <div className=' navbariconDesing '>
                <CgProfile size={25} color='black'/>
            </div>
                <div className=" iconsUnderLineDesign"></div>
            </div>

            <div className=" h-[40px] w-[1px] bg-black opacity-[.3] m-auto ml-[30px] rounded-[50px] " ></div>

            <div className=" m-auto">
                <button className="m-auto  pt-[8px] pb-[8px] pl-[30px] pr-[30px] rounded-[30px] text-black border border-gray-400  ml-[50px] hover:border-blue-500  hover:bg-blue-500/10 duration-200 ">Post - Job/Ref</button>
            </div>
            
        </div>
        
        
        </div>
            </nav>
        );
    }
}


export default Navbar;