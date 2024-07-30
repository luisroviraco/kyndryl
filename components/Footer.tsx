import React from 'react'
import '../styles/globals.css';

const Footer = () => {
  return (
    <div className="footer z-20">
        <div className='gradient-line'></div>

        <div className='flex justify-between p-[20px] items-center' style={{backgroundColor: "#184B75", color: "white"}}>
            <div >
                <h2><b>¿Dudas?</b></h2>
                <span>Escríbenos a <b>info@kyndryl.com.</b></span>
                <br/>
                <span>Estamos aquí para ayudarte.</span>
            </div>
            <div>
                <span>Elaborado por: Proyecto x</span>
            </div>
        </div>
    </div>
  )
}

export default Footer