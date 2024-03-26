import Navbar from './component/Navbar';
import Searchbar from './component/Searchbar';
import Filter from './component/Filter';
import Jobpost from './component/Jobpost';
import Line from './component/Line';
import { useState } from 'react';
import SignIn from './component/SignIn';
import MyJobs from './component/MyJobs';
import FormForRefer from './component/FormForRefer';
import Home from './Home';
import MyProfile from './component/MyProfile';





function App() {
  // THESE ARE FOR FILTER SECTION DATA
  const [dateOptions] = useState(["Last 24 hours", "Last 3 days", "Last 7 days", "Last 14 days"]);
  const [remoteOptions] = useState([ "Hybrid work","Remote"]);
  const [areaOptions] = useState(["Within 5 miles","Winthin 10 miles","Winthin 15 miles","Winthin 20 miles","Winthin 30 miles","Winthin 40 miles","Winthin 50 miles","Winthin 100 miles",])
  const [payOptions] = useState(["$15.00+/hour", "$17.00+/hour","$20.00+/hour","$25.00+/hour","$30.00+/hour","$35.00+/hour","$40.00+/hour"]);
  const [jobtypeOptions] = useState(["Part-time","Full-time","Contract","Internship","Temporary"]);
  const [shiftOptions] = useState(["Weekends as needed","Monday to friday","Day shift","Holidays","8 hour shift","Night shift","Overtime","Overnight shift","On Call"]);
  const [postedbyOptions] = useState(["Employer","Staffing agency"]);
  const [experianceOptions] = useState(["Entry Level","Mid Level","Senior Level","No experience required"]);
  
  // THIS IS FOR ALL HOME PAGE RENDERING 
  const [searchBarState,setSearchBarState]=useState(true);

  // THIS IS FOR MY JOB PAGE RENDERIGN
  const [myJobState,setMyJobState] = useState(false);

  // THIS IS FOR CLOSE POST JOB PAGE
  const [postJob,setPostJob]=useState(false);

  // THIS IS FOR MY PROFILE PAGE RENDER
  const [myProfilePage,setMyProfilePage]=useState(false);


  // THIS IS FOR RENDER MY PROFILE PAGE
  const myProfilePageHandler=()=>{
    setMyJobState(false);
    setSearchBarState(false);
    setMyProfilePage(true);

  }
  // THIS IS FOR DISABLE MY PROFILE PAGE 
  const myProfilePageHandlerDisable=()=>{
    setMyProfilePage(false);
    setSearchBarState(true);
  }
  

  // THIS IS RENDER POST A REFERENCE PAGE RENDER 
  const postJobHandler=()=>{
    setPostJob(true);
  }
  // THIS IS FOR CLOSE REFER PAGE 
  const postJobClose=()=>{
    setPostJob(false);
  }
  // THIS IS FOR HIDE ALL HOME PAGE COMPONENT
  const searchBarHandler=()=>{
    setSearchBarState(false);

  }
  // THIS IS FOR HOME PAGE ALL STATE WILL BE FALSE ONLY HOME PAGE CONTENT WILL BE TRUE 
  const homeStateHandler=()=>{
    setMyJobState(false);
    setSearchBarState(true);
    setMyProfilePage(false);
    
  }

  // THIS IS FOR MY JOB PAGE RENDERING 
  const myJobHandler=()=>{
    setMyProfilePage(false);
    setMyJobState(true)
  }
  // THESE ARE FOR TESTING PURPOSE
  console.log('this is searchbar main state:' + searchBarState);
  console.log('this is Myjob page:'+ myJobState);
  console.log('this is Register box======' + postJob);
  console.log('this is my profile page----' + myProfilePage);

  return (
    <>
        {/* THIS IS RENDER NAVBAR  */}
        <Navbar 
        closeSearchBar={searchBarHandler}
         myJobPage={myJobHandler}
           postJobHandler={postJobHandler}
            homeStateHandler={homeStateHandler}
            myProfilePageHandler={myProfilePageHandler}
            
             />
        
        {/* THIS IS RENDER POST JOB REGISTER RORM */}
        {postJob && <FormForRefer postJobClose={postJobClose} />}

        {/* THIS IS FOR HIDE SEARCHBAR  */}
        {searchBarState && <Searchbar />  }  

        {/* THESE ARE RENDER FILTER DATA */}
        {searchBarState &&  
        <div className='flex items-center flex-wrap justify-center  py-5 max-w-[1000px] mx-auto'>
        <Filter buttonText="Date posted" options={dateOptions} />
        <Filter buttonText="Remote" options={remoteOptions} />
        <Filter buttonText="Area radius" options={areaOptions} />
        <Filter buttonText="Pay" options={payOptions} />
        <Filter buttonText="Job type" options={jobtypeOptions} />
        <Filter buttonText="Shift and schedule" options={shiftOptions} />
        
        <Filter buttonText="Posted by" options={postedbyOptions} />
        <Filter buttonText="Experience Level" options={experianceOptions} />
      </div>}


        {/* THIS IS RENDER HOME PAGE LINE AND SORT BY SECTION UNDER FILTER SECTION  */}
        {searchBarState && <Line/>}

        {/* THIS IS RENDER POSTED JOB  */}
        {searchBarState && <Jobpost/> }

        {/* THIS IS RENDER MY JOB PAGE */}
        {myJobState ? <MyJobs homeStateHandler={homeStateHandler} /> : null}
        
        {/* THIS IS RENDER MY MAIN PROFILE */}
        {myProfilePage && <MyProfile myProfilePageHandlerDisable={myProfilePageHandlerDisable}/> }
        
            
    </>
  );
}

export default App;
