import React,{Component} from "react";
import NavBar from "./navBar";
import ImBox from "./ImBox";
import Box from "./Box";

class About extends Component {
    render(){
    return (
        <div className="about">
            <NavBar />
            <div >
                <ImBox />
                {/* <div id="VertiLine"></div> */}
                <Box />
                
            </div>
        </div>
    );
    }
}
export default About;
