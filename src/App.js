
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import AddProduct from './product/AddProduct';
import ViewProducts from './product/ViewProducts';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header/>
          <div className='background'>
          <Routes>
              <Route path="/" element={<ViewProducts/>}></Route>
              <Route path="add" element={<AddProduct/>}></Route>
              <Route path="view" element={<ViewProducts/>}></Route>
                        {/* pathvariable */}
              <Route path='edit/:id' element={<AddProduct/>}></Route>
          </Routes>
          </div>
       </BrowserRouter>
    </div>
  );
}

export default App;