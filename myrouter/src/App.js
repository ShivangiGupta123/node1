import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './component/register';
import Router from './component/router';
import Login from './component/login';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Router/>
    <Routes>
    <Route path = '/register' element = {<Register/>}/>
    <Route path = '/login' element = {<Login/>}/>
    </Routes>
    </BrowserRouter>
    
   
    </div>
  );
}

export default App;
