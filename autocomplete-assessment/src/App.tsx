import { useEffect, useState } from "react";
import "./App.css";
import UserAutocomplete from "./components/UserAutocomplete";

function App() {

  var [rawUserData, setRawUserData] = useState([]);
  var [loading, setLoading] = useState(true);
  var [error, setError] = useState();

  useEffect(() => {
    fetchUserData();
  }, [rawUserData]);

  function fetchUserData() {
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
  }

  return (
    <div className="App">
      <header className="App-header">
        {error && <p className="user-text">Something went wrong.</p>}
        {loading && !error && <p className="user-text">Loading App...</p>}
        {!loading && !error && <UserAutocomplete data={rawUserData} />}
      </header>
    </div>
  );
}

export default App;
