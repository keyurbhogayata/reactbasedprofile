import React,{Component} from "react";

const ContDetail = {

    Email : "bhogayata.keyur@gmail.com",
    Mobile : "+91 7874248347",
    Instagram : "keyur_5999",
    Linkdin : "/keyur-bhogayata-295a22183/",
    Github : "keyurbhogayata",
    Address : "Dwarka"
    // LoremIpsum :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ex id risus condimentum, mattis fringilla dolor pretium. Morbi auctor, nulla vitae ornare facilisis"
}

class Box extends Component {
    render(){
    return (
        <div className="ContBox">
            <div className="ContInBox">
                <h1 id="head1C"> Contact Me </h1>
                <h2 id="head2C"> Email : {ContDetail.Email} </h2>
                <h2 id="head3C"> Mobile No. : {ContDetail.Mobile} </h2>
                <a href="https://github.com/keyurbhogayata"><h2 id="head4C"> Github : {ContDetail.Github} </h2></a>
                <a href="https://www.linkedin.com/in/keyur-bhogayata-295a22183/"><h2 id="head5C"> Linkdin : {ContDetail.Linkdin} </h2></a>
                <a href="https://www.instagram.com/keyur_5999/"><h2 id="head6C"> Instagram : {ContDetail.Instagram} </h2></a>
                <h2 id="head7C"> Adress : {ContDetail.Address} </h2>
            </div>
        </div>
    );
    }
}
export default Box;
