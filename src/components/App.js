import React , {useEffect,useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = 'http://localhost:6001/listings'



function App() {
  const [ listings , setListings] = useState([])
  const [ filteredList, setfilteredList] = useState([])
  
  
  useEffect(()=>
  fetch(API)
  .then(resp => resp.json())
  .then(setListings) , [])
  
  function  handleDelete (deleteList){
    
    
    fetch(`http://localhost:6001/listings/${deleteList.id}`, {
      method: 'DELETE' ,
      headers: 
      {
        'Content-Type': 'application/json'
      }
      
    } ) 
    
    setListings(listings.filter((listing)=> listing === deleteList ? null : listing  ) )
    setfilteredList(filteredList.filter((list)=> list === deleteList ? null : list  ) )
  }
  
  const [search  , setSearch ] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    const filteredSearch = listings.filter((filterSearch) => filterSearch.description.toLowerCase().includes(search));
    setfilteredList(filteredSearch)
  }
 

  return (

    <div className="app">
      <Header handleSubmit={handleSubmit} search ={search} setSearch={setSearch} />
      <ListingsContainer listings={filteredList} setListings={setListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
