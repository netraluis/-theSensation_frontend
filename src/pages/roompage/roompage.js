import Slider from '../../components/slider/slider'
import TextHide from '../../components/textHide/textHide'
import Booking from '../../components/booking/booking'

const RoomPage = ({history}) => {
    
    const SliderImages = 
    [
        {
            url:'3Q0B6818.JPG',
            alt:'',
        },
        {
            url:'3Q0B6826.JPG',
            alt:'',
        }
    ]

    const textHideLocalization = {
        title: 'Habitaciones',
        first: 'Si estás a la última en diseño y tendencias te encantarán las habitaciones en theSensation, luminosas y confortables cada una diferente hace sentirte especial en cada habitación haciéndote sentir en una casa diferente en cada una de ellas',
        second: [
                'Las 8 habitaciones están divididas en dos plantas (4 arriba, 4abajo) todas mirando al mar. Las de arriba con un agradable balcón y las de abajo con acceso directo a la piscina. '
                ]
    }

    return (
        <>
            <Booking history={history} />
            <Slider array={SliderImages}/>
            <TextHide title={textHideLocalization.title} first={textHideLocalization.first} second={textHideLocalization.second}/>
        </>
        )
}

export default RoomPage