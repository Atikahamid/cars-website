import './App.css';
import PageOne from './Components/PageOne'
import {
  Routes,
  Route,
} from "react-router-dom";
import PageTwo from './Components/PageTwo';
import PageThree from './Components/PageThree';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageOne/>}/>
        <Route path="/about" element={<PageTwo/>}/>
        <Route path="/contact" element={<PageThree/>}/>

      </Routes>
    </div>
  )
}

export default App;
