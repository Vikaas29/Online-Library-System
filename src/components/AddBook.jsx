import { useState } from "react"
import {Navigation} from "./Navigation.jsx"
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function AddBook(){

    const[author,setAuthor]=useState("");
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[genre,setGenre]=useState("");
    const[rating,setRating]=useState("");
    const[link,setLink]=useState("");
    let books=useSelector((store)=>store.books.items);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // console.log(books)

    function handleAdd(){
        

        if(author==""||title==""||rating==""||description==""||genre==""||link==""||!(link.includes("https://"))){
            alert("INVALID ENTRIES");
        }
        else{
            let n = books.length;
            
            dispatch(addBook({
                "id":n+1,
                "title": title,
                "author": author,
                "genre": genre,
                "description": description,
                "rating": rating,
                "cover_image":link,
            }))
            return 0;
        }
        
    }
    function changeScreen(){
        navigate("/browse");
    }

    return (<>

    <Navigation/>

    <div className="addBookPage">
    <h1>Add Book</h1>
    
    <form action="" className="form">
        {/* <label htmlFor="bookName">Book Name : </label> */}
        <input id="bookName" type="text" className="formInput" placeholder="Book Name" onChange={(e)=>{setTitle(e.target.value)}}/>

        {/* <label htmlFor="authorName">Author Name : </label> */}
        <input id="authorName" type="text" className="formInput" placeholder="Author Name" onChange={(e)=>{setAuthor(e.target.value)}}/>

        {/* <label htmlFor="genreName">Genre : </label> */}
        <input id="genreName" type="text" className="formInput" placeholder="Genre" onChange={(e)=>{setGenre(e.target.value)}}/>

        {/* <label htmlFor="description">Description : </label> */}
        <textarea name="description" id="description" className="formInput" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}></textarea>

        {/* <label htmlFor="rating">Rating : </label> */}

        <input id="rating" type="number" min="0" max="5"  className="formInput" placeholder="Rating" onChange={(e)=>{setRating(e.target.value)}}/>

        <input id="link" type="url" className="formInput" placeholder="Cover Image Link (https://)" onChange={(e)=>{setLink(e.target.value)}}/>

       <button type="submit" onClick={(e)=>{ e.preventDefault(); let a=handleAdd(); if(a==0)changeScreen()}}>Submit</button>
    </form>
    </div>
    
    </>)
}