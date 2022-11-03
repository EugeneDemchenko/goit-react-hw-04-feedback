import React from "react";
import Options from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

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
        return (<div>
            <h1>Please leave feedback</h1>

            <Options
                positiveFB={this.countPositiveFB}
                neutralFB={this.countNeutralFB}
                negativeFB={this.countNegativeFB}
            />

            <h2>Statistics</h2>

            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.good + this.state.neutral + this.state.bad}
                positivePercentage={Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)} />
        </div>
        );
    }
};

export default Counter;
