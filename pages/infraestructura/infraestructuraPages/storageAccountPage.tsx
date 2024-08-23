// pages/WebServicesPage.js
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React, { useState } from "react";
import Breadcrumb from '../../../components/ui/Breadcrumb';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WebServicesPage() {
  const router = useRouter();

  const breadcrumbItems = [
    { text: 'Recursos', link: '/infraestructura/infraestructuraPage' }
  ];

  const [formData, setFormData] = useState({
    unidadNegocio: '',
    redundancia: '',
    nombreProyecto: '',
    accesoRed: '',
    tipoDeCifrado: '',
    version:'',
    region: '',
    storage:'',
    diagnostico: '',
    tipoAccesoPublico: '',
    inyeccionRed: '',
    redVirtual: '',
    tipoDeCuenta: '', 
    redesVirtuales: '',
    ip: '',
    versionTLS: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
 
  const handleRadioChangeAccesoRed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      accesoRed: e.target.value,
    }));
  };
  const handleRadioChangeDg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      diagnostico: e.target.value,
    }));
  };
  const handleRadioChangeAccesoPublico = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      tipoAccesoPublico: e.target.value,
    }));
  };
  const handleRadioChangeInyeccionRed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      inyeccionRed: e.target.value,
    }));
  };

  
  const handleRadioChangeTc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      tipoDeCifrado: e.target.value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('storageAccountFormData', JSON.stringify(formData));
    toast.success('Datos guardados con exito', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => router.push('/infraestructura/infraestructuraPage')
    });
  };

  return (
    <main className="content">
      <div className="fixed z-20">
        <Header />
      </div>
      <div>
        <Breadcrumb items={breadcrumbItems} current={'Storage Account'} />
      </div>
      <div className="sub-title w-[350px] ">Crear un Storage Account:</div>
      <fieldset >
        <div className="lg:flex grid ">
      <div className="w-full  md:w-1/2 lg:w-1/2  ">
        <div className="mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Unidad de Negocio
          </label>
          <div className="relative z-10">
            <select
              id="unidadNegocio"
              value={formData.unidadNegocio}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Seleccione una opción</option>
              <option value="Recaudo" className="dark:bg-dark-2">Recaudo</option>
              <option value="Tributario" className="dark:bg-dark-2">Tributario</option>
              <option value="Renta" className="dark:bg-dark-2">Renta</option>
              <option value="Analitica" className="dark:bg-dark-2">Analitica</option>
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
      </div>
      <div className="w-full lg:pl-4 md:w-1/2 lg:w-1/2">
        <div className="mb-[10px]">
          <label className="card-title mb-[5px] block text-base font-medium text-dark ">
            Nombre del Proyecto
          </label>
          <input
            id="nombreProyecto"
            type="text"
            value={formData.nombreProyecto}
            onChange={handleInputChange}
            placeholder="Nombre del proyecto"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
      </div>
      </div>
      <div className="lg:flex grid ">
      <div className="w-full  md:w-1/2 lg:w-1/2  ">
        <div className="mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Redundancia
          </label>
          <div className="relative z-10">
            <select
              id="redundancia"
              value={formData.redundancia}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Seleccione una opción</option>
              <option value="Almacenamiento con redundancia local" className="dark:bg-dark-2">Almacenamiento con redundancia local (LRS)</option>
              <option value="Almacenamiento georedundante" className="dark:bg-dark-2">Almacenamiento georedundante (GRS)</option>
              <option value="Almacenamiento con redundancia de zona " className="dark:bg-dark-2">Almacenamiento con redundancia de zona (ZRS) </option>
              <option value="Almacenamiento con redundancia de zona geográfica" className="dark:bg-dark-2">Almacenamiento con redundancia de zona geográfica (GZRS)</option>
              
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
      </div>
      <div className="w-full lg:pl-4 md:w-1/2 lg:w-1/2">
        <div >
          <label className="card-title mb-[5px] block text-base font-medium text-dark ">
            Tipo de Cuenta Premium
          </label>
          <div className="relative z-10">
            <select
              id="tipoDeCuenta"
              value={formData.tipoDeCuenta}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Seleccione una opción</option>
              <option value="Bloquear blobs" className="dark:bg-dark-2">Bloquear Blobs</option>
              <option value="Archivos compartidos" className="dark:bg-dark-2">Archivos Compartidos</option>
              <option value="Blobs de página" className="dark:bg-dark-2">Blobs de Página</option>              
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
      </div>
      </div>
      </fieldset>
      
      <fieldset >
      <div className="w-full md:w-1/1 lg:w-1/1">
          <label className="card-title mb-[3px] block text-base font-medium">
            Conectividad de Red
          </label>
          <p className="mb-5">Puede conectarse a su cuenta de almacenamiento de forma pública, a través de direcciones IP públicas o puntos finales de servicio, o de forma privada, utilizando un punto final privado.
          </p>

          <label className="small-card-title mb-[5px] block text-base ">
          Acceso a la Red:
          </label>
          
          
          <div className="relative z-10 grid">
            <label><input id="accesoPublico" value="accesoPublico" type="radio" name="accesoRed" checked={formData.accesoRed === 'accesoPublico'} onChange={handleRadioChangeAccesoRed}/> Habilitar el acceso público desde todas las redes.
            </label>
            <label><input  id="accesoPublicoRedesVirtualesIp" value="accesoPublicoRedesVirtualesIp" type="radio" name="accesoPublicoRedesVirtualesIp" checked={formData.accesoRed === 'accesoPublicoRedesVirtualesIp'} onChange={handleRadioChangeAccesoRed} /> Habilite el acceso público desde redes virtuales y direcciones IP seleccionadas</label>
            <label><input  id="Deshabilitado" value="Deshabilitado" type="radio" name="Deshabilitado" checked={formData.accesoRed === 'Deshabilitado'} onChange={handleRadioChangeAccesoRed} /> Deshabilite el acceso público y use el acceso privado</label>
          </div>
      </div>
    {formData.accesoRed === 'accesoPublicoRedesVirtualesIp' && (
    <div className="lg:flex grid ">
      <div className="w-full mt-5 md:w-1/3 lg:w-1/3  ">
        <div className="mb-3">
          <label className="small-card-title mb-[5px] block text-base font-medium">
          Redes Virtuales
          </label>
          <div >
          <input
            id="redesVirtuales"
            type="text"
            value={formData.redesVirtuales}
            onChange={handleInputChange}
            placeholder="Redes Virtuales"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
        </div>
      </div>
      <div className="w-full mt-5 md:w-1/3 lg:w-1/3 ml-5 ">
        <div className="mb-3">
          <label className="small-card-title mb-[5px] block text-base font-medium">
          IP
          </label>
          <div >
          <input
            id="IPs"
            type="text"
            value={formData.ip}
            onChange={handleInputChange}
            placeholder="Escriba las direcciones IPs separadas por comas"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
        </div>
      </div>
    </div>
    )}
      </fieldset>
      <fieldset>
      <div className="w-full md:w-1/2 lg:w-1/2">
          <label className="card-title mb-[10px] block text-base font-medium">
          Tipo de cifrado
          </label>
          
          <div className="relative z-10 grid">
            <label><input id="Administradas por Microsoft (MMK)" value="Administradas por Microsoft (MMK)" type="radio" name="tipoDeCifrado" checked={formData.tipoDeCifrado === 'Administradas por Microsoft (MMK)'} onChange={handleRadioChangeTc}/> Claves administradas por Microsoft (MMK)</label>
            <label><input  id="Administradas por Cliente (CMK)" value="Administradas por Cliente (CMK)" type="radio" name="tipoDeCifrado" checked={formData.tipoDeCifrado === 'Administradas por Cliente (CMK)'} onChange={handleRadioChangeTc} /> Claves administradas por el Cliente (CMK)</label>
          </div>
      </div>
      </fieldset>
    
      <fieldset>
      <div className="w-full lg:flex grid  ">
        <div className="mb-3 w-full  md:w-1/2 lg:w-1/2 ">
          <label className="card-title mb-[5px] block text-base font-medium">
            Avanzado
          </label>
          <p className="mb-2">Configure los ajustes de seguridad que afectan su cuenta de almacenamiento.</p>

          
          <label className="small-card-title mb-[5px] block text-base font-medium">
            Versión Mínima de TLS
          </label>
          <div className="relative z-10">
            <select
              id="versionTLS"
              value={formData.versionTLS}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Seleccione una opción</option>
              <option value="Version 1.0" className="dark:bg-dark-2">Version 1.0</option>
              <option value="Version 1.1" className="dark:bg-dark-2">Version 1.1</option>
              <option value="Version 1.2" className="dark:bg-dark-2">Version 1.2</option> 
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
        <div className="w-full lg:ml-5 md:w-1/2 lg:w-1/2  ">
          <label className="small-card-title mb-[10px] block text-base font-medium">
          Espacio de nombres jerárquico
          </label>
          <p className="mb-2">
              Seleccione esta opcion solo si requiere una storage DataLake </p>
          
          <div className="relative z-10 grid">
            <div>
              <input type="checkbox" id="DataLake" name="DataLake" />
              <label> Storage DataLake</label>
            </div>
          </div>
      </div>
      </div>
      </fieldset>
      <fieldset>
      <div className="w-full md:w-1/1 lg:w-1/1">
          <label className="card-title mb-[10px] block text-base font-medium">
            Networking
          </label>
          <p className="mb-3">Las aplicaciones de funciones se pueden aprovisionar con una dirección de entrada pública en Internet o aislada en una red virtual de Azure. Las aplicaciones de funciones también pueden recibir tráfico saliente capaz de llegar a puntos finales en una red virtual, estar gobernadas por grupos de seguridad de red o verse afectadas por rutas de red virtual. De forma predeterminada, su aplicación está abierta a Internet y no puede acceder a una red virtual. Estos aspectos también se pueden cambiar después de aprovisionar la aplicación.
          </p>
          <div className="lg:flex">
          <label className=" mb-[10px] block text-base font-medium">
          Habilitar el acceso público
          </label>
          <div className="relative z-10 grid lg:flex">
            <label className="lg:ml-4"><input id="on" value="On" type="radio" name="tipoAccesoPublico" checked={formData.tipoAccesoPublico === 'On'} onChange={handleRadioChangeAccesoPublico}/> On</label>
            <label className="lg:ml-4"><input  id="Off" value="Off" type="radio" name="tipoAccesoPublico" checked={formData.tipoAccesoPublico === 'Off'} onChange={handleRadioChangeAccesoPublico} /> Off</label>
          </div>
          <label className=" mb-[10px] ml-12 block text-base font-medium">
          Habilitar inyección de red
          </label>
          <div className="relative z-10 grid lg:flex">
            <label className="lg:ml-4"><input id="On" value="On" type="radio" name="inyeccionRed" checked={formData.inyeccionRed === 'On'} onChange={handleRadioChangeInyeccionRed}/> On</label>
            <label className="lg:ml-4"><input  id="Off" value="Off" type="radio" name="inyeccionRed" checked={formData.inyeccionRed === 'Off'} onChange={handleRadioChangeInyeccionRed} /> Off</label>
          </div>
          </div>
      </div>
      {formData.inyeccionRed === 'On' && (
        <div className="w-full md:w-1/1 lg:w-1/1">
        <label className="card-title mb-[10px] mt-4 block text-base font-medium">
        Virtual Network
        </label>
        <p className="mb-3">Seleccione o cree una red virtual que esté en la misma región que su nueva aplicación.
        </p>
        <input
            id="redVirtual"
            type="text"
            value={formData.redVirtual}
            onChange={handleInputChange}
            placeholder="Red virtual"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        
    </div>
      )}
      </fieldset>
      <button onClick={handleSave} className="button m-[30px]">Guardar</button>
      
      <ToastContainer />
      <div>
        <Footer />
      </div>
    </main>
  );
}
