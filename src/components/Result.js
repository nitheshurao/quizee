import React from "react";
const Result = ({ score, playAgain }) => ( <
    div className = "score-board" >
    <
    div className = "score" > you scored { score }
    / 5 . correct ans </div >
    <
    button className = "playBtn"
    onClick = { playAgain } > { " " }
    playAgain { " " } <
    /button>{" "} <
    /div>
);
export default Result;