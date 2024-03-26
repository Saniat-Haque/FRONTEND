import React, { useState } from 'react';
import MyjobStatic from './MyjobStatic';
import Jobpost from './Jobpost';
import SignIn from './SignIn';

function MyJobs(props) {

    // THIS HOME STATE HANDLER DO EVERY SECOND MAIN STATE FALSE AND HOME PAGE MAIN STATE ENEABLE TRUE 
    const {homeStateHandler}=props;


    // THESE STATE ARE FOR SAVED JOB, SENT REQUEST, INTERVIEW, ARCHIVED
    const [savedJob, setSavedJob] = useState("0");
    const [sentRequest, setSentRequest] = useState("1");
    const [interviews, setInterviews] = useState("1");
    const [archived, setArchived] = useState("1");

    // THESE STATE ARE FOR STATIC MESSAGE PAGE
    const [savedJobToggle, setSavedJobToggle] = useState(false); //true
    const [requestSentToggle, setRequestSentToggle] = useState(false);
    const [interviewToggle, setInterviewToggle] = useState(false); 
    const [archiveToggle, setArchiveToggle] = useState(false);


    //  TESTING PURPOSE-------------------
    console.log("This is saved job toggle------:::::::" + savedJobToggle);
    console.log("This is request job toggle------:::::::" + requestSentToggle);
    
    console.log("This is interview job toggle------:::::::" + interviewToggle);
    
    console.log("This is archived job toggle------:::::::" + archiveToggle);
    

    // THIS ONE FOR SAVE JOB HANDLER BUTTON 
    const savedJobHandler = () => {
        setSavedJobToggle(true);
        setRequestSentToggle(false);
        setInterviewToggle(false);
        setArchiveToggle(false);
    }
    // THIS ONE FOR REQUEST SENT HANDLER BUTTON 
    const requestSentHandler = () => {
        setRequestSentToggle(true);
        setArchiveToggle(false);
        setInterviewToggle(false);
        setSavedJobToggle(false);
    }
    // THIS ONE FOR INTERVIES HANDLER BUTTON 
    const interviewHandler=()=>{
        setInterviewToggle(true);
        setSavedJobToggle(false);
        setRequestSentToggle(false);
        setArchiveToggle(false);
    }
    // THIS ONE FOR ARCHIVED HANDLER BUTTON
    const archivedHandler=()=>{
        setArchiveToggle(true);
        setInterviewToggle(false);
        setSavedJobToggle(false);
        setRequestSentToggle(false);

    }
   


    return (
        <div className='  p-[20px] '>
            <h1 className=' flex justify-center   items-center text-[20px] font-semibold mb-[30px] '> My jobs</h1>
            <div className=' flex m-auto justify-center cursor-pointer  '>
                <div onClick={savedJobHandler} className=' myJobsButtonDesign'>
                    <button  >
                        Saved
                        <span className='myJobsNumberDesign'>{savedJob}</span>
                    </button>
                </div>
                <div  onClick={requestSentHandler} className=' myJobsButtonDesign'>
                    <button>
                        Request sent
                        <span className='myJobsNumberDesign'> {sentRequest} </span>
                    </button>
                </div>
                <div onClick={interviewHandler} className=' myJobsButtonDesign'>
                    <button  >
                        Interviews
                        <span className='myJobsNumberDesign'> {interviews} </span>
                    </button>
                </div>
                <div onClick={archivedHandler} className=' bg-slate-400 hover:bg-gray-500 myJobsButtonDesign'>
                    <button >
                        Archived
                        <span className='myJobsNumberDesign'> {archived} </span>
                    </button>
                </div>
            </div>
            <div>
            
            {/* THESE ARE FOR SHOWING STATIC MESSAGES AND SPECEFIC DATA */}
            {savedJobToggle? savedJob === "0" ? <MyjobStatic homeStateHandler={homeStateHandler} firstLineText='No jobs saved yet' secondLineText='Jobs you save appear here.' />: <Jobpost />: null}
            {requestSentToggle? sentRequest==="0" ? <MyjobStatic homeStateHandler={homeStateHandler} firstLineText='No request sent yet' secondLineText='Request you sent appear here.' />: <Jobpost />: null}
            {interviewToggle? interviews==="0" ? <MyjobStatic homeStateHandler={homeStateHandler} firstLineText='No interview yet' secondLineText='Your interview appear here.' />: <Jobpost />: null}
            {archiveToggle? archived==="0" ? <MyjobStatic homeStateHandler={homeStateHandler} firstLineText='Nothing yet' secondLineText='Your archived appear here ' />: <Jobpost />: null}
          
            
            </div>
        </div>
    );
}

export default MyJobs;
