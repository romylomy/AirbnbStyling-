import Star1 from './images/Star1.png';
import { useState } from 'react';

export default function Card({ stats, price, description, title, coverImg, openSpots }) {
  const cardStyle = {
    display: 'flex',
    float: 'left', // Float the Card component to the left
    margin: '0 20px 20px 0', // Add margin for spacing around the description text
    /* You can add additional flex properties here if needed */
  };

  let BadgeStyle;
  let style;
  
  if (openSpots === 0) {
      style = {
          backgroundColor: "rgb(177, 89, 89)",
          opacity: "80%",
      };
      BadgeStyle = 'Sold Out';
  } else {
      BadgeStyle = 'Online';
  }
  const [hover, setHover ] = useState(false)

  const style1 = {
    backgroundColor: hover ? "blue" : "transparent"
  }
  

  return (
        <div style ={style1}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className='Cards--Section'>
            
             {BadgeStyle && <div style = {style} className="BadgeStyle"> {BadgeStyle}</div>}
             <img
                src={coverImg}
                alt={coverImg}
                className="card--image"
             />
            <div className="card--stats">
                <p className='card-p'>{title}</p>
                <img src={Star1} alt="Star Icon" />
                <span>{stats.rating}</span>
                <span className='gray'>({stats.reviewCount})</span>
                <p><span className="bold"> from ${price}</span> / person</p>

               
            </div>

        </div>
       
  );
}
