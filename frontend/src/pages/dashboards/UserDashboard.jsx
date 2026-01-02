import { useEffect, useState } from "react";
import { getProjects } from "../../api/projectService.js";

const UserDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data.data))
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      {/* 🔹 CSS IN SAME FILE */}
      <style>{`
        .user-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .user-card {
          background: #ffffff;
          width: 100%;
          max-width: 500px;
          padding: 35px;
          border-radius: 18px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.6s ease;
        }

        .user-title {
          font-size: 28px;
          margin-bottom: 5px;
          text-align: center;
        }

        .user-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 25px;
        }

        .project-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-item {
          background: #f6f8fa;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          transition: all 0.2s ease;
        }

        .project-item:hover {
          transform: translateX(6px);
          background: #eef2ff;
        }

        .project-icon {
          font-size: 18px;
        }

        .empty-text {
          text-align: center;
          color: #999;
        }

        .logout-section {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }

        .logout-btn {
          background: linear-gradient(135deg, #ff512f, #dd2476);
          border: none;
          padding: 12px 36px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
          transition: all 0.3s ease;
        }

        .logout-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* 🔹 UI */}
      <div className="user-dashboard">
        <div className="user-card">
          <h2 className="user-title">👤 My Projects</h2>
          <p className="user-subtitle">Projects assigned to you</p>

          {projects.length === 0 ? (
            <p className="empty-text">No projects available</p>
          ) : (
            <div className="project-list">
              {projects.map((p) => (
                <div key={p.id} className="project-item">
                  <span className="project-icon">📁</span>
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* LOGOUT */}
          <div className="logout-section">
            <button className="logout-btn" onClick={handleLogout}>
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
