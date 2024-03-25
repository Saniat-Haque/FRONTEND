import React, { useState } from 'react';
import MyjobStatic from './MyjobStatic';
import Jobpost from './Jobpost';
import SignIn from './SignIn';

function MyJobs(props) {

    const [savedJob, setSavedJob] = useState("1");
    const [sentRequest, setSentRequest] = useState("0");
    const [interviews, setInterviews] = useState("11");
    const [archived, setArchived] = useState("11");

    const [savedJobToggle, setSavedJobToggle] = useState(false); //true


    const [requestSentToggle, setRequestSentToggle] = useState(false);
    const [interviewToggle, setInterviewToggle] = useState(false); 
    const [archiveToggle, setArchiveToggle] = useState(false);
    

    

    const savedJobHandler = () => {
        setSavedJobToggle(true);

        setRequestSentToggle(false);
        setInterviewToggle(false);
        setArchiveToggle(false);
    }

    const requestSentHandler = () => {
        setRequestSentToggle(true);

        setArchiveToggle(false);
        setInterviewToggle(false);
        setSavedJobToggle(false);
    }
    const interviewHandler=()=>{
        setInterviewToggle(true);

        setSavedJobToggle(false);
        setRequestSentToggle(false);
        setArchiveToggle(false);


    }
    const archivedHandler=()=>{
        setArchiveToggle(true);

        setInterviewToggle(false);
        setSavedJobToggle(false);
        setRequestSentToggle(false);

    }
   console.log(savedJobToggle);


    return (
        <div className=' bg-slate-100 p-[20px] '>
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
                <div onClick={archivedHandler} className=' myJobsButtonDesign'>
                    <button >
                        Archived
                        <span className='myJobsNumberDesign'> {archived} </span>
                    </button>
                </div>
            </div>
            <div>
            
            
            

            {savedJob=== "0"   ? <MyjobStatic firstLineText='No jobs saved yet' secondLineText='Jobs you save appear here.' />:<Jobpost/>  }


            {requestSentToggle && <MyjobStatic firstLineText='No request sent yet' secondLineText='Request you sent appear here.' />}

            {interviewToggle && <MyjobStatic firstLineText='No interview yet' secondLineText='Your interview appear here.' />}

            {archiveToggle && <MyjobStatic firstLineText='Nothing yet' secondLineText='Your archived appear here ' />}

                
            </div>
        </div>
    );
}

export default MyJobs;
