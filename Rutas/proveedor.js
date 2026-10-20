const express = require('express');

const router = express.Router();

const empresaController = require('../Controller/empresaController');
router.get('/', empresaController.list);
router.get('/:idempresa', empresaController.edit);
router.post('/', empresaController.save);
router.put('/:idempresa', empresaController.update);
router.delete('/:idempresa', empresaController.delete);

module.exports = router;