import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

function FormForRefer(props) {
    const {postJobClose}=props;
    return (
        <form className='  w-[800px] bg-gray-100 z-50 h-[640px] fixed top-0 left-0 right-0 bottom-0  border shadow-lg m-auto  overflow-y-scroll '>
            
                <div className=' bg-blue-600 h-[50px] mb-[30px] flex sticky top-0 ' ><h2 className=' text-[20px] font-serif font- w-[150px] text-white felx m-auto  '>Post a reference</h2>
                <AiOutlineClose onClick={postJobClose} className=' text-white cursor-pointer hover:text-red-600 border-l bg-blue-600 absolute top-0 right-0 h-[50px] w-[40px] duration-200 ' size={20} />
                </div>
            <div className=' px-[40px] '>
            
                <div className='mb-[20px]' >
                    <p className=' referPostTextDesign '>Job title :</p>
                    <input className=' referPostInputDesign ' required type='text' placeholder='Job title'></input>
                </div>
                <div className=' mb-[20px] '>
                    <p className=' referPostTextDesign '>Company :</p>
                    <input className=' referPostInputDesign '  type='text' placeholder='Company name'></input>
                </div>
                <div className=' mb-[20px] '>
                    <p className=' referPostTextDesign '>Job location :</p>
                    <input className=' referPostInputDesign ' required type='text' placeholder='Job loacation' ></input>
                </div>

                <div className=' flex w-[700px] m-auto h-[80px] mt-[40px]   justify-between mb-[20px] ' >

                    <div className='  mr-[80px]  '>
                        <p className='referPostTextDesign'>Your email</p>
                        <input className='emaiPhoneinputDesign' required type='email' placeholder='Emai'></input>
                    </div>
                    <div className=''>
                    <p className='referPostTextDesign'> Your Phone number</p>
                        <input className='emaiPhoneinputDesign' type='tel' placeholder='Phone number'></input>
                    </div>
                </div>

                <div className='flex justify-between mb-[30px]'>
                <div>
                    <p className='referPostTextDesign'> Job type</p>
                    <select className='w-[130px] outline-none border-b border-gray-400'>
                        <option>None</option>
                        <option>Part time</option>
                        <option>Full time</option>
                        <option>Contract</option>
                        <option>Temporary</option>
                    </select>
                    
                </div>

                <div>
                    <p className='referPostTextDesign' >Are you?</p>
                    <select className='w-[130px] outline-none border-b border-gray-400' >
                        <option>None</option>
                        <option>Employee</option>
                        <option>Agency</option>
                    </select>
                </div>
                <div>
                    <p className='referPostTextDesign' >Experience Level</p>
                    <select className='w-[130px] outline-none border-b border-gray-400' >
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>No experience required</option>
                    </select>
                </div>
                <div>
                    <p className='referPostTextDesign' >Prefer</p>
                    <select className='w-[130px] outline-none border-b border-gray-400' >
                        <option>Male Female both</option>
                        <option>Only Female</option>
                        <option>Only Male</option>
                        <option>None of these</option>
                    </select>
                </div>
                </div>




                <div className='flex justify-between my-[40px] '>
                <div className='  '  >
                    <p className='referPostTextDesign' >Working Days</p>
                    <div className='flex  '>
                    <select className='  daysSlecetionbarDesign ' >
                            <option>Saturday</option>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>friday</option>
                            <option>None</option>
                    </select>
                    <select className=' outline-none border-b border-gray-400 '><option>to</option><option>and</option></select>
                    <select className='daysSlecetionbarDesign '>
                            <option>Saturday</option>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>friday</option>
                            <option>None</option>
                    </select>
                    </div>
                    
                    
                </div>
                <div  >
                    <p className='referPostTextDesign' >Off Days</p>
                    <div className='flex'>
                    <select className=' daysSlecetionbarDesign '>
                            <option>Saturday</option>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>friday</option>
                            <option>None</option>
                    </select>
                    <select className=' outline-none border-b border-gray-400 '><option>to</option><option>and</option></select>
                    <select className='daysSlecetionbarDesign '>
                            <option>Saturday</option>
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>friday</option>
                            <option>None</option>
                    </select>
                    </div>
                    
                    
                </div>
                
                </div>


                <div className='flex  justify-between my-[30px]'>
                <div className='  '>
                    <p className='referPostTextDesign'>Salary</p>
                    <div>
                        <select className=' w-[120px] outline-none border border-r-white border-b border-gray-400 h-[35px]'>
                            <option>Per hour</option>
                            <option>Per day</option>
                            <option>Per week</option>
                            <option>Per month</option>
                            <option>Yearly</option>
                            <option>Contract</option>
                        </select>
                        <input className=' h-[35px] outline-none  border border-gray-400  border-l-white ' required type='text' placeholder='$00.00' ></input>
                    </div>
                </div>
                    <div>
                    <p>Working hours</p>
                    <div className='flex'>
                        <div>
                            <input className=' cursor-text  p-[10px] w-[135px] h-[35px] outline-none border border-r-white  border-gray-400  ' type='time'></input>
                        </div>
                        <p className=' flex items-center border-y border-gray-400 bg-white px-[8px] '>to</p>
                        <input className=' w-[135px]  outline-none border border-l-white  border-gray-400 cursor-text ' placeholder='00:00'  type='time'></input>
                    </div>
                    </div>

                </div>
                <div className=' flex justify-center  border p-3 items-center bg-gray-200 rounded-[10px]' >
                    <div>
                    <p className='referPostTextDesign'>Reference fee</p>
                    <input className=' outline-none border-b w-[300px] h-[35px] border-gray-400  p-[10px] rounded-[7px] ' placeholder='$00.00' ></input>
                    </div>
                    
                </div>

          
                <div>
                    <p className=' text-[20px]  font-medium m-[10px] ' >Requirements</p>
                    <textarea className='h-[200px]  outline-none border w-[700px] '></textarea>
                </div>
                <div >
                    <p className='text-[20px]  font-medium m-[10px]'>Full Job description</p>
                    <textarea className='h-[200px]  outline-none border w-[700px] '></textarea>
                </div>
                

            </div>
            <button className=' flex justify-center m-auto items-center text-[20px] font-bold text-white rounded-[7px] hover:bg-blue-700 my-[20px] h-[40px] bg-blue-600 w-[30%] ' type='submit'>Post</button>
            
        </form>
    );
}

export default FormForRefer;