import Slider from '../../components/slider/slider'
import TextHide from '../../components/textHide/textHide'

const RoomPage = () => {
    
    const SliderImages = 
    [
        {
            url:'3Q0B6818.JPG',
            alt:'',
            text: 'The Relax Sensation',
            button: false
        },
        {
            url:'3Q0B6826.JPG',
            alt:'',
            text: 'The feeling Sensation',
            button: false
        }
    ]

    const textHideLocalization = {
        title: 'Localización',
        first: 'Con una ubicación estratégica entre la montaña y el mar y cerca de Barcelona the Sensation tiene todo a lo que un buen viajero puede aspirar. La gastronomia de un producto local de los pequeños comercios familiares de los alrededores no se podría lograr situandonos en otro lugar',
        second: [
                'La tranquilidad que ofrece el hotel es y despertarse con el sonido de los pajaros es maravilloso pero si encima en 30 minutos de tren puedes estar en Barcelona para hacer una visita a la Sagrada Familia y caminar por paseo de gracia'
                ]
    }

    return (
        <>
            <Slider array={SliderImages}/>
            <TextHide title={textHideLocalization.title} first={textHideLocalization.first} second={textHideLocalization.second}/>
        </>
        )
}

export default RoomPage