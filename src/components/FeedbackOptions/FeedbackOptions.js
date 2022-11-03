import React from "react";

const Options = ({ positiveFB, neutralFB, negativeFB }) => (
    <div>
        <button type="button" onClick={positiveFB}>Good</button>
        <button type="button" onClick={neutralFB}>Neutral</button>
        <button type="button" onClick={negativeFB}>Bad</button>
    </div>
);

export default Options;