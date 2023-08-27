import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import Header from "./components/Header";
import Box from "./components/Box";
import boxes from "./components/boxes";
import { useState } from "react";


export default function App (props){

  const AthleteCards = data.map((athlete) => 
    <Card {...athlete} /> 
  )
  const [squares, setSquares ] = useState(boxes)


  const squareElements = squares.map(square => (
    <Box {...square}/>
  ))


  
  
  
    return(
        <div>
            <Navbar/>
            <Hero/>
          <div className= "hero--background">
              <h1 className="course-txt">Courses</h1>
              <div className="cards-list">
                {AthleteCards}
              </div> 

          </div>
            
          <Header/>
          <div>
            {squareElements}
          </div>
          
        </div>
     
    )
}