import React from "react";
import {
  Link
} from 'react-router-dom';

export default class GalleryItem extends React.Component {
    
    
    render() {
        return (
            <div>
            <img src={this.props.src} alt={this.props.title} />
            <input type="button" value="More info"/>    
            </div>
        );
    }
}