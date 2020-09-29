import React,{Component} from 'react';

class NavBar extends Component {
    render(){
    return (
        <div className="nav1">
            <ul id = "nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                &nbsp;
            </ul>
        </div>
    );
    }
}
export default NavBar;