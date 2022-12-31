# Belajar React Membuat Component

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

React memiliki dua jenis component, yakni class component dan function component.

Dalam bahasan kali ini, kita hanya menggunakan function component.

Untuk membuat function component:

```
// file: src/App.js

// bisa begini
function MyComponent1() {
  return (
  <>
    <h1>My Component1</h1>
  </>
  )
}

// atau begini
const MyComponent2 = () => {
  return (
    <>
      <h1>My Component2</h1>
    </>
    )
}

// App sendiri merupakan component
function App() {
  return (
    <>
      <MyComponent1/>
      <MyComponent2/>
    </>
  );
}

export default App;
```

Selanjutnya, Anda bisa memisahkan component-component tadi pada file .js tersendiri.

Caranya seperti yang ada pada App component, dengan menggunakan export.
