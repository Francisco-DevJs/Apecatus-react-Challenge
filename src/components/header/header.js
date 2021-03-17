import './header.css';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

const Header = () =>{ 
    return <div className='header'>
      <BrowserRouter>
        <Link className='link' to='/'
          
          onClick={() => {
            window.location.href='/'
            sessionStorage.clear()

          } }
           ><h1>Search Github</h1></Link>
      </BrowserRouter>
           </div> 
}


export default Header;
