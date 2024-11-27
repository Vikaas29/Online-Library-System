
import {Navigation} from "./Navigation"
import { useSelector } from "react-redux";
import { Book } from "./Book";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CatergoryPage(){

    let nav=useNavigate();
    let params=useParams();
    let filter=params.fr;

    let books=useSelector((store)=>store.books.items);
    if(filter=="popular"){
        books=books.filter(e=>e.rating>=4)
    }
    else{
        books=books.filter(e=>e.genre.toLowerCase()==filter.toLocaleLowerCase())
    }
    if(books.length==0){
    useEffect(()=>{nav("/book/invalid")},[]);}


    return (<>
    <Navigation/>
    <div className="displayScreen displayScreenTwo">
        <h1>{filter.toUpperCase()} Books</h1>
    <div className="booksDisplay">
        {books.map(e=><Book key={e.id} data={e}></Book>)}
    </div>
    
    </div>
    </>)
}