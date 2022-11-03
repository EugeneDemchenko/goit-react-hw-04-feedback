import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    total
        ? <div>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {positivePercentage}%</span>
        </div>
        : <span>There is no feedback</span>
)
export default Statistics