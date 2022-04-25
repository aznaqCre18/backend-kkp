const express = require('express');
const router = express.Router();
const kelasController = require('./../controllers/kelasController');

router.get('/get-kelas', kelasController.getAllDataKelas);
router.get('/get-kelas/:id', kelasController.getDataKelasById);
router.post('/add-kelas', kelasController.addKelas);
router.put('/edit-kelas/:id', kelasController.editDataKelas);
router.delete('/delete-kelas/:id', kelasController.deleteDataKelas);

module.exports = router;