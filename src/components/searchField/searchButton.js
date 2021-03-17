import { useState } from 'react';
import './search.css';

const SearchField = ({ setUrl }) => { 
const [input, setInput] = useState(''); // retorna o value do input pro elemento pai.

const sendSubmit = (e) => {
  e.preventDefault();
  setUrl(`https://api.github.com/users/${input}`);
}
    return <div>
             <div className='search'>
               <form onSubmit={sendSubmit}>
                  <input placeholder='Ex.: facebook, defunkt...'
                           value={input}
                           onChange={(e) => {setInput(e.target.value)} }
                           ></input>
                  <button type='submit'>Procurar</button>
               </form>
             </div>
           </div> 
    }

export default SearchField;
