import { useState } from "react"
import ItemList from "./ItemList";

export default function Header(){ 
    const [count,setCount ] = useState(['thing 1', ' thing 2'])

    function AddItem() {
        setCount(prevCount => [...prevCount, `thing ${prevCount.length + 1}`])
      }
    
      function DeleteItem() {
        setCount(prevCount => {
          const newCount = [...prevCount];
          newCount.splice(prevCount.length - 1, 1);
          return newCount;
        });
      }
        


    return (
    <div className="header"> 
        <button onClick={AddItem}>Add Item</button>
        <button onClick={DeleteItem}>Delete Item </button>
        <ItemList list={count}/>  
    </div>
    )
} 

/* 
  <div className="header"> 
        <div>
            <h2>Header Component</h2>
        </div>
        <h4>React Course - Project 3</h4>
        <button onClick={AddItem}></button> 
        <h1>{count}</h1>         
    </div>

*/