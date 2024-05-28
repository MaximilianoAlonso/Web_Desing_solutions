var express = require('express');
const { index, about, portfolio, servicios, contact, pagesTypes } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index )
      .get('/about', about )
      .get('/protfolio', portfolio )
      .get('/servicios', servicios )
      .get('/contact', contact )
      .get("/tipos_de_paginas/:tipo", pagesTypes)

module.exports = router;
