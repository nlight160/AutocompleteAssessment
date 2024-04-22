import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { FormattedUser } from '../models/FormattedUser';
 
function UserAutocomplete(props: any) {

  const [rawUserData] = useState(props.data);
  const [formattedUserData, setFormattedUserData] = useState<FormattedUser[]>([]);

  useEffect(() => {
    console.log(rawUserData);
    if (rawUserData) {
      setFormattedUserData(formatUserData(rawUserData));
    }
  }, [rawUserData]);



  // Takes a list of users from the raw user data and returns a 
  // new list containing only the formatted user's id, name, and address
  function formatUserData(userData: []) {
    return userData.map<FormattedUser>((user: any) => {
      return {
          id: user.id,
          label: formatName(user.name),
          street: user.street,
          suite: user.suite,
          city: user.city
        };
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
              return formattedName += `${nameParts.slice(2, -1)}, ${nameParts[1]} (${nameParts[0]})`
          }
          else {
              return formattedName += `${nameParts.slice(1, -1)}, ${nameParts[0]}`
          }
      }
      catch (e: any) {
          console.log(e.message);
          return "Error formatting name";
      }
  }

 return (
  <div>
    <Autocomplete
      className="user-autocomplete"
      id="user-autocomplete"
      options={ formattedUserData }
      renderInput={(userData) => <TextField {...userData} label="User"/>}
    />
  </div>
  );
}

export default UserAutocomplete;