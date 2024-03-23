import React, { useState, useEffect, useRef } from "react";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Profilepopup from './Profilepopup';
import NotificationPopup from "./NotificationPopup";
import ChatsPopup from "./ChatsPopup";

function Navbar(props) {
    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);
    const [chatToggle, setChatToggle] = useState(false);

    const chatRef = useRef(null);
    const notificationRef=useRef(null);
    const profileRef=useRef(null);

    

    useEffect(() => {
        function handleClickOutside(event) {
            if (chatRef.current && !chatRef.current.contains(event.target)) {
                // Click occurred outside the chat popup
                setChatToggle(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                // Click occurred outside the notification popup
                setNotificationToggle(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                // Click occurred outside the profile popup
                setProfileToggle(false);
            }
        }
    
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [chatRef, notificationRef, profileRef]);
    

    const handleChatClick = () => {
        setToggle(true);
        setNotificationToggle(false);
        setProfileToggle(false);
        setChatToggle(!chatToggle);
    };

    const handleProfileClick = () => {
        setToggle(true);
        setNotificationToggle(false);
        setChatToggle(false);
        setProfileToggle(!profileToggle);
    };

    const handleNotificationClick = () => {
        setToggle(false);
        setProfileToggle(false);
        setChatToggle(false);
        setNotificationToggle(!notificationToggle);
    };

    return (
        <nav>
            <div className="flex justify-between h-[70px] border-b border-solid border-gray-300 items-center">
                <div className="cursor-pointer ml-[60px] text-2xl font-bold text-blue-600">
                    <a href='#'>JOOBEY</a>
                </div>
                <div className='hidden mr-[200px] border pl-[20px] pr-[20px] pt-1 pb-1 rounded-[30px] text-blue-600 hover:border-blue-600 duration-200'>
                    <button>Sign in</button>
                </div>

                <div className="mr-[50px] relative flex">
                    <div className="group" onClick={handleChatClick}>
                        <div className='navbariconDesing'>
                            <MdMessage color='black' size={25} />
                        </div>
                        <div className="iconsUnderLineDesign"></div>
                    </div>

                    <div className="group" onClick={handleNotificationClick}>
                        <div className='navbariconDesing'>
                            <IoNotifications size={25} color='black' />
                        </div>
                        <div className="iconsUnderLineDesign"></div>
                    </div>

                    <div className="group" onClick={handleProfileClick}>
                        <div className='navbariconDesing'>
                            <CgProfile size={25} color='black' />
                        </div>
                        <div className="iconsUnderLineDesign"></div>
                    </div>

                    <div className="h-[40px] w-[1px] bg-black opacity-[.3] m-auto ml-[30px] rounded-[50px]"></div>

                    <div className="m-auto">
                        <button className="m-auto pt-[8px] pb-[8px] pl-[30px] pr-[30px] rounded-[30px] text-black border border-gray-400 ml-[50px] hover:border-blue-500 hover:bg-blue-500/10 duration-200">Post - Job/Ref</button>
                    </div>
                </div>
            </div>

            {profileToggle && <div ref={profileRef}><Profilepopup/></div>}
            {notificationToggle && <div ref={notificationRef}><NotificationPopup/></div>}
            {chatToggle && <div ref={chatRef}><ChatsPopup/></div>}
        </nav>
    );
}

export default Navbar;
