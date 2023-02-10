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

/**
*  @function App In this function are called all the components and their data are displayed
*                Manage page loading
*                whereas the potential errors which may arise depend on their nature              
* */

function App() {
  const {userId} = useParams()
  const navigate = useNavigate()

  let {data, loading, error} = useFetch(userId);

    if (loading) return <h1>Loading...</h1>;

    if (error) {    
        // l'API ne fonctionne pas, aucune réponse
      if(error.code === 'ERR_NETWORK'){
        // dans ce cas, on positionne les données mockées
        data = MOCKED_DATA
      }
        // l'API fonctionne mais ne comprend pas ce qu'on lui envoie. exemple : id qui n'éxiste pas
      if(error.code === 'ERR_BAD_REQUEST'){
        // dans ce cas, on redirige vers un 404
        navigate('/')
        // navigate('/', { replace: true })
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
