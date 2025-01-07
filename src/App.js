import logo from "./trademarks/horse-tech-inc-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontWeight: "bolder" }}>Welcome to Horse</p>
      </header>
    </div>
  );
}

export default App;
