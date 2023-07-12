import React ,{useState , useEffect} from "react";

function ListingCard({listing , handleDelete}) {
  const { description , image , location} = listing;
  
  const [ isfavorite , setIsFavorite ] = useState(false)
  
  function handleClick (){
    setIsFavorite(!isfavorite)
  }
   
  
  
  
return (
    <li className="card">
      <div className={image}>
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isfavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => handleDelete(listing)}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
