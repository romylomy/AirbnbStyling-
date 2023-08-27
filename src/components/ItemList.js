

export default function ItemList({list}){
    
    const item = list.map((thing, index) => <li key={index}>{thing}</li>)

    return(
        <div> 
            <ul> 
               {item}
            </ul>     
        </div>
       
    )
}