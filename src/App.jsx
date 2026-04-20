import React from "react";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-5xl">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;