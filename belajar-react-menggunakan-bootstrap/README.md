# Belajar React Menggunakan Bootstrap

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

Kita bisa menggunakan react-bootstrap di dalam aplikasi React.

Untuk menggunakannya, buat project React terlebih dahulu seperti yang dijelaskan di artikel sebelumnya.

Langkah selanjutnya adalah menghapus file-file yang kurang perlu ini:

- src/App.css
- src/App.test.js
- src/index.css
- src/logo.svg
- src/reportWebVitals.js
- src/setupTests.js

Selanjutnya, install react-bootstrap:

```
npm install react-bootstrap bootstrap
```

Selanjutnya, ubah src/index.js menjadi:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// harus diimport
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Dan ubah src/App.js menjadi:

```
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button variant="primary" onClick={() => {alert("hello world")} }>Klik</Button>
    </>
  );
}

export default App;
```

Dan ubah public/index.html menjadi:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Hasilnya, akan muncul halaman berjudul Hello World dengan sebuah tombol bertuliskan "Klik" berwarna biru.
