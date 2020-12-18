import React from "react";

export default function Joke(props) {


    return(
        <div>
            <h1 style={{display: props.question ? "block" : "none"}} >Question: {props.question}</h1>
            <p style={{fontSize: !props.question && "35px"}}>PunchLine: {props.punchLine}</p>
        </div>
    )
}