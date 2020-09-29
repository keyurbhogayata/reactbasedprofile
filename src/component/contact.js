import React,{Component} from "react";
import NavBar from "./navBar";
import ContactBox from "./ContactBox";

class Contact extends Component {
    render(){
    return (
        <div className="contact">
            <NavBar />
            <ContactBox />
        </div>
    );
    }
}
export default Contact;
