import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from './component/Login/Login1';
import Signup from './component/Login/Signup';
import Profile from "./component/MenteeProfile/Profile";
import MenteesCard from "./component/MenteeCard/MenteesCard";
import DetailsPage from "./component/detailsPage/DetailsPage";
import Dashboard from "./component/Dashboard/Dashboard";
import Navbar from "./component/navbar/Navbar";
import Upsession from "./component/Upsession/Upsession";



import MentorCard from "./component/MenteeCard/MentorCard";


function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>


          <Route path='/login' element={<Login1 /> } />
            <Route path='/signup' element={<Signup /> } />
            <Route path='/profile' element={<Profile /> } />
            <Route path='/card' element={<MenteesCard /> } />
            <Route path='/cards' element={<MentorCard /> } />

            <Route path='/detail' element={<DetailsPage /> } />
            <Route path='/dashboard' element={<Dashboard /> } />
            <Route path='/nav' element={<Navbar /> } />

            <Route path='/session' element={<Upsession/> } />

        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
