
import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';
const Operators = () => {
  const [operatorState, setOperatorState]= useState(operators)
  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operatorState.map((operator,index)=><OperatorButton key={index} operator={operator.char}/>)
      }
      
    </>
  );
};
export default Operators;