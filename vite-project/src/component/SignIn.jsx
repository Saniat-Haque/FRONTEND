import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";

function SignIn(props) {
    return (
        <div>
        <div className=' flex m-[40px] '> <h1 className=' text-[30px] font-semibold text-blue-600 font-serif  inline-block m-auto '>Joobey</h1></div>
        <div className=" w-[500px] border m-auto rounded-[7px]  ">

        <div className=" px-[25px] pt-[25px] pb-[10px] ">
            <h2 className=' mb-[10px] text-[22px] font-medium '>Ready to take the next step?</h2>
        <h3 className=' text-[17px] mb-[10px] ' >Create an account or sign in.</h3>
        <p className=' text-[13px] ' >By creating an account or signing in, you understand
             and agree to Indeed <span><a href="#">Terms</a></span>. You also acknowledge 
             our <span><a href="#">Cookie</a></span> and <span><a href="#">Privacy</a></span> policies.</p>
        </div>

        <div className=" px-[25px] relative">
            <div className="googleAppleSigninbuttonDesign  ">
                <FcGoogle className=' absolute left-20' size={20}/>
                 <button className=' text-[17px] font-medium ' >
                 Continue with Google</button>
            </div>
            <div className="googleAppleSigninbuttonDesign ">
                <AiFillApple className=' absolute left-20' size={23}/>
                <button className=' text-[17px] font-medium '>Continue with Apple</button>
            </div>
            
        </div>
        <div className="  h-[1px] w-[100%]   relative bg-gray-200 my-[34px] before:content-['or'] before:absolute before:top-[50%] before:right-[45%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-white before:text-[#6e695e] before:p-[5px]  "    ></div>

        <div className=" px-[25px] ">
            <h3 className=' text-[17px] mb-[5px] '>Email address *</h3>
            <input className=' outline-none border w-[100%] border-gray-400 rounded-[7px] h-[45px] hover:border-blue-300 ' type="email"/>
            
        </div>
        <div className=' px-[25px] py-[20px]  '>
       
        <button className=' h-[43px] rounded-[7px] text-[18px] font-bold text-white justify-center flex items-center w-[100%] bg-blue-600  ' type="submit">Continue <CgArrowLongRight className='ml-[10px]'/>  </button>
        
        </div>
        
        
    
    </div>
    </div>
    );
}

export default SignIn;