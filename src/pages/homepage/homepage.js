import Slider from '../../components/slider/slider'
import TextHide from '../../components/textHide/textHide'
import ImageButton from '../../components/imageButton/imageButton'
import Booking from '../../components/booking/booking'
import GoogleMaps from '../../components/google-maps/GoogleMaps'
const SliderImages = 
[
    {
        url:'3Q0B6818.JPG',
        alt:'',
        text: 'The Relax Sensation',
    },
    {
        url:'3Q0B6826.JPG',
        alt:'',
        text: 'The feeling Sensation',
    }
]

const textHideHotel = {
    title: 'Hotel',
    first: 'Dicen que no es posible combinar tu pasión con tu trabajo, en the Sensation tanto los dueños como los trabajadores lo hacen. Se combina la profesionalidad de la experiencia en el sector con la hospitalidad espontánea.',
    second: [
            'Un ambiente próximo que se consigue al tener pocas habitaciones todas con un toque diferente que te hacen sentirte como en casa en un ambiente idílico en harmonia con la naturaleza',
            'Con la certeza de conservar el entorno el hotel se integra con el paisaje y te ofrece diferentes actividades surgidas de una manera natural pero tambien te ofrece opciones para visitar la gran ciudad',
            'La decoración de tonalidades claras y espacios llenos de luz y numerosos detalles naturales hace de este hotel una experiencia totalmente mediterranea'
            ]
}

const textHideService = {
    title: 'Servicios',
    first: 'Con el fin de que tengan una estancia disfrutandola al máximo el hotel ofrece una serie servicios para de esta manera ofrecer al cliente posibilidades de que su estancia sea lo más completa posible',
    second: [
            'Se incluyen diferentes tipos servicios los cuales se pueden observar en las diferentes tarjetas colocadas posteriormente. Se pueden reservar con antelación o el mismo día en el hotel'
            ]
}

const textHideLocalization = {
    title: 'Localización',
    first: 'Con una ubicación estratégica entre la montaña y el mar y cerca de Barcelona the Sensation tiene todo a lo que un buen viajero puede aspirar. La gastronomia de un producto local de los pequeños comercios familiares de los alrededores no se podría lograr situandonos en otro lugar',
    second: [
            'La tranquilidad que ofrece el hotel es y despertarse con el sonido de los pajaros es maravilloso pero si encima en 30 minutos de tren puedes estar en Barcelona para hacer una visita a la Sagrada Familia y caminar por paseo de gracia'
            ]
}

const homePage = (props) => {
    const {history, match} = props
    const imageTextFile1 = [
        { title:'Tratamientos', imageUrl:'static/images/masaje_wellness.jpg', history, match },
        { title:'Gastronomía y cultura', imageUrl:'static/images/servicios.jpg', history, match  },
    ]
    const imageTextFile2 = [
        { title:'Aventura', imageUrl:'static/images/aventura.JPG', history, match },
        { title:'Romántico', imageUrl:'static/images/3Q0B6818.JPG', history, match },
    ]
    return (
        <>
            <Booking history={history} />
            <Slider array={SliderImages} />
            <TextHide title={textHideHotel.title} first={textHideHotel.first} second={textHideHotel.second}/>
            <TextHide title={textHideService.title} first={textHideService.first} second={textHideService.second}/>
            <ImageButton array={imageTextFile1}  />
            <ImageButton array={imageTextFile2} />
            <TextHide title={textHideLocalization.title} first={textHideLocalization.first} second={textHideLocalization.second}/>
            <GoogleMaps/>
        </>
        )
}

export default homePage