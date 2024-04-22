import { useEffect, useState } from "react";
import "./App.css";
import UserAutocomplete from "./components/UserAutocomplete";

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
  }, [rawUserData]);

  if (loading) { 
    return (<p>"Loading App..."</p>);
  }

  if (error) {
    return (<p>"Something went wrong."</p>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <UserAutocomplete
          data={rawUserData}
        />
      </header>
    </div>
  );
}

export default App;
