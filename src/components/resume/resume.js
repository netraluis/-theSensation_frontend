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
          <div>
            <div>
              Estancia de {days} dias en la habitación {room}
              <div style={{display: props.extras !== 0 ? '':'none'}}>
                {props.extras.map(el=>{
                  console.log(el)
                  return <div> Un {el.name} a {el.value}</div>
                })}
              </div>
            </div>
            <Stripe/>
          </div>
        ]}
      </div>
    </div>
  );
};

export default Resume;
