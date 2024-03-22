import React from 'react';

function Line(props) {
    return (
        <div className=' h-[1px] bg-gray-200 w-[100%] '>

        <div className=' flex absolute right-20'> 
            <select className=' w-[150px] border px-2 rounded-[5px] font-medium border-gray-400 outline-none'>
                <option select > Sort by </option>
                <option> Time </option>
                <option> Fee </option>
                
            </select>
        </div>
            
        </div>
    );
}

export default Line;