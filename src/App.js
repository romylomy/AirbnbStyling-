import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


export default function App (){

  const AthleteCards = data.map((athlete) => 
    <Card {...athlete} /> 
  )
  
    return(
        <div>
            <Navbar/>
            <Hero/>
            {AthleteCards}
        </div>
     
    )
}