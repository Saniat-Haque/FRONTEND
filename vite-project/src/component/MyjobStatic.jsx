import React from 'react';
import { CgArrowLongRight } from "react-icons/cg";

function MyjobStatic(props) {
    return (
        <div className='flex justify-center mt-[90px] '>
            <div className='  justify-center ' >
            <h2 className=' flex justify-center text-[20px] font-medium ' >No jobs saved yet</h2>
            <p className=' flex justify-center font-light my-[10px] '>Jobs you save appear here.</p>
            <button className=' flex m-auto items-center bg-blue-600 px-[19px] py-[8px] rounded-[7px] font-bold text-white hover:bg-blue-800 duration-200  '> Find jobs <CgArrowLongRight className='ml-[8px]  '/> </button>
            </div>
        </div>
    );
}


export default MyjobStatic;