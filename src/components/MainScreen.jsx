import { Category } from "./Category";
import { DisplayScreen } from "./DisplayScreen";

export function MainScreen(){
    return(<div className="mainScreen">
    <Category/>
    <DisplayScreen/>
    </div>)
}