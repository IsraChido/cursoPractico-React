import imagen from './assets/foto.jpg'
import './PresentationCard.css'

function PresentationCard(){
    let name = 'Israel';

    return(
        <div className="presentation-card">
            <img src={imagen} alt="fotografía personal" className='foto'/>
            <h1>
                Hola, soy { name } y estoy aprendiendo React
            </h1>
        </div>
    );
}

export default PresentationCard;