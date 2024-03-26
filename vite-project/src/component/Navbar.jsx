import React, { useState, useEffect, useRef } from "react";
import FormForRefer from './FormForRefer';


import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Profilepopup from './Profilepopup';
import NotificationPopup from "./NotificationPopup";
import ChatsPopup from "./ChatsPopup";
import { FaFacebookMessenger } from "react-icons/fa";

function Navbar(props) {
    

    const {closeSearchBar,myJobPage,postJobHandler,homeStateHandler,myProfilePageHandler}=props;
    


 

    const [messageToggle, setMessageToggle] = useState(false);
    const [notificationToggle,setNotificationToggle] =useState(false)
    const [profileToggle,setProfileToggle]=useState(false)
    
    

    
    const handleProfileScreen=()=>{
        setProfileToggle(false)
    }
    
    const handleChatClick = () => {
        setMessageToggle(prevToggle => !prevToggle); 
        setNotificationToggle(false);
        setProfileToggle(false);
        
        
    };
    const handleNotificationClick = () => {
         
        setNotificationToggle(prevToggle=>!prevToggle)
        setProfileToggle(false)
        setMessageToggle(false)
        
    };
    const handleProfileClick = () => {
         
        setProfileToggle(prevToggle=>!prevToggle)
        setMessageToggle(false)
        setNotificationToggle(false)
    };

    console.log('this is profile screen-------- :' + profileToggle);
    




    return (
        <nav>
            <div className="flex justify-between h-[70px]  border-solid border-b-[2px] border-gray-300 items-center">
                <div className=" flex items-center  ">
                    <a className="cursor-pointer ml-[60px] text-2xl font-bold text-blue-600"  href='#'>JOOBEY</a>
                    <p onClick={homeStateHandler} className=" ml-[20px]  py-[22px] px-[5px] rounded cursor-pointer hover:bg-blue-100 duration-200 ">Home</p>
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
                        <button onClick={postJobHandler} className="m-auto py-[6px]  px-[30px] rounded-[30px] text-[18px] hover:text-white font-bold border border-blue-700 ml-[50px] bg-white  hover:bg-blue-700 duration-200">Refer ?</button>
                    </div>
                </div>
            </div>

            

            {messageToggle && <ChatsPopup/> }
            {notificationToggle && <NotificationPopup/>}
            {profileToggle && <Profilepopup myProfilePageHandler={myProfilePageHandler} closeSearchBar={closeSearchBar} myJobPage={myJobPage} handleProfileScreen={handleProfileScreen} />}
            {/* <FormForRefer/> */}

        </nav>
    );
}

export default Navbar;
