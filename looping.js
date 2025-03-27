// cara mengakses data 1 per 1
// bisa di misalkan sebuah deret (0, 1, ....)

for (
  let i = 0;
  i < 10;
  i++
) {
	console.log(2*(i+1));
}

const nama = 'Amir makruf'

for (let i = 0; i < nama.length; i++) {
  console.log(nama[i])
}

const barang = ['sabun', 'sikat', 'odol']

for (let i = 0; i < barang.length; i++) {
  const element = barang[i];

  console.log(element)
}

const sabun = [
  {
    nama: 'lifeboy',
    harga: '2000'
  },
  {
    nama: 'nuvo',
    harga: '1800'
  },
  {
    nama: 'giv',
    harga: '1400'
  },
  {
    nama: 'sinsui',
    harga: '2400'
  },
];

for (let i = 0; i < sabun.length; i++) {
  const element = sabun[i].nama;
  
  console.log(element)
}

const jenengku = 'susilo hartomo'

// mau menghitung banyak huruf 'o' di jenengku
let hitungHurufO = 0
for (let i = 0; i < jenengku.length; i++) {
  const huruf = jenengku[i];
  
  if (huruf == 'o') {
   hitungHurufO = hitungHurufO + 1;
    console.log('ini huruf o')
  }
}

console.log('Total huruf o ada', hitungHurufO)