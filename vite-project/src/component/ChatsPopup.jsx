
import { CiSearch } from "react-icons/ci";

function ChatsPopup(props) {
    return (
        <div className=" absolute right-28 w-[350px] border h-[550px] shadow-lg bg-white z-50 overflow-y-scroll rounded-[7px] ">
            <div className=" h-[60px] flex bg-gray-200 border-b   "><h2 className=" m-auto font-medium text-[25px] " >Chat</h2></div>
            <div className=" flex items-center justify-center  mt-[20px] ] ">
                <CiSearch className=" bg-gray-200 w-[30px] h-[35px] px-[5px] rounded-l-[20px] "/>
                <input className=" rounded-r-[20px] w-[250px] h-[35px] p-[10px] outline-none bg-gray-200 " placeholder="Search" type="search" ></input>
            </div>
            <div className=" h-[1px] w-[100%] bg-gray-200 my-[20px]  "/>
            <div className=" m-[2px] cursor-pointer hover:bg-blue-50 flex relative bg-gray-100 rounded-[7px] h-[70px] items-center p-[10px] ">
                <img className=" h-[50px] w-[50px] border rounded-[50%] " src="../assets/images/IMG_66077.jpeg" alt="Picture" />
                <div className="p-[10px] ">
                <p className=" p-[1px] text-[17px] ">Saniat haque</p> 
                <p className=" text-[13px] pl-[5px] "> hey whatssup</p>
                </div>
                
            </div>

        </div>
    );
}

export default ChatsPopup;