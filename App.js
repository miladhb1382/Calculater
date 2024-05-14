import React, { useState } from 'react';
import CalShow from './project2/ClaShow';
import { object } from 'prop-types';
const App = () =>{
  const [input,setinput] = useState('');
  const clicknumberHandler = (object) =>{
    if(object === '='){
      calculate();
    }else if(object === 'AC'){
      reset();
    }else if(object === '%'){
      percent();
    }else if(object === 'D'){
      deleted();
    }else {
      setinput(input + object)
    }
  }
  const handleinput = (event) =>{
    setinput(event.target.value);
  }
  const reset = () =>{
    setinput('')
  }
  const percent = () =>{
    setinput(parseFloat(input)/100);
  }
  const deleted = () =>{
    try{
      setinput(input.slice(0,-1));
    } catch{
      setinput('Error')
    }
  }
  const calculate = () => {
  try {
    const result = eval(input);
    setinput(result.toString());
  } catch (error) {
    setinput('Error');
  }
};
  return(
    <div>
      <CalShow 
      clicked={clicknumberHandler}
      req={input}
      handleinput={handleinput}
      />
      <p>{input}</p>
    </div>
  );
}
export default App;