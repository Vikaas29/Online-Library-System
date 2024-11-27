import { Link } from "react-router-dom"
export function Book(prop){

    
    return (<div className="bookBox">
        <img src={prop.data.cover_image} alt="" />
        <div>{prop.data.title}</div>
        <div>{prop.data.author}</div>
        <div>Rating: {prop.data.rating} *</div>
        <Link to={`/book/${prop.data.id}`}><button className="viewDetails">View Details</button></Link>
    </div>)
}