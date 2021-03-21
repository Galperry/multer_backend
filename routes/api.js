var express = require('express');
var router = express.Router();
var apiController = require('../controllers/ApiController')


/* RESTFUL API */

router.get('/employees', apiController.findAll);

router.get('/employees/:id', apiController.findOneEmployee);

router.post('/employees', apiController.addEmployee);

router.put('/employees/:id', apiController.update);

router.patch('/employees/:id', apiController.update);

router.delete('/employees/:id', apiController.deleteEmployee);


module.exports = router;