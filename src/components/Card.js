import Star1 from './images/Star1.png';
import Athlete from './images/Athlete.png';

export default function Card(){
    return(
        <section>
            <img src={Athlete } 
                 alt="Katie"
                 className="card--image"/> 

            <div className="card--stats">
                <img src={Star1} />
                <span>5.0</span>
                <span className='gray'>(6)</span>
                <span className='gray'>USA</span>
                
            </div>
            <p>life lessons with kat</p>
            <p><span className="bold">from $136</span> / person</p>
        </section>
    )
}