const express = require('express');
const router = express.Router();
const siswaController = require('./../controllers/siswaController');

router.get('/get-siswa', siswaController.getDataSiswa);
router.post('/add-siswa', siswaController.addSiswa);
router.put('/edit-siswa/:id', siswaController.editDataSiswa);
router.delete('/delete-siswa/:id', siswaController.deleteDataSiswa);

module.exports = router;