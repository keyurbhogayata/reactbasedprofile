import React,{Component} from "react";
import NavBar from "./navBar";

class Home extends Component {
    render(){
    return (
        <div className="home">
            <NavBar />
            <h1 id = "heading1"> Welcome to my profile !!</h1> 
            <a href= "/about">
                <h2 id="heading2">About </h2>
            </a>
        </div>
    );
    }
}
export default Home;