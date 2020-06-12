import React from 'react';

function Joke(props){
    return (
        <div className = 'joke'>
            <p style = {{display: props.joke.question ? "block": "none"}}>Question: {props.joke.question}</p>
            <p style = {{color: props.joke.question ? "black": "grey"}}>Reply: {props.joke.punchLine}</p>
        </div>
    );
}

export default Joke;