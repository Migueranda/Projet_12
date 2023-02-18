// https://www.youtube.com/watch?v=Vspeudp-M9k - How to Fetch Data in React With A Custom useFetch Hook
import { useState, useEffect} from 'react';
import axios from "axios";
// import { MOCKED_DATA } from "./datas/mockedData.js";

/**
*  @function useFetch this function manages APIs taking into account their respective endpoints 
*  using the useEffect and Axios hook (HTTP client).
*   @param {number} userId  
*   @return {JSX.Element}        
* */

function useFetch(userId){  

  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState([]);

// definition in a table of the different endpoints to consume of the API
  let endpoints = [
    `http://localhost:3000/user/${userId}`, // id, first name, last name and age of the user), current day score) and key data (calories, macronutrients, etc.).
    `http://localhost:3000/user/${userId}/activity`, // daily activity with kilograms and calories
    `http://localhost:3000/user/${userId}/average-sessions`,// average sessions of one user per day. The week starts on Monday.
    `http://localhost:3000/user/${userId}/performance` // user performance (energy, endurance, etc.). (radard chart)
  ];
  let response = {}
  let days = ['L', 'M', 'M', 'J', 'V', 'S', 'D', 'L', 'M', 'M', 'J', 'V', 'S', 'D', 'L', 'M', 'M', 'J', 'V', 'S', 'D']


  useEffect(() => { 
    
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(([{data: userId}, {data:activity}, {data: sessions}, {data: performance}] )=> {
        // user format
        response.user = userId.data
        // session format (Graph: Average session duration)
        response.sessions = sessions.data.sessions
        response.sessions.forEach(function(session, index){session.x = days[index]}) // value of the X axis ('L', 'M', 'M', ...)
        // performance format (graph: performance (radar))
        performance.data.data.forEach(function(perf){
            // add the category value directly in the data table ('cardio', 'energy', ...)
            perf.subject = performance.data.kind[perf.kind]
            // first uppercase letter
            perf.subject = perf.subject[0].toUpperCase() + perf.subject.slice(1); 
            }) 
        response.performance = performance.data.data
        // format activity (Graph: Daily activity)
        response.activity = activity.data
        response.activity.sessions.forEach(function(session, index){session.x = String(index + 1)}) // value of the X axis (1, 2, 3 ...)
        response.activity.legend = { kilogram: 'Poids (kg)', calories: 'Calories brûlées (kCal)'} // legend
        response.activity.title = 'Activité quotidienne' // title
  
        setData(response);
        
    }).catch((err) => {
            setError(err);  
    }).finally(() => {
          setLoading(false)
    });
  
   }, []);  

   
    return { data, error, loading }
}

export default useFetch