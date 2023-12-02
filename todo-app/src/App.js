import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Todo from './Component/Pages/Todo';
import Header from './Component/Header';
import Completed from './Component/Pages/Completed';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Todo />}></Route>
      <Route path="/completed" element={<Completed />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
  