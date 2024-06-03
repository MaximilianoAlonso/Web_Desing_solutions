const express = require('express');
const { index, about, portfolio, servicios, contact, pagesTypes, sendEmail } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', index )
      .get('/protfolio', portfolio )
      .get('/servicios', servicios )
      .get('/contact', contact )
      .get("/tipos_de_paginas/:id", pagesTypes)
      .post('/enviar-correo', sendEmail);

module.exports = router;
