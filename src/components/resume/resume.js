import React, { useState } from "react";
import './resume.css'
import Stripe from '../../components/stripe/card-form-element'
import { useParams } from "react-router";
import moment from 'moment';

const Resume = (props) => {
  const [show, setShow] = useState(true);
  const [deleteShow, setDeleteShow] = useState(true)
  const {startDate, endDate} = useParams();
  let end = moment(endDate)
  let start = moment(startDate)
  const days = end.diff(start, 'days')


  const deleteItem = (index) => {
    console.log('deleteItem', index)
    console.log(props.extras)
    const newArray = [...props.extras]
    newArray.splice(index,1)
    props.setExtras(newArray)
    
  }

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
            <h3>Resumen de tu reserva</h3>
              Estancia de {days} dias
              <div style={{display: props.extras !== 0 ? '':'none'}}>
                <ul>
                  {props.extras.map((el,index)=>{
                    return <li className = 'resume-list'> Un {el.name} a {el.value} <span style={{display: deleteShow ? '':'none'}} onClick={()=>deleteItem(index)}>&#9746;</span></li>
                  })}
                </ul>
              </div>
            </div>
          </div>
            <Stripe extras={props.extras} setDeleteShow={setDeleteShow} />
          </div>
        ]}
      </div>
    </div>
  );
};

export default Resume;
