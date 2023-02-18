import {useNavigate, useParams } from 'react-router-dom';
import useFetch from "./useFetch";
import { MOCKED_DATA } from "./datas/mockedData.js";
import  './utils/App.css';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import Activity from "./components/Activity";
import Score from "./components/Score";
import Sessions from './components/Sessions';
import Performance from './components/Performance';
import { config } from './config'

/**
*  @function App In this function are called all the components and their data are displayed
*                Manage page loading
*                whereas the potential errors which may arise depend on their nature    
*   @return {JSX.Element}          
* */

function App() {
  const {userId} = useParams()// gets the user id set in the url(ref. configuration of the router in index.js)
  const navigate = useNavigate()

  let {data, loading, error} = useFetch(userId);

    // config.API_OK is a switch to use directly mocked data or to consume API
    if(config.API_OK === false) {
      console.log("switch off API")
      data = MOCKED_DATA
    // Use of API
    }else{
      console.log("switch on API")
      if (loading) return <h1>Loading...</h1>;
      if (error) {    
        // API not working, no response
        if(error.code === 'ERR_NETWORK'){
          // in this case, we position the mocked data
          data = MOCKED_DATA
        }
        // the API works but does not understand what is being sent to it. example: id that does not exist
        if(error.code === 'ERR_BAD_REQUEST'){
          // in this case, we redirect to a 404
          navigate('/')
        }
      }   
    }

  return (    
    <div className="container-App">
      <Header />
      <NavLeft />
      <NavRight data={data.user.keyData} />

      <div className='container-graphique'>

        <h2 className='User-name'>Bonjour <span id='user-name-styled'>{data.user.userInfos.firstName}</span></h2>
        <h3 className='User-name-salutations'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        <div className='container-activity'>
          <Activity data={data.activity}/>
        </div>
        <div className='cont-graph-sessions-score-performance'>
          <div className='container-sessions' style={{backgroundColor:'#FF0000', borderRadius:'5px'}}>
            <Sessions data={data.sessions}/>
          </div>
          <div className='container-performance' style={{backgroundColor:'#000000', borderRadius:'5px'}}>
            <Performance data={data.performance}/>
          </div>
          <div className='container-score'>
            <Score data={data.user}/>
          </div>
        </div>
      </div>  
    </div>
  );

}
export default App;
