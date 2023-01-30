import '../../utils/NavRight.css'
import KeyData from '../KeyData'

function NavRight({data}){
    console.log('keyyyyyyyyyyyyysdata')
    console.log(data)
    return(
        <div id="container-nav-right">
            <nav className='nav-right'>
                <KeyData name={'Calories'} value={data.calorieCount}/>
                <KeyData name={'Proteines'} value={data.proteinCount}/>
                <KeyData name={'Glucides'} value={data.carbohydrateCount}/>
                <KeyData name={'Lipides'} value={data.lipidCount}/>
            </nav>
        </div>
    )

}
export default NavRight