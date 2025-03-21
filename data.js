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

console.log(nomorRumah + 4);

// 2. number (angka => yang bisa di operasikan menggukan kaidah matematika)
const jumlahPenduduk = 1004;

console.log(jumlahPenduduk - 2);
console.log(Math.ceil(jumlahPenduduk / 9)); // pembulatan bilangan ke atas

// 3. array ( kumpulan beberada data) => kurung siku
const pemudaWonocolo = ['amir', 'aris', 'anggita', nama, jumlahPenduduk];

console.log(pemudaWonocolo);

// 4. object (data yang mempunyai property) => kurung kurawal
const sabun = {
	nama: 'lifeboy',
	jenis: 'cair',
	ukuran: '800ml',
	harga: 30000,
};

// 5. undefined (data yang belum dibuat)
// akan mencari data sabun property kemasan

// 6 null (himpunan kosong)
const desa = null;

// Mengakses data
// 1. string -> dengan menggunakan kurung siku -> diawal dimulai bari 0
const meja = 'Kayu Jati';

console.log(meja[5]);
console.log(meja.length); // menghitung panjang

// mengakses data terakhir
console.log(meja[meja.length - 1]);

// 2 number -> cara ngakses -> operasi math -> dijadikan string
const hargaMinyak = 37549;

// diuabah jadi string -> .toString() ataus `${}`
console.log('ribuan', hargaMinyak.toString()[1]);
console.log('ratusan', `${hargaMinyak}`[2]);

const angkaPuluhanribu = Math.floor(hargaMinyak / 10000);
console.log('puluhanribu', angkaPuluhanribu);

const ribuan = hargaMinyak - angkaPuluhanribu * 10000;
const angkaRibuan = Math.floor(ribuan / 1000);
console.log('ribuan', angkaRibuan);

// modulo -> sisa pembagian
console.log('ratusan', Math.floor(hargaMinyak % 1000/100));
console.log('satuan');
console.log('pulahan');

// 3 Array => mengakses denga menggunakan [] -> dimulai dari 0
const buahFavorit = ['apel', 'mangga', 'durian']

console.log(buahFavorit[2])

// menambahkan data ke array
// a.  push -> menambahkan di belakang
buahFavorit.push('jeruk')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 4 Object => dengan menulikan nama objeck sisertai titik (.)

console.log('Nama sabun:', sabun.nama)

// menambahkan property baru 
sabun.pembuat = {
  namaPt: 'PT wings',
  alamat: 'jakarta'
}

console.log(sabun.pembuat.namaPt)