import React, { useState } from 'react';
import './Home.css';
import { FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setProjectName('');
  };

  const handleCreateProject = () => {
    if (projectName.trim()) {
      setProjects((prevProjects) => [...prevProjects, projectName.trim()]);
      handleCloseModal();
    } else {
      alert('Please enter a project name!');
    }
  };


  const handleProjectClick = (project,index) => {
    navigate(`/project/${project}/${index}`); // Navigate to the ProjectDetail page with the project name
  };
  
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
          <h1>Home Page</h1>
        </div>
        <div className="icon-container">
          <FaBell className="icon" title="Notifications" />
          <FaCog className="icon" title="Settings" />
        </div>
      </header>

      {/* Main Content */}
      {projects.length === 0 ? (
        <>
          {/* Main Image */}
          <div className="main-image-container">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Main Visual"
              className="main-image"
            />
          </div>

          {/* Paragraph */}
          <p className="description">
            Welcome to the Home Page. This is where you can manage your projects, access important
            tools, and stay updated with notifications. Let's build something amazing together!
          </p>

          {/* Create Button */}
          <div className="main-content">
            <button className="create-button" onClick={handleOpenModal}>
              + Create New Project
            </button>
          </div>
        </>
      ) : (
        <div className="projects-view">
          {/* Projects Header */}
          <div className="projects-header">
            <h2 className="projects-title">Projects</h2>
            <button className="create-button" onClick={handleOpenModal}>
              + Create New Project
            </button>
          </div>

          {/* Projects List */}
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-box"  onClick={() => handleProjectClick(project,index)}>
                {project}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-heading">Create New Project</h2>
            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="modal-input"
            />
            <div className="modal-buttons">
              <button className="cancel-button" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="create-modal-button" onClick={handleCreateProject}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
