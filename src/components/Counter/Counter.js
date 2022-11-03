import React from "react";
import Options from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import './Counter.css'

class Counter extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }


    countPositiveFB = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1
            }
        });
    }
    countNegativeFB = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            }
        });
    }
    countNeutralFB = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1
            }
        });
    }

    render() {
        const { good, neutral, bad } = this.state;
        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(good /  countTotalFeedback * 100)
        
        return (<div className="section">
            <h2 className="title">Please leave feedback</h2>

            <Options
                positiveFB={this.countPositiveFB}
                neutralFB={this.countNeutralFB}
                negativeFB={this.countNegativeFB}
            />

            <h3 className="stat">Statistics</h3>

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage} />
        </div>
        );
    }
};

export default Counter;
