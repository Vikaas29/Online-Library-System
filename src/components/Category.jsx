import { useDispatch } from "react-redux";
import {changeFilter} from "../utils/filterSlice.js"
export function Category(){

    const dispatch=useDispatch();
    function handleChange(item){
        dispatch(changeFilter(item));
    }
    return(<div className="category">
    <h2>CHOOSE YOUR MOOD</h2>
    <p>also visit "/book/category/(genreName)"</p>

    <div className="allCategories">
        <div className="popular categoryButton" onClick={()=>{handleChange("popular")}}>Popular</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Fiction")}}> Fiction</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Non-Fiction")}}> Non-Fiction</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Sci-Fi")}}> Sci-Fi</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Romance")}}> Romance</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Fantasy")}}> Fantasy</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Biography")}}> Biography</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Biography")}}> Mystery</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Mystery")}}> Historical</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Horror")}}> Horror</div>
        <div className="subCategories categoryButton" onClick={()=>{handleChange("Self-Help")}}> Self-Help</div>
    </div>
    </div>)
}