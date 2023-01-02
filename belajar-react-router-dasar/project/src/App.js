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
