// https://www.youtube.com/watch?v=Vspeudp-M9k - How to Fetch Data in React With A Custom useFetch Hook
import { useState, useEffect} from 'react';
import axios from "axios";

/**
*  @function useFetch this function manages APIs taking into account their respective endpoints 
*  using the useEffect and Axios hook (HTTP client).
*               
* */


function useFetch(userId){  
   
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState([]);

  //start
   
  let endpoints = [
    `http://localhost:3000/user/${userId}`, // id, user information first name, last name and age), the current day's score todayScore) and key data (calorie, macronutrient, etc.).
    `http://localhost:3000/user/${userId}/activity`, // activity day by day with kilograms and calories
    `http://localhost:3000/user/${userId}/average-sessions`,// average sessions of a user per day. The week starts on Monday.
    `http://localhost:3000/user/${userId}/performance` // user's performance (energy, endurance, etc.). (radard graph)
  ];

  let response = {}
  let days = ['L', 'M', 'M', 'J', 'V', 'S', 'D', 'L', 'M', 'M', 'J', 'V', 'S', 'D', 'L', 'M', 'M', 'J', 'V', 'S', 'D']

  useEffect(() => { 

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then(([{data: userId}, {data:activity}, {data: sessions}, {data: performance}] )=> {
        // -- Formatage données --------------- start --
        // format user
        response.user = userId.data
        // format sessions (Graph: Durée moyenne des sessions)
        response.sessions = sessions.data.sessions
        response.sessions.forEach(function(session, index){session.x = days[index]}) // valeur du X axis ('L', 'M', 'M', ...)
        // format performance (Graph: Performance (radar))
        performance.data.data.forEach(function(perf){
            // ajout de la valeur catégorie directement dans le tableau de données ('cardio', 'energy', ...)
            perf.subject = performance.data.kind[perf.kind]
            // first capital letter
            perf.subject = perf.subject[0].toUpperCase() + perf.subject.slice(1); 
            }) 
        response.performance = performance.data.data
        // format activity (Graph: Activité quotidienne)
        response.activity = activity.data
        response.activity.sessions.forEach(function(session, index){session.x = String(index + 1)}) // valeur du X axis (1, 2, 3 ...)
        response.activity.legend = { kilogram: 'Poids (kg)', calories: 'Calories brûlées (kCal)'} // légende
        response.activity.title = 'Activité quotidienne' // titre
        // -- Formatage données --------------- stop --
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