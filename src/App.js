import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import CountryPage from './routes/countryPage/countryPage.component.jsx';

function App() {
  return (
    <Routes>
      <Route path='/Countries-Browser' element={<Home/>}/>
      <Route path='Countries-Browser/:countryCode' element={<CountryPage/>}/>
    </Routes>
  );
}

export default App;
