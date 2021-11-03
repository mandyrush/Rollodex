import {useEffect, useState} from 'react';
import Contacts from './components/contacts';

import './App.css';

const API_URL = 'https://randomuser.me/api?results=25';

function App() {
  const [contacts, setContacts] = useState([]);
  
  // Use lifecycle method - useEffect
  useEffect(() => {
    console.log('Mounted');
    // Use fetch API
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setContacts(data.results))
  }, [])

  // useEffect(() => {
  //   console.log('I updated');
  //   console.log(contacts);
  // }, [contacts])

  return (
    <div className="App">
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
