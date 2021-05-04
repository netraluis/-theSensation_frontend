import SliderImageLeft from '../../components/sliderImageLeft/sliderImageLeft';
import Resume from '../../components/resume/resume'
import {useState} from 'react'

const TitleTrat = 'Tratamientos'
const SliderImagesTrat = 
[
    // imagenes de freepik 
    {
        url:'trat_masaje_espalda.jpg',
        alt:'foto masaje espalda',
        subtitle: 'Masaje de espalda',
        text: 'Masaje de espalda de 45 minutos, nuestro masajista Enric especializado en masajes deportivos es capaz de quirte cualquier contractura sin olvidar la relajación',
        price:'24€'
    },
    {
        url:'trat_piernas.jpg',
        alt:'foto masaje piernas',
        subtitle: 'Masaje de piernas',
        text: 'Masaje de piernas de 30 minutos, que mejor que un masaje en tus piernas despues de una larga excursión por el monte para recuperar las fuerzas',
        price:'20€'
    },
    {
        url:'trat_masaje_cervicales.jpg',
        alt:'foto masaje cervicales',
        subtitle: 'Masaje cervical',
        text: 'Masaje en las cervicales de 30 minutos, para descontracturar la parte alta de la espalda y el cuello despues de una semana larga de trabajo',
        price:'10€'
    },
    {
        url:'trat_masaje-paraje.jpg',
        alt:'foto masaje pareja',
        subtitle: 'Masaje por parejas',
        text: 'Masaje por parejas de 100 minutos, no se ha querido dejar de lado el lado romántico que porsupuesto el hotel ofrece por ese motivo se ofrecen masajes por parejas',
        price:'75€'
    },
]

const TitleCult = 'Gastronomia y cultura'
const SliderImagesCult = 
[
    // imagenes de freepik 
    {
        url:'copa_vino.jpg',
        alt:'foto copa vino',
        subtitle: 'Cata de vino',
        text: 'Cata de vinos en una bodega autóctona con todo el sabor de las tierras de alrededor',
        price:'24€'
    },
    {
        url:'tour_turistico.jpg',
        alt:'foto persona mirando mapa',
        subtitle: 'Tour turístico',
        text: 'Tour turístico de Barcelona, caminando por paseo de gracia, siguiendo por el Barrio gótico hasta llegar al mar sin olvidarnos de la Sagrada familia',
        price:'20€'
    },
    {
        url:'persona_piernas_corriendo.jpg',
        alt:'foto masaje cervicales',
        subtitle: 'Tour turístico corriendo',
        text: 'Combinar deporte con cúltura nunca ha sido tan fácil con nuestro tour corriendo por las calles más famosas de Barcelona',
        price:'20€'
    },
    {
        url:'barbacoa.jpg',
        alt:'foto de barbacoa',
        subtitle: 'Barbacoa en la montaña',
        text: 'Que mejor manera para contactar con la naturaleza y al mismo tiempo disfrutar de los mejores productos gastronómicos que haciendo una barbacoa.',
        price:'40€',
    },
]

const TitleAv = 'Aventura'
const SliderImagesAv = 
[
    // imagenes de freepik 
    {
        url:'catamaran.jpg',
        alt:'foto catamaran con una mujer',
        subtitle: 'Catamarán y buceo',
        text: 'Excursión en catamaran por la costa parando en puntos estratégicos para bañarse y ver la fauna marina',
        price:'70€'
    },
    {
        url:'barbacoa.jpg',
        alt:'foto barbacoa',
        subtitle: 'Excursión y barbacoa',
        text: 'Excursion por el monte durante todo el día con una parada para comer y otra para merendar con la puesta de sol',
        price:'80€'
    },
    {
        url:'mountain_bike.jpg',
        alt:'foto mountain bike',
        subtitle: 'Bici por la montaña',
        text: 'Explorar la montañas de los alrededores con una mountain bike con una pequeña parada en la cima',
        price:'10€'
    },
    {
        url:'trail.jpg',
        alt:'foto de trail',
        subtitle: 'Trail',
        text: 'Para gente más experimentada que no sea suficiente correr por la montaña se ha diseñado esta excursión un poco maás fuerte ',
        price:'75€',
    },
]

const TitleRo = 'Romántico'
const SliderImagesRo = 
[
    // imagenes de freepik 
    {
        url:'trat_masaje-paraje.jpg',
        alt:'foto masaje pareja',
        subtitle: 'Masaje por parejas',
        text: 'Masaje por parejas de 100 minutos, no se ha querido dejar de lado el lado romántico que porsupuesto el hotel ofrece por ese motivo se ofrecen masajes por parejas',
        price:'75€'
    },
    {
        url:'atardecer.jpg',
        alt:'foto atardecer',
        subtitle: 'Cena en la montaña al atardecer',
        text: 'Cena al ruido de la naturaleza con la luz de un atardecer mediterráneo',
        price:'40€'
    },
    {
        url:'picnic.jpg',
        alt:'foto picnic en la playa',
        subtitle: 'Picnic en la playa',
        text: 'Picnic en la playa para cuando lo deseen',
        price:'10€'
    }
]

const BookingExtras = () =>{
    const [extras, setExtras] = useState([])

    const addExtra = (name, value) => {
        setExtras([...extras,{name, value}])
    }

    return(
    <>
        <SliderImageLeft array={SliderImagesTrat} title={TitleTrat} button hide addExtra={addExtra}/>
        <SliderImageLeft array={SliderImagesCult} title={TitleCult} button hide addExtra={addExtra}/>
        <SliderImageLeft array={SliderImagesAv} title={TitleAv} button hide addExtra={addExtra}/>
        <SliderImageLeft array={SliderImagesRo} title={TitleRo} button hide addExtra={addExtra}/>
        <Resume extras={extras} setExtras={setExtras}/>
    </>
)}

export default BookingExtras