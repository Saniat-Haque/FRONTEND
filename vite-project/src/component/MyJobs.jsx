import React from 'react';
import MyjobStatic from './MyjobStatic';

function MyJobs(props) {
    return (
        <div>
        <div className=' bg-slate-100 p-[20px] '>
            <h1 className=' flex justify-center   items-center text-[20px] font-semibold mb-[30px] '> My jobs</h1>
            <div className=' flex m-auto justify-center cursor-pointer  '>
                <div className=' myJobsButtonDesign'>
                <button>
                Saved
                        <span className='myJobsNumberDesign'>0</span>
                    </button>
                    
                </div>
                <div className=' myJobsButtonDesign'>
                <button>
                Request sent
                        <span className='myJobsNumberDesign'>0</span>
                    </button>
                    
                    
                </div>
                <div className=' myJobsButtonDesign'>
                    <button>Interviews
                        <span className='myJobsNumberDesign'>0</span>
                    </button>
                    
                </div>
                <div className=' myJobsButtonDesign'>
                    <button>
                        Archived
                        <span className='myJobsNumberDesign'>0</span>
                    </button>
                    
                </div>
            </div>

            <div>

            </div>
            
        </div>
        <MyjobStatic/>
        </div>
    );
}

export default MyJobs;