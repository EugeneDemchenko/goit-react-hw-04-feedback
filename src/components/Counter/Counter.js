import React from "react";

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
    countTotalFB = () => {console.log('total');};

    countPercentPosFB = () => {}

    render() {
        return (<div>
            <h1>Please leave feedback</h1>
            <div>
                <button type="button" onClick={this.countPositiveFB}>Good</button>
                <button type="button" onClick={this.countNeutralFB}>Neutral</button>
                <button type="button" onClick={this.countNegativeFB}>Bad</button>
            </div>
            <h2>Statistics</h2>
            <div>
                <span>Good: {this.state.good}</span>
                <span>Neutral: {this.state.neutral}</span>
                <span>Bad: {this.state.bad}</span>
                <span>Total: 0</span>
                <span>Positive feedback: 100%</span>
            </div>
        </div>
        );
    }
};


export default Counter;