import React from "react";


export default class Login extends React.Component {
    render() {
        console.log(this.props);
        return (            
            <div>                
                <h2>Login</h2>
                <input type="text"/>
            </div>
        );
    }
}