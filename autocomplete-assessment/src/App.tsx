import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  var [rawUserData, setRawUserData] = useState([]);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState();

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {

        if (response.ok) {
          return response.json();
        }
        throw response;

      })
      .then((data) => {

        setRawUserData(data);

      })
      .catch((error) => {

        console.log(`${error}`);
        setError(error);

      })
      .finally(() => {

        if (rawUserData) {
          setLoading(false);
        }

      });
  }, []);

  if (loading) { 
    return "Loading App...";
  }

  if (error) {
    return "Something went wrong.";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
