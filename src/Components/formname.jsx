/* 
    Forms are an integral part of any modern web app
    two types of forms are :
        -Uncontrolled :- Traditional forms , In uncontrolled forms, the form elements are managed by the DOM itself. 
                        React does not intervene directly, and the values of input fields are accessed via ref instead 
                        of being stored in the component state.

        -Controlled :-In controlled forms, React takes full control of the form state. The state of each input field 
                        is stored in the component's state using useState, and any changes to the inputs are handled 
                        via event listeners.

    js bind() method : With this bind() method an object can borrow a method from an other class making a copy of it 

    preventDefault() prevents the data inform to be directly submitted to the server it first displays the data & checks
    it with validations and we can just give an alert to check the data
*/
import React,{ Component } from 'react';

export class Formname extends Component{
    constructor(props){
        super(props);

        this.state = {uname : '',pwd : '',email :''};
    
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlepwdChange = this.handlepwdChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUnameChange(event){
        this.setState({uname : event.target.value});
    }
    handlepwdChange(event){
        this.setState({pwd : event.target.value});
    }
    handleEmailChange(event){
        this.setState({email : event.target.value});
    }
    handleSubmit(event){
        alert('Username :' + this.state.uname + 'Password : '+ this.state.pwd + 'Email' + this.state.email);
    
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:  </label>
                    <input type="text" value={this.state.uname} onChange={this.handleUnameChange}/><br />

                    <label>Password:  </label>
                    <input type="password" value={this.state.pwd} onChange={this.handlepwdChange}/><br />

                    <label>Email:  </label>
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange}/><br />

                    <input type="submit" value="Submit" />
                </form>
                <br />
            </div>
        );
    }
    
}
