import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { CgArrowLongRight } from "react-icons/cg";



function MyProfile(props) {
    const {myProfilePageHandlerDisable}=props;
    const [email,setEmail]=useState("hsaniat63@gmail.com");
    const [phoneNumber,setPhoneNumber]=useState("+880 1750498080");
    const [location,setLocation]=useState('Dhaka, BangladeshWGDIgsdiaSGDIasgdhiAHGDiasgdAISGDUaogdsAGDS');
    
    return (
        <div className='  border bg-slate-50 '>
            <div className='   shadow-sm '>
            <img className=' mt-[30px] mb-[10px] flex m-auto h-[150px] w-[150px] border rounded-[50%] ' alt='profile picture' src='../assets/images/IMG_66077.jpeg'></img>
            <div className='flex justify-center items-center mb-[20px]'>
            <h1 className=' text-[20px] mr-[10px] font-medium '>Saniat Haque</h1>
            <CiEdit  className=' cursor-pointer text-[gray] hover:text-[black] duration-100 ' />
            </div>
                
                
            </div>

            <div className=' mt-[30px]'>
                <div className=' flex ml-[20%] items-center my-[30px]  '> 
                    <MdOutlineMail className=' mr-[10px] ' />
                    <p className='text-[17px] text-gray-500  '>{email}</p>
                </div>
                <div className='flex ml-[20%] items-center my-[30px] '>
                    <div className='flex items-center'>
                    <IoPhonePortraitOutline className=' mr-[10px] '/>
                    <p className=' text-gray-500' >{phoneNumber} </p>
                    </div>
                    <CiEdit className=' ml-[20px] text-[gray] hover:text-[black] cursor-pointer '/>
                </div>
                <div className=' flex ml-[20%] items-center my-[30px] '>
                    <div className='flex items-center'>
                        <ImLocation className=' mr-[10px] '/>
                        <p className=' max-w-[530px] overflow-hidden text-gray-500 '> {location} </p>
                    </div>
                    
                
                </div>
            </div>
            <button onClick={myProfilePageHandlerDisable}  className=' mb-[30px] flex m-auto items-center bg-blue-600 px-[19px] py-[8px] rounded-[7px] font-bold text-white hover:bg-blue-800 duration-200  '> Find jobs <CgArrowLongRight className='ml-[8px]  '/> </button>

        </div>
    );
}

export default MyProfile;