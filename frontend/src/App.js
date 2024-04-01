import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from './component/Login/Login1';
import Signup from './component/Login/Signup';


function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>



          <Route path='/login' element={<Login1 /> } />
            <Route path='/signup' element={<Signup /> } />


        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
