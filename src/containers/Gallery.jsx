import React from "react";

import GalleryItem from "../components/GalleryItem";
import GalleryStore from "../store/GalleryStore";
import * as GalleryAction from "../actions/GalleryActions";

export default class Gallery extends React.Component {
    constructor() {
        super();
        //console.log(GalleryStore.getAll());
        this.getGalleryItems = this.getGalleryItems.bind(this);
        this.state = {
            galleryItems: GalleryStore.getAll(),
            loading: false
        };
    }

    componentWillMount() {
        GalleryStore.on("change", this.getGalleryItems);
    }

    componentWillUnmount() {
        GalleryStore.removeListener("change",this.getGalleryItems);
    }

    createGalleryItem(evt) {
        GalleryAction.createGalleryItem(Date.now().toString());
    }

    getGalleryItems() {
        this.setState({
            galleryItems: GalleryStore.getAll()
        })
    }

    reloadGallery(evt) {
        GalleryAction.reloadGallery();
    }

    render() {
        const { galleryItems } = this.state;
        const Items = galleryItems.map((gI) => <GalleryItem key={gI.id} src={gI.src} title={gI.title} />);
        //console.log(this.props);
        return (            
            <div>                
                <h2>Gallery</h2>                
                <div class="gallery">{Items}</div>
                <button onClick={this.createGalleryItem.bind(this)}>Create!</button>
                
            </div>
        );
    }
}