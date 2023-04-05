import React from 'react'


// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}

export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  constructor() {
    super();
    this.initialState = {
      message: '',
      email: '',
      steps: 0,
      index: 4,
    }
    this.state = this.initialState;
  }

  getXY = () => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  reset = () => {
    // Use this helper to reset all states to their initial values.
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  move = (evt) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  onChange = (evt) => {
    // You will need this to update the value of the input.
    this.setState({
      ...this.state,
      email: evt.target.value
    })
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  }

  onUp = (evt) => {
    this.setState({
      ...this.state,
      index: this.state.index-3
    })
  }

  onDown = (evt) => {
    this.setState({
      ...this.state,
      index: this.state.index+3
    })
  }

  onRight = (evt) => {
    this.setState({
      ...this.state,
      index: this.state.index+1
    })
  }

  onLeft = (evt) => {
    this.setState({
      ...this.state,
      index: this.state.index-1
    })
  }

  countSteps = (evt) => {
    this.setState({
      ...this.state,
      steps: this.state.steps+1
    })
  }

  resetBtn = (evt) => {
    this.setState({
      message: '',
      email: '',
      steps: 0,
      index: 4,
    })
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved {this.state.steps} times</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={ this.onLeft }>LEFT</button>
          <button id="up" onClick={ this.onUp }>UP</button>
          <button id="right" onClick={ this.onRight }>RIGHT</button>
          <button id="down" onClick = { this.onDown }>DOWN</button>
          <button id="reset" onClick={ this.resetBtn }>reset</button>
        </div>
        <form>
          <input onChange = { this.onChange } id="email" type="email" placeholder="type email" value={this.state.email}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
