const models = require('../models');
const defaultMessage = require('./../utils/defaultMessage');

const addKelas = async (req, res) => {
    const { kodeKelas, namaKelas, idWaliKelas, idJurusan } = req.body;

    try {
        const getAllDataKelas = await models.kelas.findAll({
            where: { kodeKelas }
        });

        const getAllDataKelasByIdWaliKelas = await models.kelas.findAll({
            where: { idWaliKelas: idWaliKelas }
        }); 

        if(getAllDataKelasByIdWaliKelas.length > 0) {
            res.status(500).send(
                defaultMessage(500, null, `Gagal tambah data kelas karna wali kelas dengan id "${idWaliKelas}" sudah menjadi wali kelas di kelas lain!`)
            );
        } else if(getAllDataKelas.length > 0) {
            getAllDataKelas.map(async (item, idx) => {
                if(item.idJurusan === idJurusan) {
                    res.status(500).send(
                        defaultMessage(500, null, `Gagal tambah data kelas karna kelas dengan id jurusan '${idJurusan}' sudah ada!`)
                    );      
                } else {
                    const addDataKelas = await models.kelas.create({
                        kodeKelas,
                        namaKelas,
                        idWaliKelas,
                        idJurusan
                    });
            
                    res.status(200).send(
                        defaultMessage(200, addDataKelas, 'Berhasil tambah data kelas')
                    );
                }
            })
        } else {
            const addDataKelas = await models.kelas.create({
                kodeKelas,
                namaKelas,
                idWaliKelas,
                idJurusan
            });
    
            res.status(200).send(
                defaultMessage(200, addDataKelas, 'Berhasil tambah data kelas')
            );
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(
            defaultMessage(500, null, 'Gagal tambah data kelas')
        )
    }
};

const getAllDataKelas = async (req, res) => {
    try {
        const dataKelas = await models.kelas.findAll({
            attributes: {
                exclude: ['idWaliKelas', 'createdAt', 'updatedAt']
            },
            include: [
                {
                    model: models.guru,
                    as: 'guru',
                    attributes: ['id', 'nip', 'nama', 'gelarDepan', 'gelarBelakang']
                },
                {
                    model: models.jurusan,
                    as: 'jurusan',
                    attributes: ['id', 'kodeJurusan', 'namaJurusan']
                },
                {
                    model: models.siswa,
                    as: 'siswa',
                    attributes: ['nisn', 'nis', 'namaLengkap']
                },
            ]
        });

        res.status(200).send(
            defaultMessage(200, dataKelas, 'Berhasil tambah data kelas')
        )
    } catch (error) {
        res.status(500).send(
            defaultMessage(500, null, 'Gagal get semua data kelas')
        )
    }
}

const getDataKelasById = async (req, res) => {
    const { id } = req.params;
    try {
        const dataKelas = await models.kelas.findOne({
            where: { id: id },
            attributes: {
                exclude: ['idWaliKelas', 'createdAt', 'updatedAt']
            },
            include: [
                {
                    model: models.guru,
                    as: 'guru',
                    attributes: ['id', 'nip', 'nama', 'gelarDepan', 'gelarBelakang']
                },
                {
                    model: models.jurusan,
                    as: 'jurusan',
                    attributes: ['id', 'kodeJurusan', 'namaJurusan']
                },
                {
                    model: models.siswa,
                    as: 'siswa',
                    attributes: ['nisn', 'nis', 'namaLengkap']
                },
            ]
        });

        res.status(200).send(
            defaultMessage(200, dataKelas, 'success')
        )
    } catch (error) {
        res.status(500).send(
            defaultMessage(500, null, 'failed')
        )
    }
}

const editDataKelas = async (req, res) => {
    const { id } = req.params;
    const { 
        kodeKelas,
        namaKelas,
        idWaliKelas
     } = req.body;

    try {
        const dataKelas = await models.kelas.findOne({
            where: { id }
        });

        dataKelas.kodeKelas = kodeKelas;
        dataKelas.namaKelas = namaKelas;
        dataKelas.idWaliKelas = idWaliKelas;

        dataKelas.save();

        res.status(200).send(
            defaultMessage(200, dataKelas, 'Berhasil edit data kelas')
        )
    } catch (error) {
        res.status(500).send(
            defaultMessage(500, null, 'Gagal edit data kelas')
        )
    }
}

const deleteDataKelas = async (req, res) => {
    const { id } = req.params
    try {
        const dataKelas = await models.kelas.findOne({
            where: { id }
        });

        dataKelas.destroy();
        res.status(200).send(
            defaultMessage(200, null, 'Sukses hapus data kelas')
        )
    } catch (error) {
        res.status(500).send(
            defaultMessage(500, null, 'Gagal hapus data kelas')
        )
    }
}

module.exports = { addKelas, getAllDataKelas, editDataKelas, deleteDataKelas, getDataKelasById }