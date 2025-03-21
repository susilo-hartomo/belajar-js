// belajar basic data
// a. membuat variable (const, let)
// const suatu data tidak dapat di ubah2 lagi
// let suatu data yang bisa di ubah2 lagi
const nama = 'Amir makruf';
let alamat = 'wonocolo';

console.log(nama);
console.log(alamat);

alamat = 'prembun';
console.log(alamat);

// b. jenis data
// 1. string (kalimat, kata, huruf)
//  harus di bungkus dengan menggunakan ', ", `
const masjid = "wono'colo";
const nomorRumah = `2`;

console.log(nomorRumah + 4)

// 2. number (angka => yang bisa di operasikan menggukan kaidah matematika)
const jumlahPenduduk = 1004;

console.log(jumlahPenduduk - 2);
console.log(Math.ceil(jumlahPenduduk / 9)) // pembulatan bilangan ke atas

// 3. array ( kumpulan beberada data) => kurung siku
const pemudaWonocolo = ['amir', 'aris', 'anggita', nama, jumlahPenduduk]

console.log(pemudaWonocolo)

// 4. object (data yang mempunyai property) => kurung kurawal
const sabun = {
  nama: 'lifeboy',
  jenis: 'cair',
  ukuran: '800ml',
  harga: 30000
}

// 5. undefined (data yang belum dibuat)
// akan mencari data sabun property kemasan

// 6 null (himpunan kosong)
const desa = null