# Belajar React Router Dasar

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

Untuk menggunakan React Router, install dengan:

```
npm install react-router-dom
```

Jika Anda belum menginstallnya.

Berikut ini adalah kode-kode nya, baca komentarnya.

```
// file: App.js

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {
  Container
} from 'react-bootstrap';

// pages
import Home from './Home';
import About from './About';
import Detail from './Detail';
import Error from './Error';

// components
import Header from './Header';

function App() {
  // beginilah struktur routing sederhananya.
  // BrowserRouter harus di atas Routes dan Route
  // /detail/:id, :id nya bisa bernilai apapun dan nanti
  // bisa diambil.
  // :id tidak harus :id bisa :nama atau yang lainnya.
  
  return (
    <>
      <BrowserRouter>
          <Container>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
```

```
// file: Home.js

import {
    Card,
    Badge
} from 'react-bootstrap';

import {
    Link
} from 'react-router-dom';

import data from './data';

function Home(){
    // komponen ini membuat list dari data yang disediakan.
    // dalam list ini, digunakan komponen Card dari React Bootstrap.
    
    return (
        <>
            <h3>Home</h3>
            {
                data.map((item) => {
                    return (
                        <Card className="mb-3" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{ item.nama }</Card.Title>
                                <Card.Text>
                                { item.deskripsi }
                                </Card.Text>
                                <Link to={`/detail/${item.id}`}><Badge pill bg="danger" className="float-end me-2">Detail</Badge></Link>
                            </Card.Body>
                        </Card>
                    );
                })
            }
        </>
    );
}

export default Home;
```

```
// file: About.js

function About(){
    // komponen ini menampilkan about.
    
    return (
        <>
            <h3>About</h3>
            <p>Ini adalah contoh penggunaan React Router dan React Bootstrap.</p>
        </>
    );
}

export default About;
```

```
// file: Detail.js
import {
    Badge
} from 'react-bootstrap';

import { 
    useState,
    useEffect
} from 'react';

import {
    useParams,
    Link,
} from 'react-router-dom';

import data from './data';

function Detail(){
    // useParams tujuannya mendapatkan id yang di-pass dari home.
    // tergantung apakah :id atau :nama atau :index yang Anda gunakan,
    // yang di-destructure bisa { id } { nama } atau { index }.
    // agar lebih paham, coba console.log(useParams()).

    const { id } = useParams();
    const [ item, setItem ] = useState({});

    useEffect(() => {
        // cari item dengan id tadi. parseInt digunakan karena id merupakan string.
        const dapatItem = data.find((item) => {
            return item.id === parseInt(id);
        });

        setItem(dapatItem);
    }, [id]);

    return (
        <>
            <h3>Detail: { item.nama }</h3>
            <ul>
                <li>{ item.deskripsi }</li>
            </ul>
            <Link to="/"><Badge pill bg="danger" className="float-end me-2">Kembali</Badge></Link>
        </>
    );
}

export default Detail;
```

```
// file: Error.js

function Error(){
    // komponen ini menampilkan error.
    
    return (
        <>
            <h3>Error 404</h3>
            <p>Not Found</p>
        </>
    );
}

export default Error;
```

```
// file: Header.js

import {
    Link
} from 'react-router-dom';

import {
    Col,
    Row,
    Badge
} from 'react-bootstrap';

function Header(){
    // berikut ini adalah navbar dari aplikasi ini.
    // /detail saya comment karena akan dinavigasi dari list yang ada di home.
    // /randomwords bisa apapun yang tidak terdaftar dalam routes di App.js. tujuannya untuk mendapatkan error page.
    
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <h1>Belajar React Router Dasar</h1>

                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Link to="/"><Badge pill bg="primary" className="float-end me-2">Home</Badge></Link>
                    {/* <Link to="/detail"><Badge pill bg="primary" className="float-end me-2">Detail</Badge></Link> */}
                    <Link to="/about"><Badge pill bg="primary" className="float-end me-2">About</Badge></Link>
                    <Link to="/randomwords"><Badge pill bg="primary" className="float-end me-2">Test Error</Badge></Link>
                </Col>
            </Row>
            <div className='mb-5'></div>
        </>
        
    );
}

export default Header;
```

```
// file: data.js

// ini adalah data yang akan digunakan dalam komponen nantinya.

const data = [
    {
        id: 1,
        nama: "Nama 1",
        deskripsi: "Deskripsi 1"
    },
    {
        id: 2,
        nama: "Nama 2",
        deskripsi: "Deskripsi 2"
    },
    {
        id: 3,
        nama: "Nama 3",
        deskripsi: "Deskripsi 3"
    },
]

export default data;
```