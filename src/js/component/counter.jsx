import React from "react";

function SecondsCounter(props) {
    return (
        <div className="counter bg-dark">
            <div className="clock fa fa-clock bg-dark text-white" style={{ height: "200px", fontSize: "200px", lineHeight: "200px" }}></div>
            <div className="counter six text-light bg-dark p-4 d-inline-block six" style={{ height: "250px", fontSize: "200px", lineHeight: "200px" }}>{props.digitSix}</div>
            <div className="counter five text-light bg-dark p-4 d-inline-block five" style={{ height: "250px", fontSize: "200px", lineHeight: "200px" }}>{props.digitFive}</div>
            <div className="counter four text-light bg-dark p-4 d-inline-block four" style={{ height: "250px", fontSize: "200px", lineHeight: "200px" }}>{props.digitFour}</div>
            <div className="counter three text-light bg-dark p-4 d-inline-block three" style={{ height: "250px", fontSize: "200px", lineHeight: "200px" }}>{props.digitThree}</div>
            <div className="counter two text-light bg-dark p-4 d-inline-block two" style={{ height: "250px", fontSize: "200px", lineHeight: "200px" }}>{props.digitTwo}</div>
            <div className="counter one text-light bg-dark p-4 d-inline-block one" style={{ height: "250px", fontSize: "200px", lineHeight: "200px" }}>{props.digitOne}</div>
        </div>
    );
}

export default SecondsCounter