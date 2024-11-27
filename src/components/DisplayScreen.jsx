import { useSelector } from "react-redux";
import { Book } from "./Book";

export function DisplayScreen(){

    let filter=useSelector((store)=>store.filter.items);
    // console.log(filter);
    

    let books=useSelector((store)=>store.books.items);
    // console.log(books)
    if(filter=="popular"){
        books=books.filter(e=>e.rating>=4)
    }
    else{
        books=books.filter(e=>e.genre==filter[0])
    }
   
    // console.log(books)

    return (<div className="displayScreen">
    <h2>{filter[0].toUpperCase()} BOOKS...</h2>
    <div className="booksDisplay">
        {books.map(e=><Book key={e.id} data={e}></Book>)}
    </div>
    
    </div>)
}