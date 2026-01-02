import "./SuperAdminDashboard.css";

const SuperAdminDashboard = () => {
  const handleLogout = () => {
    // clear auth data (example)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // redirect to login
    window.location.href = "/login";
  };

  return (
    <div className="super-admin-page">

      {/* TOP INFO */}
      <div className="top-info-card">
        <h2>📊 Super Admin Dashboard</h2>

        <div className="user-info">
          <div className="info-chip">
            <span>Email</span>
            <strong>superadmin@system.com</strong>
          </div>

          <div className="info-chip">
            <span>Role</span>
            <strong>Super Admin</strong>
          </div>
        </div>
      </div>

      {/* MAIN PANEL */}
      <div className="dashboard-card">
        <h1 className="dashboard-title">👑 Super Admin Panel</h1>
        <p className="dashboard-subtitle">
          Manage tenants and monitor the entire system
        </p>

        <div className="action-grid">
          <div className="action-card">
            <span className="icon">➕</span>
            <h3>Register Tenant</h3>
            <p>Create and onboard new organizations</p>
          </div>

          <div className="action-card">
            <span className="icon">🏢</span>
            <h3>View Tenants</h3>
            <p>Manage all registered tenants</p>
          </div>

          <div className="action-card">
            <span className="icon">📊</span>
            <h3>System Analytics</h3>
            <p>Track usage & performance</p>
          </div>
        </div>
      </div>

      {/* LOGOUT (BOTTOM) */}
      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

    </div>
  );
};

export default SuperAdminDashboard;
