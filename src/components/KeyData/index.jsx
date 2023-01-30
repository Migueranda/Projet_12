import CalorieIcon from '../../assets/calories-icon.png'
import ProteinIcon from '../../assets/protein-icon.png'
import CarbsIcon from '../../assets/carbs-icon.png'
import fatIcon from '../../assets/fat-icon.png'
import '../../utils/KeyData.css'


const icons = [{name: 'Calories', icon: CalorieIcon, unit: 'Kcal'},
               {name: 'Proteines', icon: ProteinIcon, unit: 'g'},
               {name: 'Glucides', icon: CarbsIcon, unit: 'g'},
               {name: 'Lipides', icon: fatIcon, unit: 'g'},
                ]   

function KeyData({name, value}){
    // en fonction de la Props name, nous filtrons pour obtenir le type d'icone à afficher et l'unité à afficher
    let icon = icons.filter(function(icon){
        return icon.name === name;
    })

    return(
        <div className='container-key-data'>
            <img src={icon[0].icon} alt="calories icon" />
            <div className='container-info'>
                <p className='unit'>{value}{icon[0].unit}</p>
                <p className='name'>{name}</p>
            </div>
        </div>
    )
}
export default KeyData