import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { FaBell, FaSignOutAlt } from "react-icons/fa"; // Importing icons
import "./Project.css";

// Subpages for the sidebar
const AddPodcasts = () => (
  <div>
    <h2>+ Add Your Podcasts</h2>
    <p>This is where you can add your podcasts.</p>
  </div>
);
const CreateAndRepurpose = () => (
  <div>
    <h2>Create and Repurpose</h2>
    <p>Here you can create or repurpose podcasts.</p>
  </div>
);
const PodcastWidget = () => (
  <div>
    <h2>Podcast Widget</h2>
    <p>Manage your podcast widget here.</p>
  </div>
);
const Upgrade = () => (
  <div>
    <h2>Upgrade</h2>
    <p>Upgrade your plan for additional features.</p>
  </div>
);
const Help = () => (
  <div>
    <h2>Help</h2>
    <p>If you need help, you are at the right place.</p>
  </div>
);

const Project = () => {
  const location = useLocation(); 

  
  const getBreadcrumbs = () => {
    const path = location.pathname.split("/").filter(Boolean);
    return path;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="project-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Project Sidebar</h2>
        <ul>
          <li>
            <Link to="add-podcasts">+ Add Your Podcasts</Link>
          </li>
          <li>
            <Link to="create-and-repurpose">Create and Repurpose</Link>
          </li>
          <li>
            <Link to="podcast-widget">Podcast Widget</Link>
          </li>
          <li>
            <Link to="upgrade">Upgrade</Link>
          </li>
          <li>
            <Link to="help">Help</Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Breadcrumbs and Icons */}
        <div className="breadcrumb-container">
          <div className="breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <Link to={`/${breadcrumbs.slice(0, index + 1).join("/")}`}>
                  {crumb}
                </Link>
                {index < breadcrumbs.length - 1 && " / "}
              </span>
            ))}
          </div>
          <div className="icons">
            <FaBell className="icon" title="Notifications" />
            <FaSignOutAlt className="icon" title="Exit" />
          </div>
        </div>

       
        <div className="ProjectHeading">
          <h1>Project Management</h1>
        </div>

      
        <div className="boxes-container">
          <div className="box">
            <img src="https://via.placeholder.com/150" alt="Image 1" />
            <h3>Box 1</h3>
            <p>This is the first box description.</p>
          </div>
          <div className="box">
            <img src="https://via.placeholder.com/150" alt="Image 2" />
            <h3>Box 2</h3>
            <p>This is the second box description.</p>
          </div>
          <div className="box">
            <img src="https://via.placeholder.com/150" alt="Image 3" />
            <h3>Box 3</h3>
            <p>This is the third box description.</p>
          </div>
        </div>

        {/* File Upload Area */}
        <div className="upload-area">
          <div className="upload-box">
            <div className="upload-icon">
              <i className="fas fa-cloud-upload-alt"></i> {/* Upload icon */}
            </div>
            <p className="upload-description">
              Upload your file or drag and drop here (Podcast Media or
              Transcription Text)
            </p>
            <p className="file-formats">
              Supported formats: MP4, MOV, MP3, WAV, PDF, DOCX, TXT
            </p>
            <input type="file" id="file-upload" className="file-upload-input" />
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="add-podcasts" element={<AddPodcasts />} />
          <Route path="create-and-repurpose" element={<CreateAndRepurpose />} />
          <Route path="podcast-widget" element={<PodcastWidget />} />
          <Route path="upgrade" element={<Upgrade />} />
          <Route path="help" element={<Help />} />
        </Routes>
      </div>
    </div>
  );
};

export default Project;
