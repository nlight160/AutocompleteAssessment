import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { FormattedUser } from '../models/FormattedUser';
 
function UserAutocomplete(props: any) {

  const [rawUserData] = useState(props.data);
  const [formattedUserData, setFormattedUserData] = useState<FormattedUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<FormattedUser>();

  useEffect(() => {
    
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
          street: user.address.street,
          suite: user.address.suite,
          zipcode: user.address.zipcode
        };
    }).sort((a, b) => (a.label < b.label) ? -1 : 1);
  }

  // Takes a name as a string and returns a string that complies
  // with the format "Last Name Suffix, First Name (Title)".
  function formatName(name: string) {
      let formattedName = "";
      let nameParts;

      try {
          nameParts = name.split(" ");
          if (nameParts[0].includes(".")) {
              return formattedName += `${nameParts.slice(2)}, ${nameParts[1]} (${nameParts[0]})`;
          }
          else {
              return formattedName += `${nameParts.slice(1).join(" ")}, ${nameParts[0]}`;
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
      onChange={(event, newSelectedUser) => {
        setSelectedUser(newSelectedUser as FormattedUser);
      }}
      options={ formattedUserData }
      renderInput={(userData) => <TextField {...userData} label="User"/>}
    />
    <div>
      <p className='user-text'>{selectedUser?.label}</p>
      <p className='user-text'>{selectedUser?.street}</p>
      <p className='user-text'>{selectedUser?.suite}</p>
      <p className='user-text'>{selectedUser?.zipcode}</p>
    </div>
  </div>
  );
}

export default UserAutocomplete;