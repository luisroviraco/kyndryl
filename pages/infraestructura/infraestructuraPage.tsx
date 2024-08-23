import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from 'react';
import Card from "../../components/Card";
import Breadcrumb from '../../components/ui/Breadcrumb';
import emailjs from 'emailjs-com';

export default function InfraestructuraPage() {
  const [activeButtons, setActiveButtons] = useState({
    azureFunction: false,
    webServices: false,
    storageAccount: false,
  });

  useEffect(() => {
    const savedAzureFunctionFormData = localStorage.getItem('azureFunctionFormData');
    const savedWebServicesFormData = localStorage.getItem('webServicesFormData');
    const savedStorageAccountFormData = localStorage.getItem('storageAccountFormData');

    setActiveButtons({
      azureFunction: !!savedAzureFunctionFormData,
      webServices: !!savedWebServicesFormData,
      storageAccount: !!savedStorageAccountFormData,
    });
  }, []);

  const appServicesButtons = [
    { text: 'Azure function', link: '/infraestructura/infraestructuraPages/azureFuntionsPage', active: activeButtons.azureFunction },
    { text: 'App service', link: '/infraestructura/infraestructuraPages/webServicesPage', active: activeButtons.webServices },
    { text: 'Storage Account', link: '/infraestructura/infraestructuraPages/storageAccountPage', active: false },
  ];

  const databaseButtons = [
    { text: 'Azure SQL Server', link: '#', active: false },
    { text: 'PostgreSQL', link: '#', active: false },
    { text: 'Cosmos DB', link: '#', active: false },
  ];

  const dataButtons = [
    { text: 'Datafactory', link: '#', active: false },
    { text: 'Databricks', link: '#', active: false },
    { text: 'Event Hub', link: '#', active: false },
  ];

  const networkingButtons = [
    { text: 'Vnet', link: '#', active: false },
    { text: 'subnet', link: '#', active: false },
    { text: 'Load balancer', link: '#', active: false },
  ];

  const iamButtons = [
    { text: 'IAM', link: '#', active: false },
  ];

  const procesamientosButtons = [
    { text: 'Virtual machine', link: '#', active: false },
  ];

  const seguridadButtons = [
    { text: 'Seguridad', link: '#', active: false },
  ];

  const contenedoresButtons = [
    { text: 'AKS', link: '#', active: false },
    { text: 'ACR', link: '#', active: false },
  ];

  const otrosButtons = [
    { text: 'Logic', link: '#', active: false },
    { text: 'AP', link: '#', active: false },
  ];

  const handleSendAzureFunction = async () => {
    const azureFunctionFormData = localStorage.getItem('azureFunctionFormData');
    if (azureFunctionFormData) {
      const formData = JSON.parse(azureFunctionFormData);
      const templateParams = {
        unidadNegocio: formData.unidadNegocio,
        nombreProyecto: formData.nombreProyecto,
        tipoRecurso: formData.tipoRecurso,
        ...(formData.tipoRecurso === 'codigo' && {
          runtimeStack: formData.runtimeStack,
          version: formData.version,
          region: formData.region,
        }),
        precioLinux: formData.precioLinux,
        precioWindows: formData.precioWindows,
        SistemaOperativo: formData.SistemaOperativo,
        storage: formData.storage,
        diagnostico: formData.diagnostico,
        tipoAccesoPublico: formData.tipoAccesoPublico,
        inyeccionRed: formData.inyeccionRed,
        redVirtual: formData.redVirtual,
        to_email: 'destinatario_correo@gmail.com',
      };

      try {
        await emailjs.send('service_ik45uxa', 'template_a3wfnbw', templateParams, 'zRVTRlJja6_NXkpd7');
        alert('Correo de Azure Function enviado con éxito');
        setActiveButtons(prevState => ({
          ...prevState,
          azureFunction: false,
        }));
        localStorage.removeItem('azureFunctionFormData');
        window.location.reload(); 
      } catch (error) {
        console.error('Error al enviar correo de Azure Function:', error);
        alert('Error al enviar correo de Azure Function');
      }
    }
  };

  const handleSendWebServices = async () => {
    const webServicesFormData = localStorage.getItem('webServicesFormData');
    if (webServicesFormData) {
      const formData = JSON.parse(webServicesFormData);
      const templateParams = {
        unidadNegocio: formData.unidadNegocio,
        nombreProyecto: formData.nombreProyecto,
        tipoRecurso: formData.tipoRecurso,
        ...(formData.tipoRecurso === 'codigo' && {
          runtimeStack: formData.runtimeStack,
          version: formData.version,
          region: formData.region,
        }),
        precioLinux: formData.precioLinux,
        precioWindows: formData.precioWindows,
        SistemaOperativo: formData.SistemaOperativo,
        storage: formData.storage,
        diagnostico: formData.diagnostico,
        tipoAccesoPublico: formData.tipoAccesoPublico,
        inyeccionRed: formData.inyeccionRed,
        redVirtual: formData.redVirtual,
        to_email: 'destinatario_correo@gmail.com',
      };

      try {
        await emailjs.send('service_ik45uxa', 'template_lsrpqqo', templateParams, 'zRVTRlJja6_NXkpd7');
        alert('Correo de App Service enviado con éxito');
        setActiveButtons(prevState => ({
          ...prevState,
          webServices: false,
        }));
        localStorage.removeItem('webServicesFormData');
        window.location.reload(); 
      } catch (error) {
        console.error('Error al enviar correo de App Service:', error);
        alert('Error al enviar correo de App Service');
      }
    }
  };

  const handleSendStorageAccount = async () => {
    const storageAccountFormData = localStorage.getItem('storageAccountFormData');
    if (storageAccountFormData) {
      const formData = JSON.parse(storageAccountFormData);
      const templateParams = {
        unidadNegocio: formData.unidadNegocio,
        nombreProyecto: formData.nombreProyecto,
        tipoRecurso: formData.tipoRecurso,
        ...(formData.tipoRecurso === 'codigo' && {
          runtimeStack: formData.runtimeStack,
          version: formData.version,
          region: formData.region,
        }),
        precioLinux: formData.precioLinux,
        precioWindows: formData.precioWindows,
        SistemaOperativo: formData.SistemaOperativo,
        storage: formData.storage,
        diagnostico: formData.diagnostico,
        tipoAccesoPublico: formData.tipoAccesoPublico,
        inyeccionRed: formData.inyeccionRed,
        redVirtual: formData.redVirtual,
        to_email: 'destinatario_correo@gmail.com',
      };

      try {
        await emailjs.send('service_ik45uxa', 'template_lsrpqqo', templateParams, 'zRVTRlJja6_NXkpd7');
        alert('Correo de Storage Account enviado con éxito');
        setActiveButtons(prevState => ({
          ...prevState,
          webServices: false,
        }));
        localStorage.removeItem('storageAccountFormData');
        window.location.reload(); 
      } catch (error) {
        console.error('Error al enviar correo de App Service:', error);
        alert('Error al enviar correo de App Service');
      }
    }
  };

  const handleSendBoth = () => {
    handleSendAzureFunction();
    handleSendWebServices();
    handleSendStorageAccount();
  };

  return (
    <main className="content">
      <Header />
      <Breadcrumb />
      <div className="sub-title w-[350px]">
        Seleccione los recursos necesarios para el proyecto:
      </div>

      <div className="lg:flex grid justify-center">
        <Card
          category="Web Services"
          description="Categoría para solicitar creación de functions y web apps."
          buttons={appServicesButtons}
        />
        <Card
          category="Databases"
          description="Categoría para solicitar recursos de base de datos."
          buttons={databaseButtons}
        />
        <Card
          category="Data"
          description="Categoría para solicitar recursos de data."
          buttons={dataButtons}
        />
        <Card
          category="Networking"
          description="Categoría para solicitar recursos de redes y conectividad."
          buttons={networkingButtons}
        />
      </div>
      <div className="lg:flex grid justify-center">
        <Card
          category="IAM"
          description="Categoría para solicitar creación, roles, permisos y grupos de usuarios."
          buttons={iamButtons}
        />
        <Card
          category="Procesamientos"
          description="Categoría para solicitar recursos de maquinas virtuales y clusters."
          buttons={procesamientosButtons}
        />
        <Card
          category="Seguridad"
          description="Categoría para solicitar recursos de seguridad."
          buttons={seguridadButtons}
        />
        <Card
          category="Contenedores"
          description="Categoría para solicitar recursos de contenedores."
          buttons={contenedoresButtons}
        />
      </div>
      <div className="lg:flex lg:justify-between mr-[15px] mb-12 grid justify-center">
        <Card
          category="Otros"
          description="Categoría para solicitar otros recursos como logic, ap, app, conf, entre otros."
          buttons={otrosButtons}
        />
        <div className="gradient-white">
          <button onClick={handleSendBoth} className="buttonSend">
            Enviar Recursos Solicitados
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
