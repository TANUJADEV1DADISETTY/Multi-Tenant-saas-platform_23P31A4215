import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../../api/projectService.js";
import ProjectTasks from "../../components/ProjectTasks.jsx";
import CreateProject from "../../components/CreateProject.jsx";
import "./TenantAdminDashboard.css";

const TenantAdminDashboard = () => {
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    getProjects()
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleDeleteProject = async (projectId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirmDelete) return;

    try {
      await deleteProject(projectId);
      loadProjects();
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="tenant-layout">
      {/* CREATE PROJECT */}
      <div className="create-section">
        <CreateProject onCreated={loadProjects} />
      </div>

      {/* PROJECT LIST (HORIZONTAL CARDS) */}
      <div className="projects-horizontal">
        {projects.length === 0 && (
          <p className="no-projects">No projects available</p>
        )}

        {projects.map((p) => (
          <div key={p.id} className="project-row">
            {/* LEFT: PROJECT INFO */}
            <div className="project-info">
              <h3>{p.name}</h3>
              <p>{p.description || "No description provided"}</p>
              <span className="project-id">ID: {p.id}</span>
            </div>

            {/* CENTER: TASKS */}
            <div className="project-tasks">
              <h4>Tasks</h4>
              <ProjectTasks projectId={p.id} />
            </div>

            {/* RIGHT: ACTIONS */}
            <div className="project-actions">
              <button
                className="delete-btn"
                onClick={() => handleDeleteProject(p.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LOGOUT */}
      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default TenantAdminDashboard;
