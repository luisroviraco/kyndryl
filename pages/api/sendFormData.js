import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('Received request:', req.method, req.body); // Log de la solicitud recibida
  if (req.method === 'POST') {
    const { formData } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'luisedurovira@gmail.com',
        pass: 'luisclaribel0806',
      },
    });

    let mailOptions = {
      from: 'luisedurovira@gmail.com',
      to: 'luisedurovira@gmail.com',
      subject: 'Datos del Formulario',
      text: `Unidad de Negocio: ${formData.unidadNegocio}\nNombre del Proyecto: ${formData.nombreProyecto}`,
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info); // Log del correo enviado
      res.status(200).json({ message: 'Correo enviado', info });
    } catch (error) {
      console.error('Error sending email:', error); // Log del error
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
