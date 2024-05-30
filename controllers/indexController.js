const fs = require("fs");

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webdesignsolutions24@gmail.com",
    pass: "hrcp dikz kfxv wcko", // contraseña de aplicación generada
  },
});

const sendMail = (to, subject, text) => {
  let mailOptions = {
    from: "webdesignsolutions24@gmail.com", // tu email
    to: "webdesignsolutions24@gmail.com", // email del destinatario
    subject: "Llego un email desde tu pagina", // asunto del correo
    text: text, // contenido del correo
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Correo enviado: " + info.response);
  });
};

module.exports = {
  index: (req, res) => {
    const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));

    res.render("index", {
      data,
    });
  },
  about: (req, res) => {
    res.render("about");
  },
  portfolio: (req, res) => {
    res.render("protfolio");
  },
  servicios: (req, res) => {
    res.render("servicios");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  sendEmail: (req, res) => {
    const { name, email, phone, message } = req.body;

    const emailContent = `
            Nombre: ${name}
            Email: ${email}
            Teléfono: ${phone}
            Mensaje: ${message}
        `;

    sendMail("destinatario@ejemplo.com", "", emailContent);

    res.send("Correo enviado");
  },
  pagesTypes: (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    const tipoPagina = data.find((tipo) => tipo.id == id);

    res.render("pagesTypes", {
      tipo: tipoPagina.Tipo,
      descripcion: tipoPagina.Descripción,
      especificaciones: tipoPagina.Especificaciones,
      beneficios: tipoPagina.Beneficios,
    });
  },
};
