import logoSportSee from '../../assets/logo_sportsee.png'
import '../../utils/Header.css'

function Header(){
    return(
        <div className='container'>
            <nav className='nav-conatainer'>
                <img src={logoSportSee} alt=" Logo sport see " className='logo-sportsee'/>
                <ul className='ul-container'>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </div>
    )


}
export default Header