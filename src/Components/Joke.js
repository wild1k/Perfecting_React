import React from "react";

export default function Joke(props) {

    const style = {
        h1: {
        
            color: "green",
            fontSize: 25,

        }
    }
    var h1Question = <h1>Question:</h1>
    console.log(h1Question);
    if (h1Question !== props) {
        style.h1Question.textBox =  "none";
    }
    return(
        <div>
            <h1 style={style.h1} key={h1Question} >{props.question}</h1>
            <p>PunchLine: {props.punchline}</p>
        </div>
    )
}