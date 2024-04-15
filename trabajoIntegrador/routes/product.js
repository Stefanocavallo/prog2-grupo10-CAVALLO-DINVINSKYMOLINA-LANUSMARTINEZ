var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController');

router.get('/product', productosController.index)

router.get('/product/:idProduct', productosController.product);

router.get('/productAdd', productosController.add);

router.get('/search', productosController.search);


module.exports = router;  