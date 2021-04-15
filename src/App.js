import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import CardFormElement from './components/stripe/card-form-element';
import Header from './components/header/header'
import Button from './components/button/button'
import Booking from './components/booking/booking'
import Slider from './components/slider/slider'
import TextHide from './components/textHide/textHide'
import Footer from './components/footer/footer'

import Homepage from './pages/homepage/homepage'
import Roompage from './pages/roompage/roompage'
import Services from './pages/services/services'

function App() {
  
  return (
  <>
    <Header/>
    <Booking/>
    {/*<Slider array={array}/>
    <TextHide title = 'titulo' first='primero' second='segundo'/>*/}
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/room" component={Roompage}/>
      <Route path="/services" component={Services}/>
      {/*<Route path="/shop" component={Shoppage} />
      <Route exact path="/checkout" component={CheckoutPage} />*/}
    </Switch>
    <Footer/>
    {/*{/*<CardFormElement/>*/}
  </>
  
  );
}

export default App;
