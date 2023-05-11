import './tailwind.css';

import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Montserrat' }}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
