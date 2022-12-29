import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, isHead: true, headCount: 0, tailCount: 0}

  fun = () => {
    const value = Math.floor(Math.random() * 2)
    if (value === 1) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        isHead: false,
        tailCount: prevState.tailCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
        isHead: true,
        headCount: prevState.headCount + 1,
      }))
    }
  }

  render() {
    const {count, isHead, headCount, tailCount} = this.state

    return (
      <div className="mainDiv">
        <div className="gameCon">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="im"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="im"
            />
          )}

          <button className="btn" type="button" onClick={this.fun}>
            Toss Coin
          </button>
          <div className="counterCon">
            <p>Total:{count}</p>
            <p>Heads:{headCount}</p>
            <p>Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
