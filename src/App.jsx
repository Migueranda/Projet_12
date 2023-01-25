
// import { Component } from 'react';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import useFetch from "./useFetch"
import { MOCKED_DATA } from "./datas/mockedData.js"
import Activity from "./components/Activity"
import Score from "./components/Score"
import Sessions from './components/Sessions';
import Performance from './components/Performance';
import  './utils/App.css'

function App() {
  // const {data, loading, error} = useFetch("http://localhost:3000/user/18"); // id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
  // const {data, loading, error} = useFetch("http://localhost:3000/user/18/activity"); // activity day by day with kilograms and calories
  // const {data, loading, error} = useFetch("http://localhost:3000/user/18//average-sessions"); // average sessions of a user per day. The week starts on Monday.
  // const {data, loading, error} = useFetch("http://localhost:3000/user/18/performance"); // user's performance (energy, endurance, etc.). (radard graph)
 
  let {data, loading, error} = useFetch();
  
  
  if (loading) return <h1>Loading...</h1>;
  if (error) {
    data = MOCKED_DATA
    console.log("-- error state --");
    console.log(error);
    }
  
  return (
    <div className="container-App">
      <Header />
      <NavLeft />
      <NavRight />
      <div className='container-graphique'>

        <div>
          <Activity data={data.activity}/>
        </div>
       
        <div className='container-sessions' style={{backgroundColor:'#FF0000', borderRadius:'5px'}}>
          <Sessions data={data.sessions}/>
        </div>
        <div className='container-performance' style={{backgroundColor:'#000000', borderRadius:'5px'}}>
          <Performance data={data.performance}/>
        </div>
        <div className='container-score'>
          <Score data={data.user}/>
        </div>      
        
      {/* <h2> Bonjour {data.user.userInfos.firstName}</h2> */}
 
      </div>
    </div>
  );
}

export default App;
