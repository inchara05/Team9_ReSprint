import './App.css';

function startClick() {
  alert("Tap to start works");
}

function App() {
  return (
    <>
    <div className="App">
      Welcome to the Balloon Burst Game!
    </div>
    <div>
        <button onClick={startClick}>
          Tap to start
        </button>
      </div></>
  );
}


export default App;
