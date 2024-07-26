import React, {Component} from "react";
export default class Login extends Component{
    render(){
        return(
           <div className="login-container">
                <div className="login">
                    <h2 className="uk-modal-title uk-text-center">authorization</h2>
                    <div className="uk-modal-top uk-text-lead">Password</div>
                    <input type="password" name="" id="" className="uk-input uk-marin-top" placeholder="Passord"></input>
                    <button className="uk-button uk-button-primary uk-margin-top" type="button">Enter</button>
                </div>
           </div> 
        )
    }
}