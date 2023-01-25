import { useState, useEffect} from 'react';
import axios from "axios";

function WelcomeMesssage(){  
   
  const [error, setError] = useState(null);
  const [item, setItem] = useState(false);
  const [loading, setLoading] = useState([]);
  

    useEffect(() => { 
      
      setLoading(true);
        
      axios.get("http://localhost:3000/user/18/performance").then((response) => {
        setItem(response.data);
      })
      .catch((err) => {
          setError(err);
      })
      .finally(() => {
        setLoading(false)
      });     

    }, [])

    if (loading) return <h1>Loading...</h1>;
    if (error) console.log(error);
    
    console.log("item")
    console.log(item)
    console.log(item.data.userId)
    // item.data.kind.forEach(element => {
    //   console.log(element)
    // });

    const kind = []
    for (let i in item.data.kind) {
      kind.push(item.data.kind[i]);
    }

  //  Conversion des objets en tableau
    // const dataValue = []

    // for(let i in  item.data.data){
    //   dataValue.push(item.data.data[i])
    // }
    console.log(item.data.data)


    
    return(
      <div>

        <h1>hola</h1>
          <h1>{item.data.userId}</h1>          
          <ul>
            {kind.map(ele => (
              <li>{ele}</li>
            ))} 
          </ul>

          <div>
            <ul>
              {item.data.data.map(elem => (
                <li>{elem.value} {elem.kind}</li>
              ))}
            </ul>
          </div>  
      </div>


    )
    //
    // fetch(`http://localhost:3000/user/18/performance`)
    // .then((response) => {
    //     return response.json()

    // })
    // .then((result) =>{
    //     console.log(result)
    // })
   
  
}
export default WelcomeMesssage
// ("http://localhost:3000/user/18/performance") 