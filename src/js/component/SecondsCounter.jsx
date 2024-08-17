import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="card ms-2">
            <div className="card-body">
                <h5 className="card-title">{props.count}</h5>
            </div>
        </div>
    )
}

export default SecondsCounter;