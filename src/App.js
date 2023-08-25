import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import Header from "./components/Header";

export default function App (){

  const AthleteCards = data.map((athlete) => 
    <Card {...athlete} /> 
  )
  
    return(
        <div>
            <Navbar/>
            <div className="hero-container"> 
               <Hero/>
            </div>
         
            
            <div className="cards-list">
               <h1>Courses</h1>
                {AthleteCards}
            </div> 
            <Header/>

        </div>
     
    )
}