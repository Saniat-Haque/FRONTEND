import React from 'react';
import { CgArrowLongRight } from "react-icons/cg";

function MyjobStatic(props) {
    const {firstLineText,secondLineText,homeStateHandler}=props;
    
    return (
        <div className='flex justify-center mt-[90px] '>
            <div className='  justify-center ' >
            <h2 className=' flex justify-center text-[20px] font-medium ' >{firstLineText}</h2>
            <p className=' flex justify-center font-light my-[10px] '>{secondLineText} </p>
            <button onClick={homeStateHandler} className=' flex m-auto items-center bg-blue-600 px-[19px] py-[8px] rounded-[7px] font-bold text-white hover:bg-blue-800 duration-200  '> Find jobs <CgArrowLongRight className='ml-[8px]  '/> </button>
            </div>
        </div>
    );
}


export default MyjobStatic;