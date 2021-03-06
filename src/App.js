import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AllReviews from './components/AllReviews/AllReviews';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className='min-h-full min-w-full'>
      {/* header common */}
      <Header></Header>
      <Routes>
        {/* every route in here */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
