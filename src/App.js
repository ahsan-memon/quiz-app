import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mycard from "./components/Mycard.js"
import { Container } from "react-bootstrap"
import questions from "./questions.json"
import React, { useContext, useState } from "react"
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Result from "./components/Result"

export const dataProvider = React.createContext();
export const currIndexProvider = React.createContext();
const resultArr = [];

function App() {
  const [currQues, setCurrQues] = useState(0)


  return (

    <Container>
      <BrowserRouter>




        <Switch>

          <Route exact path="/">
            <dataProvider.Provider value={questions}>
              <currIndexProvider.Provider value={[currQues, setCurrQues, resultArr]}>

                <Mycard />

              </currIndexProvider.Provider>

            </dataProvider.Provider>
          </Route>

          <Route path="/components/Result">
            <dataProvider.Provider value={questions}>
              <currIndexProvider.Provider value={[currQues, setCurrQues, resultArr]}>
                <Result />
              </currIndexProvider.Provider>

            </dataProvider.Provider>

          </Route>


        </Switch>
        <Link to="/components/Result">Results</Link>

      </BrowserRouter>
    </Container>



  );
}

export default App;
