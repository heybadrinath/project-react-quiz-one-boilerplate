import React, { Component } from 'react'

export default class QuizComponent  extends Component {
  render() {
    return (
      <div className='game'>
        <h1>Question</h1>
        <p>1 of 15</p>
        <p className='question'>Which is the only mammal that can jump?</p>

        <div className="options">
            <div className="option">Dog</div>
            <div className="option">Elephant</div>
            <div className="option">Goat</div>
            <div className="option">Lion</div>
        </div>

        <div className="btns">
            <button className='prev'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Quit</button>
        </div>





      </div>
    )
  }
}
