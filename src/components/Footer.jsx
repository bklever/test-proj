import React from "react";
import {
  Link
} from 'react-router-dom';

export default class Footer extends React.Component {
    
    
    render() {
        return (
            <div>
            Footer: {this.props.title}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
            </div>
        );
    }
}