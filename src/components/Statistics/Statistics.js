import React from "react";
import PropTypes from 'prop-types'
import Notification from "components/Notification/Notification";
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
        : <Notification message="There is no feedback"/>
)
export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}