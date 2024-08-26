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
    primaryService: '',
    rendimiento: '',
    blobStorage: '',
    habilitarSFTP: '',
    habilitarNFSv3: '',
    permitirInquilinos: '',
    dataLake: '',
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
  const handleRadioChangeRendimiento = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      rendimiento: e.target.value,
    }));
  };
  const handleRadioChangeBlobStorage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      blobStorage: e.target.value,
    }));
  };

  
  const handleRadioChangeTc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      tipoDeCifrado: e.target.value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [id]: checked,
    }));
};

  const handleSave = () => {
    localStorage.setItem('storageAccountFormData', JSON.stringify(formData));
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
    </fieldset>

    <fieldset >
      <div className="lg:flex grid ">
        <div className="w-full  md:w-1/2 lg:w-1/2 mb-3">
          <label className="card-title mb-[5px] block text-base font-medium">
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
      <div className="w-full lg:pl-4 md:w-1/2 lg:w-1/2">
        <div>
          <label className="card-title mb-[3px] block text-base font-medium text-dark ">
            Región
          </label>
          <input
            id="region"
            type="text"
            value={formData.region}
            onChange={handleInputChange}
            placeholder="Escriba la región deseada."
            className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
            required
          />
        </div>
      </div>
      </div>
      <div className="lg:flex grid ">
      <div className="w-full  md:w-1/2 lg:w-1/2  ">
        <div className="mt-3">
          <label className="card-title mb-[5px] block text-base font-medium">
            Primary Service
          </label>
          <div className="relative z-10">
            <select
              id="primaryService"
              value={formData.primaryService}
              onChange={handleInputChange}
              className="relative z-10 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              required
            >
              <option value="" className="dark:bg-dark-2">Seleccione una opción</option>
              <option value="Azure Blob Storage o Azure Data Lake Storage Gen2" className="dark:bg-dark-2">Azure Blob Storage o Azure Data Lake Storage Gen2</option>
              <option value="Azure Files" className="dark:bg-dark-2">Azure Files</option>
              <option value="Otros (tablas y colas)" className="dark:bg-dark-2">Otros (tablas y colas)</option>              
            </select>
            <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
      </div>
      <div className="ml-5 mb-5">
          <label className="card-title mt-5 block text-base ">
          Rendimiento:
          </label>
          <div className="relative z-10 grid">
            <label><input  id="standar" value="standar" type="radio" name="standar" checked={formData.rendimiento === 'standar'} onChange={handleRadioChangeRendimiento} /> Standar</label>
            <label><input  id="premium" value="premium" type="radio" name="premium" checked={formData.rendimiento === 'premium'} onChange={handleRadioChangeRendimiento} /> Premium</label>
          </div>
        </div>
      </div>

      <div className="lg:flex grid ">
      <div className="w-full  md:w-1/2 lg:w-1/2  ">
        <div className="mb-3 ">
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
      {formData.rendimiento === 'premium' && (
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
      )}
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
        <div className="w-full lg:ml-5 md:w-1/2 lg:w-1/2 ">
          <label className="small-card-title mb-[10px] block text-base font-medium">
          Espacio de nombres jerárquico
          </label>
          <p className="mb-2">
              Seleccione esta opcion solo si requiere una storage DataLake </p>
          
          <div className="relative z-10 grid">
            <div>
              <input type="checkbox" id="dataLake" value={formData.dataLake} onChange={handleCheckboxChange} />
              <label htmlFor="dataLake"> Storage DataLake</label>
            </div>
          </div>
      </div>
      </div>
    </fieldset>
    <fieldset>
      <div className="w-full lg:flex grid ">
        <div className="w-full md:w-1/2 lg:w-1/2 ">
          <label className="card-title mb-[10px] block text-base font-medium">
            Protocolos de Acceso
          </label>
          <div className="">
            <div>
            <input type="checkbox" id="habilitarSFTP" value={formData.habilitarSFTP} onChange={handleCheckboxChange} />
            <label htmlFor="habilitarSFTP"> Habilitar SFTP</label>
            </div>
            <div>
            <input type="checkbox" id="habilitarNFSv3" value={formData.habilitarNFSv3} onChange={handleCheckboxChange} />
            <label htmlFor="habilitarNFSv3"> Habilitar el sistema de archivos de red v3    </label>
            </div>
            
            </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 ml-5">
          <label className="card-title mb-[10px] block text-base font-medium">
            Almacenamiento de blobs
          </label>
          <div className="">
            <div>
            <input type="checkbox" id="permitirInquilinos" value={formData.permitirInquilinos} onChange={handleCheckboxChange} />
            <label htmlFor="permitirInquilinos"> Permitir la replicación entre inquilinos </label>
            </div>
              <label className="small-card-title mt-2 block text-base ">
                Nivel de acceso:
              </label>
              <div className="relative z-10 grid">
                <label><input  id="hot" value="hot" type="radio" name="hot" checked={formData.blobStorage === 'hot'} onChange={handleRadioChangeBlobStorage} /> Hot</label>
                <label><input  id="cool" value="cool" type="radio" name="cool" checked={formData.blobStorage === 'cool'} onChange={handleRadioChangeBlobStorage} /> Cool</label>
              </div>
            
            </div>
        </div>
      </div>

      </fieldset>
      
      <fieldset >
      <div className="w-full md:w-1/2 lg:w-1/2 pl-3">
          <label className="card-title mb-[3px] block text-base font-medium">
            Conectividad de Red
          </label>
          <p className="mb-5">Puede conectarse a su cuenta de almacenamiento de forma pública, a través de direcciones IP públicas o puntos finales de servicio, o de forma privada, utilizando un punto final privado.
          </p>

          <label className="small-card-title mb-[5px] block text-base ">
          Acceso a la Red:
          </label>
          
          
          <div className="relative z-10 grid">
            <label><input id="Acceso Publico" value="Acceso Publico" type="radio" name="accesoRed" checked={formData.accesoRed === 'Acceso Publico'} onChange={handleRadioChangeAccesoRed}/> Habilitar el acceso público desde todas las redes.
            </label>
            <label><input  id="Acceso Publico Redes Virtuales Ip" value="Acceso Publico Redes Virtuales Ip" type="radio" name="Acceso Publico Redes Virtuales Ip" checked={formData.accesoRed === 'Acceso Publico Redes Virtuales Ip'} onChange={handleRadioChangeAccesoRed} /> Habilite el acceso público desde redes virtuales y direcciones IP seleccionadas</label>
            <label><input  id="Deshabilitado" value="Deshabilitado" type="radio" name="Deshabilitado" checked={formData.accesoRed === 'Deshabilitado'} onChange={handleRadioChangeAccesoRed} /> Deshabilite el acceso público y use el acceso privado</label>
          </div>
      </div>
    {formData.accesoRed === 'Acceso Publico Redes Virtuales Ip' && (
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
            id="ip"
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
      <button onClick={handleSave} className="button m-[30px]">Guardar</button>
      
      <ToastContainer />
      <div>
        <Footer />
      </div>
    </main>
  );
}
