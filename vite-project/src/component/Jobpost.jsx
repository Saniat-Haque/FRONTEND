import React from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { TiLocationArrow } from "react-icons/ti";
function Jobpost(props) {
    return (
        <div id="mainContent" className="mt-[30px] max-h-[600px] max-w-[650px] border border-gray-300 rounded-[7px] m-auto hover:border-blue-300 duration-100 shadow-lg shadow-gray-200">
            <div className="flex">
                <div className="ml-[30px] mr-[20px] mt-[20px] mb-[20px] flex flex-col p-[5px] w-[140px] border">
                <img src="../assets/images/IMG_66077.jpeg" alt="Profile picture" className="h-[70px] w-[70px] rounded-[50%] m-auto" />

                    <p className="inline-block mb-[30px] m-auto"> <span> Saniat haque</span> </p>
                    <p className="pl-[5px]">Proposals: <span className="font-semibold">30</span></p>
                    <p className="pl-[5px]">Reference fee: <br /> <span className="font-semibold ml-[25%] border-b border-black ">$200</span></p>
                </div>
                <div />

                <div className="relative ml-[40px]">
                    <h2 className="max-w-[400px] mb-[10px] max-h-[50px] font-medium overflow-hidden mt-[20px]"> <span>Health Information Associate - Medical Records - Mount Sinai Hospital - Part Time, 8AM-4PM (Weekends & Holidays)</span></h2>
                    <div className="flex items-center">
                        <div>
                            <TiLocationArrow size={20} color='black' />
                        </div>
                        <p className="ml-[10px] font-light"> <span>New York, NY 10029</span> </p>
                    </div>
                    <p className="font-light"> <span>$23.58</span> - <span>$25.93</span> an hour </p>
                    <p className="font-light"><span>Mon</span> to <span>tue</span> | <span>8-hours</span> | <span>09.00am</span> to <span>05.00pm</span></p>
                    <p className="font-light">Entry Level</p>
                    <div className="font-light flex items-center">
                        <button id="jobdescriptionSecondscreen" className="font-normal group group border border-white bg-gray-100 focus:bg-blue-100 focus:border-blue-500 rounded-[7px] mt-[10px] p-[5px]">Job-description</button>
                    </div>
                    <div className=' absolute top-0 right-0 cursor-pointer mt-[15px] p-[10px] rounded-[10px] hover:bg-gray-200 '>
                        <SlOptionsVertical color='black'/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Jobpost;
