import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from './component/Login/Login1';
import Signup from './component/Login/Signup';
import Profile from "./component/MenteeProfile/Profile";
import MenteesCard from "./component/MenteeCard/MenteesCard";
import DetailsPage from "./component/detailsPage/DetailsPage";


function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>



          <Route path='/login' element={<Login1 /> } />
            <Route path='/signup' element={<Signup /> } />
            <Route path='/profile' element={<Profile /> } />
            <Route path='/card' element={<MenteesCard /> } />
            <Route path='/detail' element={<DetailsPage /> } />





        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
