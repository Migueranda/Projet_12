import '../../utils/NavLeft.css';
import logoCyling from '../../assets/logo_cycling.png';
import logoFitness from '../../assets/logo_fitness.png';
import logoSwimming from '../../assets/logo_swimming.png';
import logoYoga from '../../assets/logo_yoga.png';

/**
*  @function NavLeft manages the left menu content display       
*  @return {JSX.Element}            
* */    

function NavLeft(){
    return(
        <div className="nav-left-conatiner">
            <nav className='nav-left'>
                <div className='block-logos'>
                    <img src={logoCyling} alt="Logo cycling" className='logos_nav-left'/>
                    <img src={logoFitness} alt=" Logo Fitness" className='logos_nav-left' />
                    <img src={logoSwimming} alt=" Logo Swimmming" className='logos_nav-left'/>
                    <img src={logoYoga} alt="Logo Yoga" className='logos_nav-left'/>
                </div>
                <h4 className='copyright'>Copyright, SportSee 2020</h4>
            </nav>
        </div>
    )
}

export default NavLeft