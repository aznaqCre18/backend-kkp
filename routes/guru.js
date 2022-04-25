const express = require('express');
const router = express.Router();
const guruController = require('./../controllers/guruController');

router.get('/get-all-guru', guruController.getAllDataGuru);
router.post('/add-guru', guruController.addGuru);
router.put('/edit-guru/:id', guruController.editDataGuru);
router.delete('/delete-guru/:id', guruController.deleteDataGuru);

module.exports = router;