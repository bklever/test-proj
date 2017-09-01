import React from "react";

import GalleryItem from "../components/GalleryItem";
import GalleryStore from "../store/GalleryStore";

export default class Gallery extends React.Component {
    constructor() {
        super();
        //console.log(GalleryStore.getAll());
        //this.getGalleryItems = this.getGalleryItems.bind(this);
        this.state = {
            galleryItems: GalleryStore.getAll()
        };
    }
    render() {
        const { galleryItems } = this.state;
        const Items = galleryItems.map((gI) => <GalleryItem key={gI.id} src={gI.src} />);
        //console.log(this.props);
        return (            
            <div>                
                <h2>Gallery</h2>
                foo
                <div class="gallery">{Items}</div>
            </div>
        );
    }
}