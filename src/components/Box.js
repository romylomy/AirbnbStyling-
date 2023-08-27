import { useState } from "react";

export default function Box ({ on, Toggle}){

    const style1 = {
        backgroundColor: on ? "#222222" : "blue"
    }
   
   
    
    return (
        <div onClick={Toggle} style={style1} className='Cards--Section'>
     
           
        </div>
    )
}