# Belajar React Menggunakan Form

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

Kita bisa menggunakan form dengan React.

Caranya bisa Anda lihat di kode ini.

```
// file: src/App.js

import { useState } from 'react';

function App() {
  // di sini kita mendeklarasikan variabel dengan react hook bernama useState.
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [ekstra, setEkstra] = useState("Coklat");
  
  const handleSubmit = (e) => {
    // prevent default mencegah page refresh.
    e.preventDefault();

    // kumpulkan variabel dan buat output teks nya.
    const teksAkhir = `
    Nama: ${nama}\n
    Alamat: ${alamat}\n
    Deskripsi: ${deskripsi}\n
    Ekstra: ${ekstra}\n
    `;

    // tampilkan popup.
    alert(teksAkhir);
  }

  return (
    <>
      <h1>Contoh Form</h1>
      <form onSubmit={handleSubmit}>
        {/* onChange terjadi setiap karakter diketik */}
        <label>Nama:</label>
        <input type="text" value={ nama } onChange={(e) => { console.log(e.target.value); setNama(e.target.value) }} />
        <br />

        <label>Alamat:</label>
        <input type="text" value={ alamat } onChange={(e) => { setAlamat(e.target.value) }} />
        <br />

        {/* di React, nilai textarea ada di value, bukan di antara tag pembuka dan penutup. */}
        <label>Deskripsi:</label>
        <textarea value={ deskripsi } onChange={(e) => { setDeskripsi(e.target.value) }} />
        <br />

        {/* di React, nilai select terpilih tidak menggunakan atribut selected. */}
        <label>Ekstra:</label>
        <select value={ ekstra } onChange={(e) => { setEkstra(e.target.value) }}>
          <option value="Coklat">Coklat</option>
          <option value="Keju">Keju</option>
          <option value="Gula">Gula</option>
        </select>
        <br />

        <input type="submit" />
        <br />
      </form>
    </>
  );
}

export default App;
```
