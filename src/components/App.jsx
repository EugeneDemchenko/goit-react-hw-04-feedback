import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import './App.css'


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }

  countFeedback = reaction => {
    this.setState (prevState =>({[reaction]: prevState[reaction] + 1}))
  }
  
  render() {
    const reaction = Object.keys(this.state)
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(good /  countTotalFeedback * 100)
        
    return (
      <>
      <div className="section">
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={reaction}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>    
        <Section title="Statistics" >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
      </>
    );
  }
}

export default App