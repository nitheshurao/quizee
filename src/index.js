import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QustionBox from "./components/QuestionBox";
import Result from "./components/Result";
class QuizBee extends Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0,
    };
    getQuestiom = () => {
        quizService().then((question) => {
            this.setState({
                questionBank: question,
            });
        });
    };
    componentDidMount() {
        this.getQuestiom();
    }
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1,
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
        });
    };
    playAgin = () => {
        this.getQuestiom();
        this.setState({
            score: 0,
            responses: 0,
        });
    };
    render() {
        return ( <
            div className = "container" >
            <
            div className = "title" > QuizBee < /div>{" "} {
                this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({ question, answer, correct, questionid }) => ( <
                            QustionBox question = { question }
                            options = { answer }
                            key = { questionid }
                            selected = {
                                (answer) => this.computeAnswer(answer, correct) }
                            />
                        )
                    )
            } { " " } {
                this.state.responses === 5 ? ( <
                    Result score = { this.state.score }
                    playAgin = { this.playAgin }
                    />
                ) : null
            } { " " } <
            /div>
        );
    }
}
ReactDOM.render( < QuizBee / > , document.getElementById("root"));