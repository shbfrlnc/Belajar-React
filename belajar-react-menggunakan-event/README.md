# Belajar React Menggunakan Event

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

Kita bisa menggunakan event di React serupa dengan HTML biasa.

Bedanya, sintaks dari event di React ditulis dengan camelcase.

Misalnya, jika di HTML biasa adalah onclick, maka di React ditulis onClick.

```
// file: src/App.js

function App() {
  // perhatikan bahwa onClick ditulis dengan camelcase.
  // selain itu, onClick di-assign dengan anonymous function yang isinya alert
  // agar callback tidak langsung dijalankan saat aplikasi dimulai
  // melainkan saat tombol diklik. Maksudnya: onClick={ () => { alert(); } } bukan: onClick={ alert() }
  return (
    <>
      <h1>Klik Tombol Ini</h1>
      <button type="button" onClick={ ()=>{ alert("button clicked"); }}>Click Me</button>
    </>
  );
}

export default App;
```
