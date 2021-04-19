import React, { useState } from 'react';
import Button from '../../components/button/button'

const SliderImageLeft = (props) =>{
    const [show, setShow] = useState(false)

    
    // if(hide){
    //   setShow(true)
    // }
    return (
      <div className='sliderLeft-outside'>
        <div className='sliderLeft'>
        <h3> 
        {
          !show&&[
            <div onClick={()=>setShow(!show)}>
              &#9658;
            </div>
          ]
        }
        {
          show&&[
            <div onClick={()=>setShow(!show)}>
              &#9660;
            </div>
          ]
        }
        Finalizar Reserva
        </h3>
        {
          show&&[
              <div>
                <div>
                    <h3>Título</h3>
                    <h3>Cantidad</h3>
                    <h3>Precio</h3>
                    <h3>Comentarios</h3>
                </div>
                <div>

                </div>

              
              </div>
          ]
  
        }
        </div>
      </div>
    );
  } 
  
  export default SliderImageLeft
  