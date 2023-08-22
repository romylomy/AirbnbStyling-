import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CatCard from "./components/CatCard";
import CatList from "./CatList";


export default function App (){

    return(
        <div>
            <Navbar/>
            <Hero/>
            <Card
              rating ={5}
              stats={6}
              country= "USA"
              price={136} />
            {CatList.map((cat, index) => {
              console.log(cat)
              return(
                <CatCard key={index}  {...cat}/> 
              )
            })}
           
        </div>
     
    )
}