import airbnb1 from './images/airbnb1.png';


export default function Navbar(){
    return(
        <nav>
            <img  className="nav--logo" src={airbnb1} alt="airbnb logo" />
        </nav>

    )
}