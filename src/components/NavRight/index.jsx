import '../../utils/NavRight.css';
import KeyData from '../KeyData';
import propTypes from 'prop-types';

/**
*  @function  NavRight displays values : Calories, Proteines, Glucides, Lipides in the right menu content display    
*  @param    {object} data 
*  @return   {JSX.Element}            
* */   

function NavRight({data}){

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

NavRight.propTypes = {
    data : propTypes.object,    
}
export default NavRight