import { useState } from "react";
import { useSelector } from "react-redux";
import { Book } from "./Book";
import { Navigation } from "./Navigation";

export function BrowsePage(){

    let books=useSelector((store)=>store.books.items);
    const[filters,setFilters]=useState("title");
    const[input,setInput]=useState("");
    const[fbooks,setFbooks]=useState([...books]);
    // console.log(books)
    function handleSearch(){
        let b=books.filter((e)=>{return e[filters].toLowerCase().includes(input.toLowerCase())})
        setFbooks(b);
        
    }
    return(<><Navigation/>
    <div className="browsePage">

<div className="searchArea">
    <input type="text"  className="searchInput" onChange={(e)=>{ if(e.target.value=="")setFbooks([...books]) ;setInput(e.target.value); }}/>
    
    <button onClick={()=>{handleSearch()}}>Search</button>
    
    <input type="checkbox" id="author" name="one" value="author" onClick={()=>{if(filters=="title")setFilters("author") ;else setFilters("title"); }}/>Search by Author||Default:Title
    </div>
    <div className="browseBooksDisplay">
    {fbooks.map(e=><Book key={e.id} data={e}></Book>)}
    </div>

</div></>)
}