// komponen
function Komponen(props){
  const { children } = props;

  return (
    <>
      <h1>Di bawah ini adalah sub komponen</h1>
      {children}
    </>
  );
}

// sub komponen pertama
function SubKomponen1(props) {
  return (
  <>
    <h5>SubKomponen1: {props.nilai}</h5>
  </>
  )
}

// sub komponen kedua
const SubKomponen2 = ({nilai}) => {
  return (
    <>
      <h5>SubKomponen2: {nilai}</h5>
    </>
    )
}

// SubKomponen 1 dan 2 pass nilai argument nya melalui atribut.
// Komponen pass SubKomponen 1 dan 2 melalui children props.
function App() {
  return (
    <>
      <Komponen>
        <SubKomponen1 nilai="Satu"/>
        <SubKomponen2 nilai="Dua"/>
      </Komponen>
    </>
  );
}

export default App;
