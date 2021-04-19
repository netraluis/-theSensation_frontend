import SliderImageLeft from '../../components/sliderImageLeft/sliderImageLeft'
import TextHide from '../../components/textHide/textHide'

const servicesPage = () => {

    const textHideLocalization = {
        title: 'Servicios',
        first: 'Si te gusta complementar tu estancia con actividades de todo tipo como pueden ser: todo tipo de tratamientos, actividades gastronómicas y culturales, de aventura o actividades en pareja esta es tu sección ',
        second: [
                'Cuando estés realizando la reserva puedes complimentarla eligiendo alguno de nuestros servicios y en los comentarios añadir cualquier particularidad, de esta manera nosotros nos encargaremos de que podáis disfrutar al máximo'
                ]
    }
    
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
            price:'75€',
        },
    ]

    

    return (
        <>
            <TextHide title={textHideLocalization.title} first={textHideLocalization.first} second={textHideLocalization.second}/>
            <SliderImageLeft array={SliderImagesTrat} title={TitleTrat}/>
            <SliderImageLeft array={SliderImagesCult} title={TitleCult} button hide/>
            <SliderImageLeft array={SliderImagesTrat} title={TitleTrat}/>
            <SliderImageLeft array={SliderImagesTrat} title={TitleTrat}/>
        </>
        )
}

export default servicesPage