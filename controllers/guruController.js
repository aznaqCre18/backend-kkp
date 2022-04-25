const models = require('./../models');
const defaultMessage = require('./../utils/defaultMessage');

const addGuru = async (req, res) => {
    const {
        nip,
        nama,
        email,
        tempatLahir,
        tanggalLahir,
        jenisKelamin,
        gelarDepan,
        gelarBelakang,
        alamat,
        foto,
        mulaiBertugas,
    } = req.body;

    try {
        const getAllDataGuru = await models.guru.findAll({ where: { nip } });

        if(getAllDataGuru.length > 0) {
            res.status(500).send(
                defaultMessage(500, null, `Gagal, guru dengan nip ${nip} sudah ada!`)
            );
        } else {
            const tambahDataGuru = await models.guru.create({
                nip,
                nama,
                email,
                tempatLahir,
                tanggalLahir,
                jenisKelamin,
                gelarDepan,
                gelarBelakang,
                alamat,
                foto,
                mulaiBertugas,
            });
    
            res.status(200).send(
                defaultMessage(200, tambahDataGuru, 'Berhasil tambah data guru')
            );
        }

    } catch (error) {
        res.status(500).send(
            defaultMessage(500, null, 'Gagal tambah data guru')
        );
    }
}

const getAllDataGuru = async (req, res) => {
    try {
        const dataGuru = await models.guru.findAll({
            include: [
                {
                    model: models.kelas,
                    as: 'kelas',
                    attributes: ['id', 'kodeKelas', 'namaKelas'],
                    include: {
                        model: models.jurusan,
                        as: 'jurusan',
                        attributes: ['id', 'kodeJurusan', 'namaJurusan']
                    }
                }
            ]
        });

        res.status(200).send(
            defaultMessage(200, dataGuru, 'Berhasil get semua data guru')
        );
    } catch (error) {
        console.log(error);
        res.status(500).send(
            defaultMessage(500, null, 'Gagal get data guru')
        );
    }
}

const editDataGuru = async (req, res) => {
    const {
        nip,
        nama,
        email,
        tempatLahir,
        tanggalLahir,
        jenisKelamin,
        gelarDepan,
        gelarBelakang,
        alamat,
        foto,
        mulaiBertugas
    } = req.body;
    const { id } = req.params;

    try {
        const dataGuru = await models.guru.findOne({
            where: { id }
        });

        dataGuru.nip = nip;
        dataGuru.nama = nama,
        dataGuru.email = email,
        dataGuru.tempatLahir = tempatLahir;
        dataGuru.tanggalLahir = tanggalLahir;
        dataGuru.jenisKelamin = jenisKelamin;
        dataGuru.gelarDepan = gelarDepan;
        dataGuru.gelarBelakang = gelarBelakang;
        dataGuru.alamat = alamat;
        dataGuru.foto = foto;
        dataGuru.mulaiBertugas = mulaiBertugas;

        dataGuru.save();

        res.status(200).send(
            defaultMessage(200, dataGuru, 'Sukses edit data guru')
        )
    } catch (error) {
        res.status(500).send(
            defaultMessage(500, error, 'Gagal edit data guru')
        )
    }
}

const deleteDataGuru = async (req, res) => {
    const { id } = req.params
    try {
        const dataGuru = await models.guru.findOne({
            where: { id }
        });

        dataGuru.destroy();
        res.status(200).send(
            defaultMessage(200, null, 'Sukses hapus data guru')
        )
    } catch (error) {
        res.status(500).send(
            defaultMessage(500, null, 'Gagal edit data guru')
        )
    }
}

module.exports = { addGuru, getAllDataGuru, editDataGuru, deleteDataGuru }