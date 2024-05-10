import React from 'react';
import './App.css';

const Hotel = (Hotel) => {
    return (
        <>

            <div className="card">
                <img className="image" src={Hotel.imgsrc} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-center"> {Hotel.title}</h2>
                    <p className="card-text text-center">{Hotel.text}</p>
                    <span className="btn">
                        <button className="btn  btn-success">{Hotel.btn}</button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Hotel
