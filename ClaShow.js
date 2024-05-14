import React from 'react';
import './styleCal.css';
import Button from './button/button';

const CalShow = (props) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="table-cell-input" colSpan="4">
            <input type="text" className="input" value={props.req} onChange={props.handleinput}/>
          </td>
        </tr>
        <tr>
          <td className="table-cell">
            <Button btnType='Number' clicked ={(event)=>{props.clicked('AC')}}>AC</Button>
          </td>
          <td className="table-cell">
            <Button btnType='Number' clicked ={(event)=>{props.clicked('D')}}>D</Button>
          </td>
          <td className="table-cell">
            <Button btnType='Number' clicked ={(event)=>{props.clicked('%')}}>%</Button>
          </td>
          <td className="table-cell">
            <Button name='÷' btnType='Action' clicked={(event)=>props.clicked('÷')}>÷</Button>
          </td>
        </tr>
        <tr>
          <td className="table-cell">
            <Button name='7' btnType='Number' clicked ={(event)=>{props.clicked('7')}}>7</Button>
          </td>
          <td className="table-cell">
            <Button name='8' btnType='Number' clicked ={(event)=>{props.clicked('8')}}>8</Button>
          </td>
          <td className="table-cell">
            <Button name='9' btnType='Number' clicked ={(event)=>{props.clicked('9')}}>9</Button>
          </td>
          <td className="table-cell">
            <Button name='X' btnType='Action' clicked={(event)=>props.clicked('*')}>X</Button>
          </td>
        </tr>
        <tr>
          <td className="table-cell">
            <Button name='4' btnType='Number' clicked ={(event)=>{props.clicked('4')}}>4</Button>
          </td>
          <td className="table-cell">
            <Button name='5' btnType='Number' clicked ={(event)=>{props.clicked('5')}}>5</Button>
          </td>
          <td className="table-cell">
            <Button name='6' btnType='Number' clicked ={(event)=>{props.clicked('6')}}>6</Button>
          </td>
          <td className="table-cell">
            <Button name='-' btnType='Action' clicked={(event)=>props.clicked('-')} >-</Button>
          </td>
        </tr>
        <tr>
          <td className="table-cell">
            <Button name='1' btnType='Number' clicked ={(event)=>{props.clicked('1')}}>1</Button>
          </td>
          <td className="table-cell">
            <Button name='2' btnType='Number' clicked ={(event)=>{props.clicked('2')}}>2</Button>
          </td>
          <td className="table-cell">
            <Button name='3' btnType='Number' clicked ={(event)=>{props.clicked('3')}}>3</Button>
          </td>
          <td className="table-cell">
            <Button name='+' btnType='Action' clicked={(event)=>props.clicked('+')}>+</Button>
          </td>
        </tr>
        <tr>
          <td className="table-cell" colSpan="2">
            <Button name='0' btnType='Number' clicked ={(event)=>{props.clicked('0')}}>0</Button>
          </td>
          <td className="table-cell">
            <Button name='.' btnType='Number' clicked ={(event)=>{props.clicked('.')}}>.</Button>
          </td>
          <td className="table-cell">
            <Button name='=' btnType='Action' clicked ={(event)=>{props.clicked('=')}}>=</Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CalShow;