import React from 'react';
import Link from 'next/link';

const HomeContent = () => {
  return (
    <main className="content">
      <div className="lg:flex sm:flex-col xs:flex-row lg:flex-row w-full lg:h-[65vh] xs:h-[95vh] items-center p-4 justify-between">
        <div className="lg:w-[50%] sm:w-full xs:w-full lg:col-12 lg:pl-4" style={{ textAlign: 'center' }}>
          <span className="title ">Bienvenido al Portal de Solicitud de Recursos AZURE</span>
          <p className="m-[20px] lg:m-[50px]">Estamos emocionados de tenerte aquí. Solicita, gestiona y habilita recursos en la nube de AZURE de manera eficiente y oportuna.</p>
          <span className="small-title">Selecciona una de las siguientes opciones:</span>
        </div>
        <div className="grid lg:w-[50%] sm:w-full xs:w-full lg:col-12 lg:flex lg:flex-col xs:flex-grid justify-center items-center ">
          <button className=" buttonDeactivate mb-7 mt-[20px] lg:mt-0">
            Desarrollo
          </button>
          <button className=" buttonDeactivate mb-7">
            Datos
          </button>
          <button className="buttonDeactivate mb-7">
            Gobierno
          </button>
          <Link href="/infraestructuraPage" passHref>
            <button className="button mb-7">
              Infraestructura
            </button>
          </Link>
          <button className="buttonDeactivate mb-7">
            Conectividad
          </button>
        </div>
      </div>
    </main>
  );
}

export default HomeContent;
