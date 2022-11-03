import React from "react";
import './Statistics.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    total
        ? <ul className="list">
            <li className="item">Good: {good}</li>
            <li className="item">Neutral: {neutral}</li>
            <li className="item">Bad: {bad}</li>
            <li className="item">Total: {total}</li>
            <li className="item">Positive feedback: {positivePercentage}%</li>
        </ul>
        : <span className="empty">There is no feedback</span>
)
export default Statistics