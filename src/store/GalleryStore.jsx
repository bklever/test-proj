import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class GalleryStore extends EventEmitter {
    constructor() {
        super();
        this.galleryItems = [{
            "id": 1,
            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFzSURBVDjLY/j//z8DPlxYWFgAxA9ANDZ5BiIMeASlH5BswPz58+uampo2kuUCkGYgPg/EQvgsweZk5rlz5zYSoxnDAKBmprq6umONjY1vsmdeamvd9Pzc1N2vv/Zse/k0a/6jZWGT7hWGTLhrEdR7hwOrAfPmzWtob29/XlRc9qdjw8P76fMeTU2c9WBi5LQH7UB6ftS0B9MDe+7k+XfeCvRpu6Xr1XJTEMPP2TMvlkzZ8fhn9JSb+ujO9e+6ZebbcSvMu/Wmm2fzDSv3hmuGsHh+BAptkJ9Llj3e2LDu2SVcfvZqucHm0XhD163+mplLzVVtjHgGar7asO75bUKB51R9Vdih4ooqRkprXPfsXsfm558JGQDCtqWXmDAEi5Y+PjNhx4v/QL8aE2MIhkD8zAcbJ+189d+z5UYOWQZ4t9xsnLjj5f/A3ltLyDIAGDXe7Zue/89b/OiZY8UVNpINAEaNUOWqp38qVj3+DwykQEIGAABS5b0Ghvs3EQAAAABJRU5ErkJggg==",
            "title": "rhoncus aliquam lacus morbi quis tortor id"
        }, {
            "id": 2,
            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIhSURBVDjLY/j//z8DJZgsTV+9fAu+uHo8+GzvXECWAV+c3R//mTn9/ydLu4eka3ZyY/ts63T3k4Xt+4/GlqS74JONY+9Hc5tdH4wsmAmGgWv9xQKX2nMPnapOF4A1WzsEfjSzefLB0FwUHoi/szPX/05P/f0rOWk9ugHONWefzNl44X/B/L3/o7LXnn1h4fitN6i22Tx7W5tpxqYHxmnrChh+p6X+/rd10/+fsbF/f0REmiE0n7F3rDz5wb7s6Bu3gt3Vz80db69zTd1mlr11tUnGxt89Cw/8N0ha9YDhZ2LC+p8xMb9/hEdc+h4Ucu+br//JFXFNi5zKjz20KztiDzIMGFgzP+iZboQZbpSypsAgaeUjvfilqIEI9C9bf8rk3Wd8kz59sHV+BQysa8DA+vNe1+RreV94S96UiE9pff7/I1scPnlW6NWgBCLQvxKOVaeO2ZcfW2pbcogTGFgGwMD6+2/alP+rYhz+Na5O/L/lytT/F57t+t+/O+t/eL/uf/NsyR4G17oLBUD/Pgf69w3Qv6XILnqvbbT+nZre74RWlz8bL0/4v/HapP8g0LMn9X//nnSQAd8ZnKrPPJi85uJ/oH9f4opOn2rD/9uuzPmPDDZdmgoy4D+DQ8XxArvSww9sivYX4DLAMkf6e/eupP/tuxLAmtt3JiBcQEzqAypsCe7R+N+7KwVsM4gG8cFhQGwSBiruAOJPIGdD6Q6QOAAJO6JfeUJqowAAAABJRU5ErkJggg==",
            "title": "odio porttitor id consequat in consequat ut"
        }, {
            "id": 3,
            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACWSURBVCjPY/jPgB8y0ElB+YHyA8UTcg+kLYjfEP4Bm4ILxQa5Dqn/4xv+M/hdcHXAUFAc8J8hzSH+fzhQgauCjQJWN8Q7RPz3AyqwmWC0QfO/wgKJBWgKwh0C/rsCFRgBTVP4/59BMABNgZ+Dx3+bBghb4j8WK1wdHP4bQRUIYlNgs8DogOYGBaAPBB24DrA40Duo8UEA+kT4W+XS/8wAAAAASUVORK5CYII=",
            "title": "sit amet diam in magna bibendum imperdiet nullam orci pede"
        }];
    }
    getAll() {
        return this.galleryItems;
    }
    createGalleryItem({src = "http://wiseheartdesign.com/images/articles/default-avatar.png",title = "Default Title", id=Math.random()} = {}) {
        this.galleryItems.push(
            {
                id,
                src,
                title
            }
        );
        this.emit("change");
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createGalleryItem(action);
            }
        }
        console.log("action got",action);
    }
}
const galleryStore = new GalleryStore;
dispatcher.register(galleryStore.handleActions.bind(galleryStore));
//dispatcher.register(galleryStore.handleActions.bind(galleryStore));
window.dispatcher = dispatcher;
export default galleryStore;