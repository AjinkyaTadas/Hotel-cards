import React from 'react';
import './App.css';
import Hotel from './Hotel';
import HotelData from './HotelData';


const App = () => {
  return (
    <>
      <div className="container">
        <h1 className='text-center text-success my-3 '>Hotel Rooms</h1>


        {HotelData.map((values) => {
          return (
            <>
              <Hotel
                imgsrc={values.imgsrc}
                title={values.title}
                text={values.text}
                btn={values.btn}
              />
            </>
          );
        })
        }



      </div >


    </>
  )
}

export default App
