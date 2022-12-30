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
