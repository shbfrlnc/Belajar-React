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
