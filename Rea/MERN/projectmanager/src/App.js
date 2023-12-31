import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import Projects from './pages/Projects';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Pnf from './pages/Pnf';






function App() {
  return (
    <div className="App">
     
     
     
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/projects' element={<Projects></Projects>}></Route>
      <Route path='/login' element={<Auth></Auth>}></Route>
      <Route path='/register' element={<Auth register></Auth>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/*' element={<Pnf></Pnf>}></Route>


    </Routes>


      <Footer></Footer>
      
     
    </div>
  );
}

export default App;
