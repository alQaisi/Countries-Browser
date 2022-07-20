import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import CountryPage from './routes/countryPage/countryPage.component.jsx';
import ErrorPage from './routes/error/error.component.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:countryCode' element={<CountryPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
