import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  return <div className="CalcDisplay">{dispValue}</div>;
}

function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const onClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }

    console.log(num1 + "|" + op + "|" + num2 + "|" + disp);
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  const eqClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (op === "+") {
      setDisp(parseInt(num1) + parseInt(num2)); 
    } else if (op === "-") {
      setDisp(parseInt(num1) - parseInt(num2)); 
    } else if (op === "*") {
      setDisp(parseInt(num1) * parseInt(num2)); 
    } else if (op === "÷") {
      setDisp(parseInt(num1) / parseInt(num2)); 
    }
  }

  const clrClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }
  
  const surnameClickHandler = (e) => {
  e.preventDefault();
  setDisp("Arzy Klein M. Espiritu");
}

  return (
    <div className="App">
      <div className="Header">
        Calculator of Arzy Klein M. Espiritu - DA3A
      </div>

      <div className="Calculator">
        <CalcDisplay dispValue={disp} />

        <div className="CalcGrid">
          <CalcButton label={"7"} onClick={numClickHandler} />
          <CalcButton label={"8"} onClick={numClickHandler} />
          <CalcButton label={"9"} onClick={numClickHandler} />
          <CalcButton label={"÷"} onClick={opClickHandler} />

          <CalcButton label={"4"} onClick={numClickHandler} />
          <CalcButton label={"5"} onClick={numClickHandler} />
          <CalcButton label={"6"} onClick={numClickHandler} />
          <CalcButton label={"*"} onClick={opClickHandler} />

          <CalcButton label={"1"} onClick={numClickHandler} />
          <CalcButton label={"2"} onClick={numClickHandler} />
          <CalcButton label={"3"} onClick={numClickHandler} />
          <CalcButton label={"-"} onClick={opClickHandler} />

          <CalcButton
            label={"C"}
            buttonClassName="ClearButton"
            onClick={clrClickHandler}
          />

          <CalcButton label={"0"} onClick={numClickHandler} />
          <CalcButton label={"="} onClick={eqClickHandler} />
          <CalcButton label={"+"} onClick={opClickHandler} />

          <CalcButton
  label={"ESPIRITU"}
  buttonClassName="SurnameButton"
  onClick={surnameClickHandler}
/>  


        </div>
      </div>
    </div>
  );
}

export default App;