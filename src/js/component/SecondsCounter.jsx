import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.count}</h5>
            </div>
        </div>
    )
}

export default SecondsCounter;