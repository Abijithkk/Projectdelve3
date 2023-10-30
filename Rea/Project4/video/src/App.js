
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import History from './Pages/History';
import SingleCategory from './Pages/SingleCategory';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<LandingPage ></LandingPage>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/watch-history' element={<History></History>}></Route>
        <Route path='/Category' element={ <SingleCategory></SingleCategory> }></Route>

      </Routes>
      <Footer ></Footer>
    </div>
  );
}

export default App;
