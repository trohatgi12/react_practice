import React from "react";
import Joke from './joke';

function App(){
    return (
        <div>
            <Joke joke = {{question: "What is Whitney Houston’s favorite type of coordination?", punchLine: "HAAANNNNND EYEEEEEEE."}}/>
            <Joke joke = {{question: "Why did David Hasselhoff change his name to “The Hoff?”", punchLine: "It’s less hassle."}}/>
            <Joke joke = {{question: "Why does Waldo wear stripes?", punchLine: "Because he doesn’t want to be spotted."}}/>
            <Joke joke = {{question: "Why do ducks have feathers?", punchLine: "To cover their butt quacks."}}/>
            <Joke joke = {{question: "What do you call a sad cup of coffee?", punchLine: "Depresso."}}/>
            <Joke joke = {{punchLine: "To be frank, I’d have to change my name."}} />
        </div>
    );
}

export default App;