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
    nombreProyecto: '',
    tipoRecurso: '',
    SistemaOperativo: '',
    runtimeStack: '',
    version:'',
    region: '',
    precioLinux: '',
    precioWindows: '',
    storage:'',
    diagnostico: '',
    tipoAccesoPublico: '',
    inyeccionRed: '',
    redVirtual: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
 
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      tipoRecurso: e.target.value,
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

  
  const handleRadioChangeSO = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      SistemaOperativo: e.target.value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('webServicesFormData', JSON.stringify(formData));
    toast.success('Datos guardados con exito', {
      position: "top-center",
      autoClose: 1000,
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
        <Breadcrumb items={breadcrumbItems} current={'App Service'} />
      </div>
      <div className="sub-title w-[350px] ">Crear un App Service:</div>
      <fieldset className="lg:flex grid ">
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
        <div >
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
      </fieldset>
      <fieldset >
      <div className="w-full md:w-1/1 lg:w-1/1">
          <label className="card-title mb-[10px] block text-base font-medium">
            ¿Quieres implementar código o imagen de contenedor?
          </label>
          
          <div className="relative z-10 grid">
            <label><input id="codigo" value="codigo" type="radio" name="tipoRecurso" checked={formData.tipoRecurso === 'codigo'} onChange={handleRadioChange}/> Codigo</label>
            <label><input  id="imagen-Contenedor" value="imagen-Contenedor" type="radio" name="tipoRecurso" checked={formData.tipoRecurso === 'imagen-Contenedor'} onChange={handleRadioChange} /> Imagen de Contenedor</label>
            <label><input  id="Static-Web-App" value="Static-Web-App" type="radio" name="tipoRecurso" checked={formData.tipoRecurso === 'Static-Web-App'} onChange={handleRadioChange} /> Static Web App</label>
          </div>
      </div>
    {formData.tipoRecurso === 'codigo' && (
    <div className="lg:flex grid ">
      <div className="w-full mt-8 md:w-1/3 lg:w-1/3  ">
        <div className="mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Runtime stack
          </label>
          <div className="relative z-10">
            <select
              id="runtimeStack"
              value={formData.runtimeStack}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Seleccione un Runtime stack</option>
              <option value=".NET" className="dark:bg-dark-2">.NET</option>
              <option value="Node.js" className="dark:bg-dark-2">Node.js</option>
              <option value="Python" className="dark:bg-dark-2">Python</option>
              <option value="Java" className="dark:bg-dark-2">Java</option>
              <option value="PowerShell Core" className="dark:bg-dark-2">PowerShell Core</option>
              <option value="Custom Handler" className="dark:bg-dark-2">Custom Handler</option>
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
      </div>
      <div className="w-full lg:pl-4 mt-8 md:w-1/3 lg:w-1/3  ">
        <div className="mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Version
          </label>
          <input
            id="version"
            type="text"
            value={formData.version}
            onChange={handleInputChange}
            placeholder="Version"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
      </div>
      <div className="w-full lg:pl-4 mt-8 md:w-1/3 lg:w-1/3  ">
        <div className="mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Region
          </label>
          <input
            id="region"
            type="text"
            value={formData.region}
            onChange={handleInputChange}
            placeholder="Version"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
      </div>
    </div>
    )}
      </fieldset>
      <fieldset>
      <div className="w-full md:w-1/2 lg:w-1/2">
          <label className="card-title mb-[10px] block text-base font-medium">
            Sistema Operativo
          </label>
          
          <div className="relative z-10 grid">
            <label><input id="linux" value="Linux" type="radio" name="SistemaOperativo" checked={formData.SistemaOperativo === 'Linux'} onChange={handleRadioChangeSO}/> Linux</label>
            <label><input  id="windows" value="Windows" type="radio" name="SistemaOperativo" checked={formData.SistemaOperativo === 'Windows'} onChange={handleRadioChangeSO} /> Windows</label>
          </div>
      </div>
      <div className="lg:flex grid ">
      {formData.SistemaOperativo === 'Linux' && (
      
      <div className="w-full mt-8 md:w-1/2 lg:w-1/2  ">
        <div className="">
          <label className="card-title mb-[5px] block text-base font-medium">
            Environment details
          </label>
          <label className=" mb-[5px] block text-base font-medium">
            Precios de Planes Linux (East US)
          </label>
          <div className="relative z-10">
            <select
              id="precioLinux"
              value={formData.precioLinux}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Planes Recomendados</option>
              <option value="Basic B1" className="dark:bg-dark-2">Basic B1 11.72 USD/Month (Estimated) ACU: 100, Memory: 1.75 GB, vCPU: 1</option>
              <option value="Premium V3 POV3" className="dark:bg-dark-2">Premium V3 POV3 70.22 USD/Month (Estimated) ACU: 195, Memory: 4 GB, VCPU: 1</option>
              <option value="Premium V3 P1V3" className="dark:bg-dark-2">Premium V3 P1V3 107.80 USD/Month (Estimated) ACU: 195, Memory: 8 GB, VCPU: 2</option>
              <option value="Premium V3 PMV3" className="dark:bg-dark-2">Premium V3 PMV3 129.29 USD/Month (Estimated) ACU: 195, Memory: 16 GB, VCPU: 2</option>
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
        
      </div>
      )}
      </div>
        
      {formData.SistemaOperativo === 'Windows' && (
      <div className="w-full  mt-8 md:w-1/3 lg:w-1/3  ">
        <div className="mb-3">
        </div>
        <label className=" mb-[5px] block text-base font-medium">
        <label className="card-title mb-[5px] block text-base font-medium">
            Environment details
          </label>
            Precios de Planes Windows
          </label>
          <div className="relative z-10">
            <select
              id="precioWindows"
              value={formData.precioWindows}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Planes Recomendados</option>
              <option value="Basic B1" className="dark:bg-dark-2">Basic B1 52.18 USD/Month (Estimated) ACU: 100, Memory: 1.75 GB, VCPU: 1</option>
              <option value="Standard S1" className="dark:bg-dark-2">Standard S1 69.53 USD/Month (Estimated) ACU: 100, Memory: 1.75 GB, VCPU: 1</option>
              <option value="Premium V3 POV3" className="dark:bg-dark-2">Premium V3 POV3 139.05 USD/Month (Estimated) ACU: 195, Memory: 4 GB, vCPU: 1</option>
              <option value="Premium V3 P1V3" className="dark:bg-dark-2">Premium V3 P1V3 219.04 USD/Month (Estimated) ACU: 195, Memory: 8 GB, vCPU: 2</option>
              <option value="Premium V3 P1MV3" className="dark:bg-dark-2">Premium V3 P1MV3 240.53 USD/Month (Estimated) ACU: 195, Memory: 16 GB, VCPU: 2</option>
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
      </div>
        )}
        
      </fieldset>
    
      <fieldset>
      <div className="w-full lg:flex grid  ">
        <div className="mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Storage
          </label>
          <p className="mb-2">Al crear una aplicación de funciones, debe crear o vincular a una cuenta de Azure Storage de uso general que admita Blobs, Queue y Table Storage.         </p>
          <label className="small-card-title mb-[5px] block text-base font-medium">
            Storage account
          </label>
          <input
            id="storage"
            type="text"
            value={formData.storage}
            onChange={handleInputChange}
            placeholder="Nombre Sugerido del Storage Account"
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
        <div className="w-full lg:pl-6 ">
          <label className="card-title mb-[10px] block text-base font-medium">
          Configuración de diagnóstico
          </label>
          <p className="mb-2">
          La cuenta de almacenamiento asociada con la aplicación de funciones almacena datos importantes de la aplicación. Es posible que desee habilitar el monitoreo de la cuenta. Puede configurar rápidamente la configuración de diagnóstico básica a medida que crea la aplicación de funciones o puede personalizar completamente la configuración de diagnóstico en el recurso de la cuenta de almacenamiento después de la creación.
          </p>
          
          <div className="relative z-10 grid">
            <label><input id="diagnosticoNot" value="Dont configure diagnostic settings now" type="radio" name="diagnostico" checked={formData.diagnostico === 'Dont configure diagnostic settings now'} onChange={handleRadioChangeDg}/> <b className="small-card-title">¡No configure ajustes de diagnóstico ahora!
            </b> Puede configurar ajustes de diagnóstico más adelante desde el recurso de la cuenta de almacenamiento. Elija esto si desea tener control total sobre los destinos de los registros, las políticas de retención y qué registros y métricas están configurados.
            </label>
            <label className="mt-4"><input  id="diagnosticoYes" value="Configure basic diagnostic settings now" type="radio" name="diagnostico" checked={formData.diagnostico === 'Configure basic diagnostic settings now'} onChange={handleRadioChangeDg} /> <b className="small-card-title">Configure los ajustes de diagnóstico básicos ahora!
            </b> Configure Azure Log Analytics con registros de StorageWrite y métricas de transacciones para el servicio de blobs. Puede modificar su configuración de diagnóstico más adelante desde el recurso de la cuenta de almacenamiento.
            </label>
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
