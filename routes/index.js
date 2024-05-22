var express = require('express');
const { index, about, portfolio, servicios, contact } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', index );
router.get('/about', about );
router.get('/protfolio', portfolio );
router.get('/servicios', servicios );
router.get('/contact', contact );

module.exports = router;
