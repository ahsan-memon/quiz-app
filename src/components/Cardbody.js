import React, { useContext } from 'react'
import { Form, Card, Button } from "react-bootstrap"
import Options from "./Options"
import { dataProvider } from "../App"
import { currIndexProvider } from "../App"
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export default function Cardbody() {
    const questions = useContext(dataProvider)
    const [currQues, setCurrQues, resultArr] = useContext(currIndexProvider);

    function Next(e) {
        if (currQues >= 3) {
            e.target.innerText = "Finish"
        }



        if (typeof resultArr[currQues] !== "undefined") {
            if (currQues < 4) {
                setCurrQues(
                    currQues => currQues + 1
                )

            }
        }
        else {
            alert("Please, select the option first!!")
        }
    }
    function Previous() {


        if (currQues > 0) {
            setCurrQues(
                currQues => currQues - 1
            )
        }

    }





    return (
        <div >


            <Card.Title>{currQues + 1}. {questions[currQues].question}

            </Card.Title>






            <Options />

            <Button onClick={() => Previous()} className="mr-3">Previous</Button>
            <Button onClick={(e) => Next(e)}>Next</Button>


        </div>
    )
}
