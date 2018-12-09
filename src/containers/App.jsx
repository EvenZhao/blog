import { Router, Route, } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import React, { Component } from 'react';
import globalCss from '../assets/css/global.css';
import mainCss from '../assets/css/mian.css';
import FontAwesomeIcon from 'react-fontawesome';
import { hot } from 'react-hot-loader';
import Guo_Lin from '../assets/images/guolin.jpg';
import Index from '../routes/Index.jsx';
import Content from '../routes/Content.jsx';

const history = createHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
				<div className="left_item">
					<img src={Guo_Lin} />
					<h2 className="name">Guo Lin</h2>
                    <span className="intro">PM ⇄ Developer. Live in Beijing</span>
					<div className="icons">
                        <a href="http://instagram.com/guolin"></a>
                        <a href="http://pinterest.com/guolin"></a>
                        <a href="http://github.com/guolin"></a>
                        <a href="http://facebook.com/guolinnn"></a>
                        <a href="http://twitter.com/MrGuo"></a>
                        <a href="http://linkedin.com/in/mrguolin"></a>
                        <a href="/atom.xml"></a>
                    </div>
					<h4 className="about_btn">About</h4>
				</div>
                <div className="right_item">
                    <Router history={ history }>
                        <div>
                            <Route exact path="/" component={ Index } />
                            <Route exact path="/content" component={ Content } />
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}

export default hot(module)(App);
