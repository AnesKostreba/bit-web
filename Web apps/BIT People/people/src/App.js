import "./App.css";
import { Header } from "./components/header";
import "bootstrap/dist/css/bootstrap.css";
import { Person } from "./components/person";
import { About } from "./components/about";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Person/>}/>
              <Route path="/about" element={<About/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Person /> */}
      </div>
  );
}

export default App;
