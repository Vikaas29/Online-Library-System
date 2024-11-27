import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { Navigation } from "./Navigation";

export function FullBookDetailPage(){

    let books=useSelector((store)=>store.books.items);
    const params=useParams();
    const a=params.id;
    let n=books.length;
    let b=books[a-1];
    return(<>
    <Navigation/>
    <div className="container">
       
    <div className="FullBookDetailPage">
        <img src={b.cover_image} alt="" />
        <div>Book ID : {b.id}</div>
        <div>Title : {b.title}</div>
        <div>Author : {b.author}</div>
        <div>Genre : {b.genre}</div>
        <div>Description : {b.description}</div>
        <div>Rating : {b.rating}</div>
    </div>
    </div></>)
}