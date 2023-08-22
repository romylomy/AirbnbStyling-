import Star1 from './images/Star1.png';
import Athlete from './images/Athlete.png';

export default function Card({rating, stats, country, price}){
    return(
        <section>
            <img src={Athlete } 
                 alt="Katie"
                 className="card--image"/> 

            <div className="card--stats">
                <img src={Star1} />
                <span>{rating}</span>
                <span className='gray'>({stats})</span>
                <span className='gray'>{country}</span>
                
            </div>
            <p>life lessons with kat</p>
            <p><span className="bold"> from ${price}</span> / person</p>
        </section>
    )
}