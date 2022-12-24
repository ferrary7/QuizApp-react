import React, { Component } from 'react';
import "./QuizComponent.css"

export default class QuizComponent extends Component {
  render() {
    return (
        <div className="question">
            <h1>Question</h1>
            <div>
              <span>1 of 15</span>
              <h3>Which is the only mammal that can jump?</h3>
            </div>

            <div className="container">
              <p className="option">Dog</p>
              <p className="option">Goat</p>
            </div>
  
            <div className="container">
              <p className="option">Elephant</p>
              <p className="option">Lion</p>
            </div>
  
            <div className="buttonsBox">
              <button className="previous">Previous</button>
              <button className="next">Next</button>
              <button className="quit">Quit</button>
            </div>
        </div>
    )
  }
}
