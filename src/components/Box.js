import { useState } from "react";

export default function Box (props){

    const[On, setOn] = useState(props.on)

    const style1 = {
        backgroundColor: On ? "#222222" : "blue"
    }
   

    function toggleOn(){
        setOn(prevState =>  !prevState.on)
      };
    
   
    
    return (
        <div onClick={toggleOn} style={style1} className='Cards--Section'>
     
           
        </div>
    )
}