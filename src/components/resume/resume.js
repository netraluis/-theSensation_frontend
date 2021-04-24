import React, { useState } from "react";
import Button from "../../components/button/button";
import './resume.css'
import Stripe from '../../components/stripe/card-form-element'
import { useParams } from "react-router";
import moment from 'moment';

const Resume = (props) => {
  const [show, setShow] = useState(true);
  
  const {startDate, endDate, room} = useParams();
  let end = moment(endDate)
  let start = moment(startDate)
  const days = end.diff(start, 'days')
  console.log( startDate, endDate, room )
  const {history} = props

  const deleteItem = (index) => {
    console.log('deleteItem', index)
    console.log(props.extras)
    const newArray = [...props.extras]
    newArray.splice(index,1)
    props.setExtras(newArray)
    
  }

  console.log(props.extras, startDate, endDate)
  return (
    <div className="sliderLeft-outside">
      <div className="sliderLeft">
        <h3>
          {!show && [<div onClick={() => setShow(!show)}>&#9658;</div>]}
          {show && [<div onClick={() => setShow(!show)}>&#9660;</div>]}
          Finalizar Reserva
        </h3>
        {show && [
          <div className = 'resume-container'>
          <div className = 'resume-extras-container'>
            <div className = 'resume-extras'>
            <h3>Resumen sobre tu reserva</h3>
              Estancia de {days} dias en la habitación {room}
              <div style={{display: props.extras !== 0 ? '':'none'}}>
                <ul>
                  {props.extras.map((el,index)=>{
                    return <li> Un {el.name} a {el.value} <span onClick={()=>deleteItem(index)}>&#9746;</span></li>
                  })}
                </ul>
              </div>
            </div>
          </div>
            <Stripe extras={props.extras}/>
          </div>
        ]}
      </div>
    </div>
  );
};

export default Resume;
