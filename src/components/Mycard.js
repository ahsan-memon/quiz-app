import React, { useContext } from 'react'
import { Card, Button } from "react-bootstrap"
import Cardbody from "./Cardbody"
import { currIndexProvider } from "../App"

export default function MyCard() {
    const currQues = useContext(currIndexProvider);
    return (
        <div>
            <Card>
                <Card.Header as="h5">Quiz</Card.Header>
                <Card.Body>
                    <Cardbody />

                </Card.Body>
                <Card.Footer> Total Questions: {currQues}/5</Card.Footer>
            </Card>

        </div>
    )
}
