import React from "react";
import './App.css';
import Fetch from './fetch';

function App() {
  
const [data, setData] = React.useState(null);

React.useEffect(() => {
  fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message("Hello from server side")));


}, []);
  return (
    <div className="App">
      <Fetch />
      <header className="App-header">
        <img src="https://i1.sndcdn.com/artworks-000102016325-08ohpv-t500x500.jpg" className="App-logo" alt="logo" />
        <p>
          {!data ? "Esto es una app de React HOLAA" :data}
        </p>
        <a
          className="App-link"
          href="https://youtube.com/shorts/4xnvSbGaYWo?feature=share"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quien?
        </a>
      </header>
    </div>
  );
}

export default App;
