import { Routes, Route } from 'react-router-dom';
import './App.css';
// import SortSearch from './components/SortSearchv1';
// import Header from './components/Header/Header';
// import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import Login from './Pages/Login/Login';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/pagination' element={<Pagination />} />
        {/* <Route path='/header' element={<Header />} /> */}
        {/* <Route path='/table' element={<Table />} /> */}

        {/* <Route path='/SortSearch' element={<SortSearch />} /> */}
      </Routes>
    </>
  );
}

export default App;
