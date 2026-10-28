
import React, { createContext, useContext, useState } from "react";
import ".styles/App.css";

const AuthContext = createContext();

function Auth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="auth-container">
      <h2>Authentication</h2>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={(e) => setIsAuthenticated(e.target.checked)}
        />
        I am not a robot
      </label>

      <p>
        {isAuthenticated
          ? "Authenticated Successfully!"
          : "Please verify that you are not a robot."}
      </p>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
