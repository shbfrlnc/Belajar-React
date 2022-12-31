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
