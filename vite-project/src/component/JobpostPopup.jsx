import React, { useState } from 'react';
import { BiBookmark } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { CgArrowTopRight } from "react-icons/cg";
import { BiSolidBriefcase } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { BiSolidMap } from "react-icons/bi";

function JobpostPopup({onClose}) {
    

    return (
        <>
              
                <div className='overflow-auto h-[550px] max-w-[1000px] bg-white shadow-2xl shadow-gray-600 fixed top-0 left-0 right-0 bottom-0 m-auto z-50 rounded-[7px] border border-gray-400'>
                    <div className="flex mb-1 z-50 bg-gray-100 sticky">
                        <div className="p-[20px] w-[100%] border border-gray-300 rounded-t-[7px]">
                            <h2 className="text-xl font-medium mb-[20px]">Health Information Associate - Medical Records - Mount Sinai Hospital - Part Time, 8AM-4PM</h2>
                            <h4>Dhaka, Bangladesh | 3 weeks ago</h4>
                            <h4>$15.50 - $19.90 an hour | Part-time</h4>
                            <h2>Reference fee: $300</h2>
                            <div className="flex items-center justify-between">
                                <div className='flex items-center'>
                                    <button className="flex items-center bg-blue-600 px-[10px] py-[7px] rounded-[7px] text-white text-[18px] hover:bg-blue-700">Sent apply request<CgArrowTopRight className='m-[5px]' /></button>
                                    <div className='pr-[20px] pl-[20px] pt-[10px] pb-[10px] rounded-[7px] m-[10px] bg-[#e4e2e0] hover:bg-gray-400 cursor-pointer'>
                                        <BiBookmark size={20} color='black'/>
                                    </div>
                                </div>
                                <div>
                                    <p>Applicant - <span>30</span> &nbsp; &nbsp; | &nbsp; &nbsp; Interview - <span>7</span></p>
                                </div>
                            </div>
                            <div onClick={ onClose } className="absolute right-0 top-0 p-[8px] m-[2px] bg-gray-300 rounded-[50%] hover:bg-[#e4e2e0] cursor-pointer">
                                <AiOutlineClose size={20} color="black" />
                            </div>
                        </div>
                    </div>
                    <div className="h-[] w-[100%]">
                        <h1 className="text-2xl ml-[15px] border-b p-[10px] font-medium">Job details</h1>
                        <div>
                            <div className="jobdetails">
                                <MdOutlinePayment className='mr-[8px]' />
                                <p>Pay: $15.50 - $19.90 an hour</p>
                            </div>
                            <div className="jobdetails">
                                <BiSolidBriefcase color="black" className="mr-[8px]" />
                                <p>Job type: <span>Part-time</span></p>
                            </div>
                            <div className="jobdetails">
                                <BsCalendar3 size={15} className="mr-[8px]" />
                                <p>Working days: Monday to Tuesday</p>
                            </div>
                            <div className="jobdetails">
                                <LuClock3 className="mr-[8px]" />
                                <p>Working hours: 07:00pm to 01:00am</p>
                            </div>
                            <div className="jobdetails mb-[15px]">
                                <BiSolidMap className="mr-[8px]" />
                                <p>Location: <span>Dhaka, Bangladesh</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-2xl ml-[15px] border-b p-[10px] font-medium">Requirements</h1>
                        <p className="p-[20px] border-b">
                            {/* Your requirements text goes here */}
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl ml-[15px] font-medium border-b p-[10px]">Full job Description</h1>
                        <p className="p-[20px] border-b ">
                            {/* Your full job description text goes here */}
                        </p>
                    </div>
                </div>
            
        </>
    );
}

export default JobpostPopup;
