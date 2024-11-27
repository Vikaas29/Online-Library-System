import { Link } from "react-router-dom"
export function Navigation(){
    return(<>
    <nav className="nav">
        <div className="twoButtons">
            <Link to="/"><button>HOME</button></Link>
            <Link to="/browse"><button>BROWSE</button></Link>
            </div>
            <div className="addButton">
            <Link to="/addbook"><button >ADD BOOK</button></Link>
                </div>
                </nav>
    </>)
}