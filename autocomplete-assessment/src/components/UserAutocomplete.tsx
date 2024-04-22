import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { FormattedUser } from '../models/FormattedUser';
 
function UserAutocomplete(props: any) {

  const { rawUserData } = props;
  const [formattedUserData, setFormattedUserData] = useState(Array<FormattedUser>);


  useEffect(() => {
    setFormattedUserData(formatUserData(rawUserData));
  }, []);

  // Takes a list of users from the raw user data and returns a 
  // new list containing only the formatted user's id, name, and address
  function formatUserData(userData: []) {
    return userData.map((user: FormattedUser) => {
      return user;
    });
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