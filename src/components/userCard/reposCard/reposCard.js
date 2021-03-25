import { useEffect, useState } from 'react';
import './reposCard.css';
import axios from 'axios';

function ReposCard(props) { 
 
  const [storedRepos, setStoredRepos] = useState(['']); // storeged dos repos
  const [reposUrl, setReposUrl] = useState('');
  
  useEffect(() => {
    const url = props.reposData
    setReposUrl(url);

  },[])
  useEffect(() => {
    
    
     function fetchRepos() {
       axios.get(reposUrl)
      .then(res => { localStorage.setItem('repos', JSON.stringify( res.data)) } )
      .then(() => {setStoredRepos(JSON.parse(localStorage.getItem('repos'))) || []})
      // .catch(err => {setStoredRepos('')})
  
      
    }
    fetchRepos();
  
  },[reposUrl])


  return(
     
    
    <div className='cardFlexRepos'>
      
      <div className='cardItem'>
        {console.log(storedRepos, 'repositorios')}
        <h3>Todos os Repositórios</h3>
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

export default ReposCard;