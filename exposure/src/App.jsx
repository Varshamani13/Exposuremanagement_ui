import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import Workspaces from './pages/Workspace';
import DataUploadPage from './pages/DataUpload';
import UpdateDataPage from './pages/UpdateData';
import Analytics from './pages/Analytics';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/workspace" element={<Workspaces/>} />
        <Route path="/dataupload" element={<DataUploadPage/>} />
        <Route path="/updatedata" element={<UpdateDataPage/>} />
        <Route path="/analytics" element={<Analytics/>} />
      </Routes>
    </Router>
  );
}

export default App;
