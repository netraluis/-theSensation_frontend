import SliderImageLeft from '../../components/sliderImageLeft/sliderImageLeft';
import Resume from '../../components/resume/resume'

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

const BookingExtras = () =>(
    <>
        <SliderImageLeft array={SliderImagesTrat} title={TitleTrat} button hide/>
        <Resume/>
    </>
)

export default BookingExtras