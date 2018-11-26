import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="left_item">
                    <img src="../assets/images/guolin.png"></img>
                    <span className="name">Guo Lin</span>
                    <span className="intro"></span>
                    <div className="icons"></div>
                    <span className="about_btn">About</span>
                </div>
            </div>
        );
    }
}

export default App;