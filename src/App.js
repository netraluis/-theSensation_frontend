import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Homepage from './pages/homepage/homepage'
import Roompage from './pages/roompage/roompage'
import Services from './pages/services/services'
import BookingRoom from './pages/booking-room/bookingRoom'
import BookingExtras from './pages/booking-extras/bookingExtras'
import Location from './pages/location/location'
import Stuff from './pages/stuff/stuff' 

function App() {
  
  return (
  <>
    <Header/>
    {/*<Booking/>
    <Slider array={array}/>
    <TextHide title = 'titulo' first='primero' second='segundo'/>*/}
    <div className='app-switch-container'>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/room" component={Roompage}/>
      <Route path="/services" component={Services}/>      
      <Route path="/booking-room/:startDate/:endDate" component={BookingRoom}/>
      <Route path="/booking-extras/:startDate/:endDate/:room" component={BookingExtras} />
      <Route path="/location" component={Location} />
      <Route path="/stuff" component={Stuff}/>
      {/*<Route path="/shop" component={Shoppage} />
      <Route exact path="/checkout" component={CheckoutPage} />*/}
    </Switch>
    </div>
    <Footer className='app-footer'/>
    {/*{/*<CardFormElement/>*/}
  </>
  
  );
}

export default App;
