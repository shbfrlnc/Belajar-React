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

Component React bisa diberi argument dalam bentuk props.

```
// file: src/App.js

// bisa begini
function MyComponent1(props) {
  return (
  <>
    <h1>My Component1: {props.nilai}</h1>
  </>
  )
}

// atau begini
// di sini dilakukan destructuring dari props menjadi nilai.
// kurang lebih serupa dengan saat kita mengimpor modul.
const MyComponent2 = ({nilai}) => {
  return (
    <>
      <h1>My Component2: {nilai}</h1>
    </>
    )
}

// pass nilai argument nya melalui atribut.
function App() {
  return (
    <>
      <MyComponent1 nilai="Satu" />
      <MyComponent2 nilai="Dua" />
    </>
  );
}

export default App;
```
