import React from "react";
import ListingCard from "./ListingCard";



function ListingsContainer({listings  , setListings , handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing=>
        <ListingCard listing={listing} key={listing.id} setListings={setListings} handleDelete={handleDelete} />)}
        
      </ul>
    </main>
          );
}

export default ListingsContainer 
