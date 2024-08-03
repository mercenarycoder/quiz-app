import React, { useEffect, useState } from "react";
import "./quiz.css";
import { data } from "../data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [option, setOption] = useState(null);
  let [answers,setAnswers] = useState([]);
  const [locked, setLocked] = useState(false);
  const nextOnClick = ()=>{
    if(option === null){
        alert("Please select a option.");
    }
    else{
        setAnswers([...answers,option]);
        setOption(null);
        setIndex(index+1);
    }
  }
  const checkAns = (e,ans)=>{
    if(question.ans === ans){
        e.target.classList.add("correct");
    } else{
        e.target.classList.add("wrong");
    }
  }
  useEffect(()=>{
    if(data.length > index){
        setQuestion(data[index]);
    }
  },[index]);
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>{index+1}. {question.question}</h2>
      <ul>
        <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button onClick={nextOnClick}>Next</button>
      <div className="index">Question 1 of 5</div>
    </div>
  );
};

export default Quiz;
