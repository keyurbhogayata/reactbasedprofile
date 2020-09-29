import React,{Component} from "react";

const detail = {
    Intro : "A Curious Human Being.",
    Name : "Keyur Bhogayata",
    Age : "21",
    Aim : "Become Great full stack developer.",
    Hobbies : "Photography, Music Listening ",
    LoremIpsum :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ex id risus condimentum, mattis fringilla dolor pretium. Morbi auctor, nulla vitae ornare facilisis"
}

class Box extends Component {
    render(){
    return (
        <div className="Box">
            <div className="InnBox">
                <h1 id="head1"> About Me </h1>
                <h2 id="head2"> {detail.Intro} </h2>
                <h3 id="head3"> Name : {detail.Name} </h3>
                <h3 id="head4"> Age : {detail.Age} </h3>
                <h3 id="head5"> Hobbies : {detail.Hobbies} </h3>
                <h3 id="head6"> Aim : {detail.Aim} </h3>
                <h3 id="head7"> Lorem Ipsum : {detail.LoremIpsum} </h3>
                <h3 id="head8"> Lorem Ipsum : {detail.LoremIpsum} </h3>
            </div>
        </div>
    );
    }
}
export default Box;
