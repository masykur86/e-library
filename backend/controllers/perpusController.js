import asyncHandler from 'express-async-handler'
import Perpus from '../models/perpusModel.js'

// @desc FETCH all products
// @route GET /api/perpus
// @access Public

const getperpus = asyncHandler(async (req, res) => {
  const perpus = await Perpus.find({})
  res.json(perpus)
})

// @desc FETCH single products
// @route GET /api/products/:id
// @access Public
const getPerpusById = asyncHandler(async (req, res) => {
  const bacaan = await Perpus.findById(req.params.id)
  if (bacaan) {
    res.json(bacaan)
  } else {
    // kalo menggunakan middleware tidak perlu pake res status
    //   res.status(404).json({ message: 'product not found' })
    throw new Error('produk tidak ada')
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Perpus.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const {
    nama,
    jumlah,
    jenis,
    tempatTerbit,
    penerbit,
    tahunTerbit,
    noKlasifikasi,
    asal,
    deskripsi,
    keterangan,
    noPustaka,
    kepengarangan,
    jilid,
    edisi,
    cetakan,
    isbn,
    noUrutPeraturan,
    jenisPeraturan,
    noTahunPeraturan,
    noLnTln,
    asnaf,
    noUrut,
    nomor,
    volume,
    kala_terbit,
    issn,
    link,
  } = req.body

  const dataExist = await Perpus.findOne({ nama })

  if (dataExist) {
    res.status(400)
    throw new Error('Judul Sudah digunakan')
  }

  const createdBook = await Perpus.create(req.body)

  res.status(201).json(createdBook)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updatePerpus = asyncHandler(async (req, res) => {
  const {
    nama,
    jumlah,
    jenis,
    tempatTerbit,
    penerbit,
    tahunTerbit,
    noKlasifikasi,
    asal,
    deskripsi,
    keterangan,
    noPustaka,
    kepengarangan,
    jilid,
    edisi,
    cetakan,
    isbn,
    noUrutPeraturan,
    jenisPeraturan,
    noTahunPeraturan,
    noLnTln,
    asnaf,
    noUrut,
    nomor,
    volume,
    kala_terbit,
    issn,
  } = req.body

  const perpus = await Perpus.findById(req.params.id)

  if (perpus) {
    perpus.nama = nama
    perpus.jumlah = jumlah
    perpus.jenis = jenis
    perpus.tempatTerbit = tempatTerbit
    perpus.penerbit = penerbit
    perpus.tahunTerbit = tahunTerbit
    perpus.noKlasifikasi = noKlasifikasi
    perpus.asal = asal
    perpus.deskripsi = deskripsi
    perpus.keterangan = keterangan
    perpus.link = link

    if (jenis === 'Buku' || 'Referensi') {
      perpus.noPustaka = noPustaka
      perpus.kepengarangan = kepengarangan
      perpus.jilid = jilid
      perpus.edisi = edisi
      perpus.cetakan = cetakan
      perpus.isbn = isbn
    } else if (jenis === 'Peraturan') {
      perpus.noUrutPeraturan = noUrutPeraturan
      perpus.jenisPeraturan = jenisPeraturan
      perpus.noTahunPeraturan = noTahunPeraturan
      perpus.noLnTln = noLnTln
    } else {
      perpus.noUrut = noUrut
      perpus.nomor = nomor
      perpus.volume = volume
      perpus.kala_terbit = kala_terbit
      perpus.issn = issn
    }

    const updatedPerpus = await perpus.save()
    res.json(updatedPerpus)
  } else {
    res.status(404)
    throw new Error('Bacaan Tidak Ditemukan')
  }
})

export { getperpus, getPerpusById, deleteProduct, createProduct, updatePerpus }
