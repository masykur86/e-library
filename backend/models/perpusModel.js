import mongoose from 'mongoose' // Erase if already required

const bukuRefSchema = mongoose.Schema(
  {
    noPustaka: { type: Number, required: false },
    kepengarangan: { type: String, required: false },
    jilid: { type: String, required: false },
    edisi: { type: String, required: false },
    cetakan: { type: String, required: false },
    isbn: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)
const peraturanRefSchema = mongoose.Schema(
  {
    noUrutPeraturan: { type: Number, required: false },
    jenisPeraturan: { type: String, required: false },
    noTahunPeraturan: { type: String, required: false },
    noLnTln: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)
const majalahRefSchema = mongoose.Schema(
  {
    noUrut: { type: Number, required: false },
    nomor: { type: Number, required: false },
    volume: { type: String, required: false },
    kala_terbit: { type: String, required: false },
    issn: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)

// Declare the Schema of the Mongo model
var perpusSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    jumlah: {
      type: String,
      required: false,
    },

    jenis: {
      type: String,
      required: false,
    },
    tempatTerbit: {
      type: String,
      required: false,
    },
    penerbit: {
      type: String,
      required: false,
    },
    tahunTerbit: {
      type: String,
      required: false,
    },
    noKlasifikasi: {
      type: String,
      required: false,
    },
    asal: {
      type: String,
      required: false,
    },
    deskripsi: {
      type: String,
      required: false,
    },
    keterangan: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    noPustaka: { type: String, required: false },
    kepengarangan: { type: String, required: false },
    jilid: { type: String, required: false },
    edisi: { type: String, required: false },
    cetakan: { type: String, required: false },
    isbn: { type: String, required: false },
    noUrutPeraturan: { type: String, required: false },
    jenisPeraturan: { type: String, required: false },
    noTahunPeraturan: { type: String, required: false },
    noLnTln: { type: String, required: false },
    noUrut: { type: String, required: false },
    nomor: { type: String, required: false },
    volume: { type: String, required: false },
    kala_terbit: { type: String, required: false },
    issn: { type: String, required: false },
  },
  {
    timestamps: true,
  }
)

//Export the model
const Perpus = mongoose.model('Perpus', perpusSchema)
export default Perpus
