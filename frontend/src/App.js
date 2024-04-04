import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from './component/Login/Login1';
import Signup from './component/Login/Signup';
import MessagingContainer from "./component/Messages/MessageContainer";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login1 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/messages" element={<MessagingContainer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
