# Belajar React Menggunakan List

## Cara Mencoba Kode ini

Untuk mencoba kode ini, download folder project.

Selanjutnya, masuk ke dalam folder project via terminal.

Selanjutnya, jalankan:

```
npm install
```

Selanjutnya, jalankan:

```
npm run start
```

Kemudian, buka browser Anda ke http://localhost:3000

## Pendahuluan

Kita bisa me-render list dari komponen di React.

List ini bisa berupa array maupun array of objects.

Props khusus bernama Key dibutuhkan agar React tidak memunculkan error di console.

Key sewajarnya diambil dari id yang diberikan API maupun database, walaupun memungkinkan juga dari index dari map atau angka acak (asalkan unik).

```
// file: src/App.js

const arraySederhana = [
  "Buku 1",
  "Buku 2",
  "Buku 3"
];

// list dengan array sederhana
function ListDenganArraySederhana() {
  return (
    <>
      <h1>list dengan array sederhana</h1>
      <ul>
      { 
        arraySederhana.map((item, index) => {
          return <li key={index}>{ item }</li>;
        })
      }
      </ul>
    </>
  )
}

const arrayOfObject = [
  {
    id: 0,
    nama: "Mobil 1"
  },
  {
    id: 1,
    nama: "Mobil 2"
  },
  {
    id: 2,
    nama: "Mobil 3"
  },
];

// list dengan array of object
const ListDenganArrayOfObject = () => {
  return (
    <>
      <h1>list dengan array of object</h1>
      <ul>
      { 
        arrayOfObject.map((item) => {
          return <li key={item.id}>{ item.nama }</li>;
        })
      }
      </ul>
    </>
    )
}

const arrayOfObjectLainnya = [
  {
    id: 0,
    nama: "Karakter 1",
    deskripsi: "Deskripsi Karakter 1"
  },
  {
    id: 1,
    nama: "Karakter 2",
    deskripsi: "Deskripsi Karakter 2"
  },
  {
    id: 2,
    nama: "Karakter 3",
    deskripsi: "Deskripsi Karakter 3"
  },
];

// list dengan array of object dengan spread operator
function Member({ nama, deskripsi }) {
  // penggunaan {nama, deskripsi} di dalam argument
  // masih serupa dengan const {nama, deskripsi} = props; 
  // yang bisa dilakukan di sini.
  return (
    <ul>
      <li><h5>{ nama }</h5></li>
      <li><h5>{ deskripsi }</h5></li>
    </ul>
  )
}

function ListDenganArrayOfObjectSpreadOperator() {
  // penggunaan {...item} akan menyebar nama dan deskripsi dalam props
  // kemudian akan di-destructure di komponen member (di atas) menjadi nama dan deskripsi.
  return (
    <>
      <h1>list dengan array of object dengan spread operator</h1>
      { arrayOfObjectLainnya.map((item) => { return <Member key={item.id} {...item}/>}) }
    </>
  );
}

function App() {
  return (
    <>
      <ListDenganArraySederhana />
      <ListDenganArrayOfObject />
      <ListDenganArrayOfObjectSpreadOperator />
    </>
  );
}

export default App;
```
