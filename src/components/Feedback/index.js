// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedbackText-container">
        <h1>
          How Satisfied are you with <br /> our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  className="emoji"
                  alt={eachEmoji.name}
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderthankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankYou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankYou-heading">Thank You</h1>
        <p className="thankYou-description">
          We will use your feddback to improve our customer support Performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderthankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
