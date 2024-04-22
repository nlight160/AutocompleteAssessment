import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
 
function UserAutocomplete(props: any) {

  const { rawUserData } = props;
  const [formattedUserData, setFormattedUserData] = useState([]);

  function formatUserData(userData: []) {
    userData.map((user) => {
      
    });
  } 

  // Takes a name as a string and returns a string that complies
  // with the format "Last Name Suffix, First Name (Title)".
  function formatName(name: string) {
    let formattedName = "";
    let nameParts;

    try {
      nameParts = name.split(" ");

      if (nameParts[0].includes(".")) {
        formattedName += `${nameParts.slice(2, -1)}, ${nameParts[1]} (${nameParts[0]})`
      }
      else {
        formattedName += `${nameParts.slice(1, -1)}, ${nameParts[0]}`
      }
    }
    catch (e: any) {
      console.log(e.message);
    }
  }
 return (
    <Autocomplete
      id="user-autocomplete"
      options={ formattedUserData }
      renderInput={(userData) => <TextField {...userData} label="User"/>}
    />
  );
}

export default UserAutocomplete;