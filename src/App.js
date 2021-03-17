import {useEffect, useState} from 'react'
import axios from 'axios';

// ------------components----------
import Header from './components/header/header';
import SearchField from './components/searchField/searchButton';
import UserCard from './components/userCard/userCard';

function App() {
  const [url, setUrl] = useState('') //resposta do componente SearchField
  const [ storedUser, setStoredUser] = useState(); //data recebido do sessionStorage

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('user'));
    if (items) {
      setStoredUser(items);
    }
  }, []);

  useEffect(() => {  
    // sessionStorage.clear();
    if(url !== ''){

      async function fetchUser() {
        await axios.get(url)
        .then(res => { sessionStorage.setItem('user', JSON.stringify( [res.data] )) } )
        .then(() => {setStoredUser(JSON.parse(sessionStorage.getItem('user')))})
        .catch(err => {setStoredUser('')})
      }
      fetchUser();
    }
    
  },[url])

  return (
    <div className='app'>
      <Header />
      <SearchField setUrl={setUrl}/>
      <UserCard user={storedUser}></UserCard>
    </div>
  );
}


export default App;
