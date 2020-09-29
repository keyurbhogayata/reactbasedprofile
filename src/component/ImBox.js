import React,{Component} from "react";
import kimg from './keyur.jpg'; 

class Box extends Component {
    render(){
    return (
        <div className="ImBox">
            <img src={kimg} alt= "keyur" id = "imgBox"/>
        </div>
    );
    }
}
export default Box;
