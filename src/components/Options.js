import { Alert } from 'bootstrap'
import React, { useContext } from 'react'
import { Form } from "react-bootstrap"
import { dataProvider } from "../App"
import { currIndexProvider } from "../App"

export default function Options() {
    const questions = useContext(dataProvider)
    const [currQues, , resultArr] = useContext(currIndexProvider);
    const options = Object.values(questions[currQues].options[0])



    const opt = options.map((item) => {
        return (

            <div className="border my-3">
                <Form.Check
                    type='radio'
                    name="values"
                    label={`${item}`}
                    id={`disabled-default-radio`}
                    onClick={() => {
                        resultArr[currQues] = item;
                        console.log(resultArr)

                    }}
                />
            </div>
        )
    })

    return (
        <>
            {opt}

        </>

    )



}
