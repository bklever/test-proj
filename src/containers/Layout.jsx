import React from "react";
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from "../components/Header.jsx";
import Home from "../containers/Home.jsx";
import Gallery from "../containers/Gallery.jsx";
import Login from "../containers/Login.jsx";
import Footer from "../components/Footer.jsx";


export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title:"Loading"};
    }

    changeTitle(title) {
        this.setState({title});
    }
    render() {
        return (
            <Router>
            <div>                
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />    
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/gallery" component={Gallery}/>
                <Footer title={this.state.title} />
            </div>
            </Router>
        );
    }
}