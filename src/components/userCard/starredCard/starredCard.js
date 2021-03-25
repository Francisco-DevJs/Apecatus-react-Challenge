import { useEffect, useState } from 'react';
import './starredCard.css';
import axios from 'axios';

function StarredCard(props) { 
 
  const [storedRepos, setStoredRepos] = useState(['']); // storeged dos repos
  const [reposUrl, setReposUrl] = useState(''); //url recebida da props
  
  useEffect(() => {
    const url = props.reposData
    setReposUrl(url);

  },[])
  useEffect(() => {

     function fetchRepos() {
       axios.get(reposUrl.concat('/starred'))
      .then(res => { sessionStorage.setItem('starred', JSON.stringify( res.data)) } )
      .then(() => {setStoredRepos(JSON.parse(sessionStorage.getItem('starred')) || [])})
    }
    fetchRepos();

  },[reposUrl])


  return(
    
    
    <div className='cardFlexStarred'>
      <div className='cardItem'>
        <h3> Com Estrela </h3>
      
        {storedRepos.map((item, id) => 
          (<div key={id}>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>)
        )}
      
      </div>
    </div>
  )
}

export default StarredCard;