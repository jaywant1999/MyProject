import "./App.css";
import EmployeeCompnent from "./components/EmployeeCompnent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* https://localhost:1312 */}
          <Route path='/' element= {<ListEmployee/>}></Route>

          {/* htpps://localhost:1312/employees */}
          <Route path='/employees' element= {<ListEmployee/>}></Route>
          
          {/* htpps://localhost:1312/add-employee */}
          <Route path='/add-employee' element= {<EmployeeCompnent/>}></Route>

          {/* htpps://localhost:1312/update-employee/:id */}
          <Route path='/update-employee/:id' element= {<EmployeeCompnent/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
