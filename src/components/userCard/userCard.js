import './userCard.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
//--------------components-----------------
import ReposCard from './reposCard/reposCard';
import StarredCard from './starredCard/starredCard';
import { useEffect, useState } from 'react';

function UserCard(props) { 
  const { user } = props;
  const [newUser, setNewUser] = useState(user)
  useEffect(() => {
    setNewUser(user)
  }, [newUser])
  if(user === 0 || !user || null || '' || undefined){
    return <p className='result'>  Nenhum resultado encontrado...</p>
  }

  return(
    <div>
          <div className='cardFlex'>
          {newUser.map((item, id) => (
              <div className='cardItem' key={id}> 

                <img src={item.avatar_url} alt='perfil'></img>
                
                  <strong>Nome: </strong>
                  <p>{item.login}</p>

                  <strong>Seguidores: </strong>
                  <p>{item.followers}</p>

                  <strong>Bio:</strong>
                  <p>{item.bio}</p>

                <div className='btn'>
                  <BrowserRouter>

                      <NavLink to='/repos' className='navLink'>Repositórios</NavLink>
                      <NavLink  to='/starred' className='navLink'>Com Estrela</NavLink>
                      <NavLink to='/' className='navLink'>Usuário</NavLink>

                    <Switch>

                      <Route  path='/repos'><ReposCard reposData={item.repos_url}/> </Route>
                      <Route  path='/starred'><StarredCard reposData={item.url}/> </Route> 
                      
                    </Switch>
                 
                  </BrowserRouter>
                </div>

              </div>
            ))}
        </div>
    </div>
   
   
   )
}

export default UserCard;