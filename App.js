import React from 'react'
import './App.css';
import Header from './components/Header';
import{ Route, Routes }from 'react-router-dom'
import Books from './components/Books';
import AddBook from './components/AddBook';
import Bookdetail from'./components/Bookdetail'
import About from './components/About'
import Home from './components/Home';


function App() {
  return (
    <div ><React.Fragment>
      <header><Header/></header>
      <main><Routes>
      <Route path='/' element={<Home/>}exact/>
        <Route path='/book' element={<Books/>}exact/>
        <Route path='/add' element={<AddBook/>}exact/>
        <Route path='/about' element={<About/>}exact/>
        <Route path='/book/:id' element={<Bookdetail/>}exact/>
       
      </Routes>

       </main>
    </React.Fragment>
      
    </div>
  );
}

export default App;
