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




function App() {
  
  const [dateOptions] = useState(["Last 24 hours", "Last 3 days", "Last 7 days", "Last 14 days"]);
  const [remoteOptions] = useState([ "Hybrid work","Remote"]);
  const [areaOptions] = useState(["Within 5 miles","Winthin 10 miles","Winthin 15 miles","Winthin 20 miles","Winthin 30 miles","Winthin 40 miles","Winthin 50 miles","Winthin 100 miles",])
  const [payOptions] = useState(["$15.00+/hour", "$17.00+/hour","$20.00+/hour","$25.00+/hour","$30.00+/hour","$35.00+/hour","$40.00+/hour"]);
  const [jobtypeOptions] = useState(["Part-time","Full-time","Contract","Internship","Temporary"]);
  const [shiftOptions] = useState(["Weekends as needed","Monday to friday","Day shift","Holidays","8 hour shift","Night shift","Overtime","Overnight shift","On Call"]);
  const [encouragedOption] = useState([ "Fair chance","No degree","Military encouraged","No high school diploma","Back to work"]);
  const [postedbyOptions] = useState(["Employer","Staffing agency"]);
  const [experianceOptions] = useState(["Entry Level","Mid Level","Senior Level","No experience required"]);
    
  const [searchBarState,setSearchBarState]=useState(true);

  const [myJobState,setMyJobState] = useState(false);
  const [postJob,setPostJob]=useState(false);

  

  const postJobHandler=()=>{
    setPostJob(true);
  }
  const postJobClose=()=>{
    setPostJob(false);
  }

  const searchBarHandler=()=>{
    setSearchBarState(false);

  }

  const homeStateHandler=()=>{
    setMyJobState(false);
    setSearchBarState(true);
    
  }


  const myJobHandler=()=>{
    setMyJobState(true)
  }
  console.log('this is searchbar main state:' + searchBarState);
  // console.log('this is Myjob page:'+ myJobState);
  // console.log('this is Register box======' + postJob);

  return (
    <>
        
            <Navbar closeSearchBar={searchBarHandler} myJobPage={myJobHandler}  postJobHandler={postJobHandler} homeStateHandler={homeStateHandler} />
        



        <Home/>
        
        {postJob && <FormForRefer postJobClose={postJobClose} />}

        {searchBarState && <Searchbar />  }  

        {searchBarState &&
          
          <div className='flex items-center flex-wrap justify-center  py-5 max-w-[1000px] mx-auto'>
        
        <Filter buttonText="Date posted" options={dateOptions} />
        <Filter buttonText="Remote" options={remoteOptions} />
        <Filter buttonText="Area radius" options={areaOptions} />
        <Filter buttonText="Pay" options={payOptions} />
        <Filter buttonText="Job type" options={jobtypeOptions} />
        <Filter buttonText="Shift and schedule" options={shiftOptions} />
        <Filter buttonText="Encouraged to apply" options={encouragedOption} />
        <Filter buttonText="Posted by" options={postedbyOptions} />
        <Filter buttonText="Experience Level" options={experianceOptions} />

      </div>
        }

        {searchBarState && <Line/>}
        {searchBarState && <Jobpost/> }
           
        {myJobState ? <MyJobs homeStateHandler={homeStateHandler} /> : null}
        
  
    </>
  );
}

export default App;
