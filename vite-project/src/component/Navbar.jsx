import React, { useState, useEffect, useRef } from "react";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Profilepopup from './Profilepopup';
import NotificationPopup from "./NotificationPopup";
import ChatsPopup from "./ChatsPopup";
import { FaFacebookMessenger } from "react-icons/fa";

function Navbar(props) {


    const [messageToggle, setMessageToggle] = useState(false);
    const [notificationToggle,setNotificationToggle] =useState(false)
    const [profileToggle,setProfileToggle]=useState(false)
    
    console.log(setMessageToggle)

    
        
    
    const handleChatClick = () => {
        setMessageToggle(prevToggle => !prevToggle); 
        
        
    };
    const handleNotificationClick = () => {
         
        setNotificationToggle(prevToggle=>!prevToggle)
        
    };
    const handleProfileClick = () => {
         
        setProfileToggle(prevToggle=>!prevToggle)
        
    };
    




    return (
        <nav>
            <div className="flex justify-between h-[70px]  border-solid border-b-[2px] border-gray-300 items-center">
                <div className=" flex items-center  ">
                    <a className="cursor-pointer ml-[60px] text-2xl font-bold text-blue-600"  href='#'>JOOBEY</a>
                    <p className=" ml-[20px]  py-[22px] px-[5px] rounded cursor-pointer hover:bg-blue-100 duration-200 ">Home</p>
                </div>
                <div className='hidden mr-[200px] border  pl-[20px] pr-[20px] pt-1 pb-1 rounded-[30px] text-blue-600 hover:border-blue-600 duration-200'>
                    <button>Sign in</button>
                </div>

                <div className="mr-[50px] relative flex">
                    <div className="group" onClick={handleChatClick}>
                        <div className='navbariconDesing'>
                            <FaFacebookMessenger size={23} />
                        </div>
                        <div className="iconsUnderLineDesign"></div>
                    </div>

                    <div className="group" onClick={handleNotificationClick} >
                        <div className='navbariconDesing'>
                            <IoNotifications size={25} color='' />
                        </div>
                        <div className="iconsUnderLineDesign"></div>
                    </div>

                    <div className="group" onClick={handleProfileClick} >
                        <div className='navbariconDesing'>
                            <CgProfile size={25} color='' />
                        </div>
                        <div className="iconsUnderLineDesign"></div>
                    </div>

                    <div className="h-[40px] w-[1px] bg-black opacity-[.3] m-auto ml-[30px] rounded-[50px]"></div>

                    <div className="m-auto">
                        <button className="m-auto py-[6px]  px-[30px] rounded-[30px] text-[18px] hover:text-white font-bold border border-blue-700 ml-[50px] bg-white  hover:bg-blue-700 duration-200">Refer ?</button>
                    </div>
                </div>
            </div>

            

            {messageToggle && <ChatsPopup/> }
            {notificationToggle && <NotificationPopup/>}
            {profileToggle && <Profilepopup/>}
        </nav>
    );
}

export default Navbar;
