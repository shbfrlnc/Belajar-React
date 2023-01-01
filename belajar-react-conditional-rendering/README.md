# Belajar React Menggunakan Props

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

Kita bisa me-render komponen React secara conditional.

Artinya, kita bisa me-render komponen secara selektif berdasarkan kondisi yang diberikan.

```
// file: src/App.js

// membuat komponen Apple
function Apple() {
  return (
    <>
      <h1>Ini adalah Apple</h1>
    </>
  )
}

// membuat komponen Orange
const Orange = () => {
  return (
    <>
      <h1>Ini adalah Orange</h1>
    </>
    )
}

// kondisi bisa dibuat seperti ini
// atau seperti di kondisi2 di bawah dengan cara inline
function BeriKondisi(props) {
  const kondisi1 = props.isApple;

  if(kondisi1){
    return (
      <Apple />
    )
  } else {
    return (
      <Orange />
    )
  }
}

function App() {
  const kondisi2 = false;
  return (
    <>
      <BeriKondisi isApple={true} />
      {/* pengkondisian secara inline */ }
      {kondisi2 ? <Apple /> : <Orange />}
    </>
  );
}

export default App;
```
