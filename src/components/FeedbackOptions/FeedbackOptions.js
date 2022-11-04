import React from "react";
import PropTypes from 'prop-types'
import './FeedbackOptions.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="buttonsList">
        {options.map(reaction => (
            <button
            key={reaction}
            type="button"
            className="button"
            onClick={() => onLeaveFeedback(reaction)}>
                {reaction}
            </button>
        ))}
    </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}