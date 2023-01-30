import  '../../utils/Error.css'
import { Link} from 'react-router-dom'

function Error(){
    return(
        <div className="container-error">
            <h1>404</h1>
            <h3><span>Oups !</span>La page que vous demandez semble introuvable</h3>
            <div>
            <Link to='/' className='link-page-principale'>Retourner sur la page principale</Link>
            </div>
        </div>
    )
}
export default Error