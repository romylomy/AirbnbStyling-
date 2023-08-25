import Group77 from './images/Group77.png';



export default function Hero () {
    return(
        <section> 
            <img className ="hero--photo" src={Group77} /> 
            <span className='text-header-container'>
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            
            </span> 
        </section>
    )
}