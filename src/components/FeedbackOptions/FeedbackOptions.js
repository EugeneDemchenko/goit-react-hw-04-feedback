import React from "react";
import './FeedbackOptions.css'

const Options = ({ positiveFB, neutralFB, negativeFB }) => (
    <div className="buttonsList">
        <button type="button" className="button good" onClick={positiveFB}>Good</button>
        <button type="button" className="button neutral" onClick={neutralFB}>Neutral</button>
        <button type="button" className="button bad" onClick={negativeFB}>Bad</button>
    </div>
);

export default Options;