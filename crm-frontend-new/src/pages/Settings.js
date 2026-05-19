import React from "react";
import "./Settings.css";

function Settings() {

  return (

    <div className="settings-page">

      <div className="settings-header">

        <h1>Settings ⚙️</h1>

        <p>
          Manage your CRM settings easily
        </p>

      </div>

      <div className="settings-grid">

        <div className="settings-line">
          👤 Account Settings
        </div>

        <div className="settings-line">
          🔒 Privacy Settings
        </div>

        <div className="settings-line">
          👥 Customer Settings
        </div>

        <div className="settings-line">
          💻 System Settings
        </div>

        <div className="settings-line">
          🌐 Language Settings
        </div>

        <div className="settings-line">
          🔔 Notification Settings
        </div>

        <div className="settings-line">
          🎨 Theme Settings
        </div>

        <div className="settings-line">
          🔑 Security Settings
        </div>

        <div className="settings-line">
          ☁️ Backup Settings
        </div>

      </div>

    </div>

  );
}

export default Settings;

