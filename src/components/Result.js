import React, { useContext } from 'react'
import { currIndexProvider } from "../App"
import { Card } from "react-bootstrap"
import { dataProvider } from "../App"


export default function Result() {
    const [currQues, setCurrQues, resultArr] = useContext(currIndexProvider);
    const questions = useContext(dataProvider);

    let sum = 0;
    const resultBody = questions.map(item => {
        if (resultArr[item.id - 1] === item.answer) {
            sum = sum + 1
        }
        return <div className="border">
            <h2>{item.question}</h2>
            <h3>{item.answer}</h3>
            <h4>Score : {(resultArr[item.id - 1] === item.answer) ? "1" : "0"}</h4>
        </div>

    })



    return (
        <div>
            <Card>
                <Card.Header as="h5">Quiz</Card.Header>
                <Card.Body>
                    <h1>Total Score is {sum}</h1>
                    {resultBody}
                </Card.Body>
                <Card.Footer> Total Questions: {currQues}/5</Card.Footer>
            </Card>



        </div>
    )
}
