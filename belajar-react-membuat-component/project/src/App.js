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
