
import SmallSliderWithText from '../../components/smallSliderWithText/smallSliderWithText'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Booking from '../../components/booking/booking'
import './bookingRoom.css'

// const textHideLocalization = {
//     title: 'Servicios',
//     first: 'Si te gusta complementar tu estancia con actividades de todo tipo como pueden ser: todo tipo de tratamientos, actividades gastronómicas y culturales, de aventura o actividades en pareja esta es tu sección ',
//     second: [
//             'Cuando estés realizando la reserva puedes complimentarla eligiendo alguno de nuestros servicios y en los comentarios añadir cualquier particularidad, de esta manera nosotros nos encargaremos de que podáis disfrutar al máximo'
//             ]
// }

const room11 = 'Habitación con terraza';
const text11 = 'Habitacion espaciosa en la planta baja con acceso directo a la piscina';
const price11 = '60 €'
const sliderImagesRoom11 = 
[
    // imagenes de freepik 
    {
        url:'11_cama_2.JPG',
        alt:'cama hab 11',
    },
    {
        url:'11_cama.JPG',
        alt:'cama hab 11',
    },
    {
        url:'11_cama_lavabo.JPG',
        alt:'cama y lavabo hab 11',
    },
]

const room12 = 'Habitación con vistas al mar';
const text12 = 'Habitacion espaciosa con un balcón con vistas al mar mediterráneo';
const price12 = '60 €'
const sliderImagesRoom12 = 
[
    // imagenes de freepik 
    {
        url:'12_cama_silla.JPG',
        alt:'cama y silla hab 12',
    },
    {
        url:'12_cama.JPG',
        alt:'cama hab 12',
    },
    {
        url:'12_cama_lavabo.JPG',
        alt:'cama y lavabo hab 12',
    },
]

const room13 = 'Habitación con terraza y barbacoa';
const text13 = 'Habitacion en la planta baja con una barbacoa para compartir con tus amigos';
const price13 = '60 €'
const sliderImagesRoom13 = 
[
    // imagenes de freepik ,
    {
        url:'13_cama.JPG',
        alt:'cama hab 13',
    },
    {
        url:'13_lavabo.JPG',
        alt:'lavabo hab 13',
    },
]

const room14 = 'Habitación con terraza y bañera';
const text14 = 'La habitacion más espaciosa del hotel con un balcón con vistas a la montaña';
const price14 = '60 €'
const sliderImagesRoom14 = 
[
    // imagenes de freepik ,
    {
        url:'14_cama.JPG',
        alt:'cama hab 14',
    },
    {
        url:'14_lavabo.JPG',
        alt:'lavabo hab 14',
    },
]


const BookingRoom = (props) => {
    const {startDate, endDate} = useParams();
    const {history} = props
    
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                startDate, 
                endDate 
            })
        };
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/bookings/aviability`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setRoom11Show(data.data.response['11'])
                setRoom12Show(data.data.response['12'])
                setRoom13Show(data.data.response['13'])
                setRoom14Show(data.data.response['14'])
            });

    },[])

    const [room11Show, setRoom11Show]  = useState(null)
    const [room12Show, setRoom12Show]  = useState(null)
    const [room13Show, setRoom13Show]  = useState(null)
    const [room14Show, setRoom14Show]  = useState(null)

    return (
        <>  
            {room11Show===false&&room12Show===false&&room13Show===false&&room14Show===false&&<div>
                <Booking history={history} />
                <div className='bookingRoom-text'> Lo sentimos no tenemos disponibilidad para estas fechas, elija otra fecha </div>
            </div>}
            
            <div>
                <div style={{display: `${room11Show?'':'none'}`}}>
                    <SmallSliderWithText key={11} array={sliderImagesRoom11} 
                    title={room11} text={text11} price={price11} history={history} room='11' startDate={startDate} endDate={endDate} />
                </div>
                <div style={{display: `${room12Show?'':'none'}`}}>
                    <SmallSliderWithText key={12} array={sliderImagesRoom12} 
                    title={room12} text={text12} price={price12} history={history} room='12' startDate={startDate} endDate={endDate} />
                </div>
                <div style={{display: `${room13Show?'':'none'}`}}>
                    <SmallSliderWithText key={13} array={sliderImagesRoom13} 
                    title={room13} text={text13} price={price13} history={history} room='13' startDate={startDate} endDate={endDate} />
                </div>
                <div style={{display: `${room14Show?'':'none'}`}} >
                    <SmallSliderWithText key={14} array={sliderImagesRoom14} 
                    title={room14} text={text14} price={price14} history={history} room='14' startDate={startDate} endDate={endDate} />
                </div>
            </div>
        </>
        )
}

export default BookingRoom