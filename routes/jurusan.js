const express = require('express');
const router = express.Router();
const jurusanController = require('./../controllers/jurusanController');

router.get('/get-jurusan', jurusanController.getDataJurusan);
router.post('/add-jurusan', jurusanController.addJurusan);

module.exports = router;