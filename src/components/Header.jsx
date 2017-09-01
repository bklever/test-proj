import React from "react";

export default class Header extends React.Component {
    
    changeTitle(evt){
        const title = evt.target.value;
        console.log(title);
        this.props.changeTitle(title);
    }
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <input onChange={this.changeTitle.bind(this)} />
            </div>
        );
    }
}