import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/Home';
import LoginPage from './components/login/Login';
import ProjectPage from './components/project/Project';


const App = () => {
  return (
    <div>
      <Routes>
     
        <Route path="/" element={< LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/project/:projectName/:projectKey" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
