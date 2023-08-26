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
            <Hero/>
          <div className= "hero--background">
              <div className="cards-list">
                <h1>Courses</h1>
                {AthleteCards}
              </div> 

          </div>
            
            <Header/>

        </div>
     
    )
}