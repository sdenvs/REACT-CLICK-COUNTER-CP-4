// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  CountClick = () => {
    this.setState(prevObj => ({count: prevObj.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="counterNo">{count} </span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button type="button" onClick={this.CountClick} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
