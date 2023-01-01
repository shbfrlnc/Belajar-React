function App() {
  // perhatikan bahwa onClick ditulis dengan camelcase.
  // selain itu, onClick di-assign dengan anonymous function yang isinya alert
  // agar callback tidak langsung dijalankan saat aplikasi dimulai
  // melainkan saat tombol diklik. Maksudnya: onClick={ () => { alert(); } } bukan: onClick={ alert() }
  return (
    <>
      <h1>Klik Tombol Ini</h1>
      <button type="button" onClick={ ()=>{ alert("button clicked"); }}>Click Me</button>
    </>
  );
}

export default App;
