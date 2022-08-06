import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./Exercise6";
import ButtonCounter from "./ButtonCounter"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AnimalList from "./AnimalList";
import AnimalProps from "./AnimalProps";




export default function App() {
  const showAlert = () => {
    alert("Clicked!");
  }
  const baxlovedanica = [
    { name: "dog", value: "🐶" },
    { name: "cat", value: "🐱" },
    { name: "chicken", value: "🐔" },
    { name: "cow", value: "🐮" },
    { name: "sheep", value: "🐑" },
    { name: "horse", value: "🐴" }
];

  return (
    <div>
        <Router>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                }}
            >
                <Link to="/execise1">Exercise1</Link> |{" "}
                <Link to="/execise2">Exercise2</Link> |{" "}
                <Link to="/execise3">Exercise3</Link> |{" "}
                <Link to="/execise4">Exercise4</Link> |{" "}
                <Link to="/execise5">Exercise5</Link> |{" "}
                <Link to="/execise6">Exercise6</Link> |{" "}
            </nav>
            <Routes>
                 <Route exact path='/exercise1' element={<Exercise1 />}></Route>
                 <Route exact path='/exercise2' element={<Exercise2 />}></Route>
                 <Route exact path='/exercise3' element={<Exercise3 />}></Route>
                 <Route exact path='/exercise4' element={<Exercise4 />}></Route>
                 <Route exact path='/exercise5' element={<Exercise5 />}></Route>
                 <Route exact path='/exercise6' element={<Exercise6 />}></Route>
            </Routes>
        </Router>
      <button onClick={showAlert}>click me</button>
      <div className="button">
      <Button1 />
      <Button2 />
      <Button3 />
       </div>
      <div className="buttonCounter">
      <ButtonCounter/>
      </div>
      <div className="AnimalList">
      <AnimalList/>
      </div>
      <div>
      <AnimalProps name={baxlovedanica}/>
      </div>
    </div>
  );
}