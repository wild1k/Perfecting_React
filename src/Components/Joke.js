import React from "react";

function clicked() {
    return console.log("I was clicked!")
}

export default function Joke(props) {


    return(
        <div>
            <h1 style={{display: props.question ? "block" : "none"}} onMouseOver={clicked}>Question: {props.question}</h1>
            <p style={{fontSize: !props.question && "35px"}}>PunchLine: {props.punchLine}</p>
            <button onMouseOver={clicked}>Click</button>
        </div>
    )
}