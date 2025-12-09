import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar/AddCar";
import ManageCar from "./components/ManageCar/ManageCar";
import AdminNavBar from "./components/NavBar/AdminNavBar";
import Login from "./components/Login/Login"; 
import { useAuth } from "./hooks/useAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { currentUser, isLoggedIn, refreshSession } = useAuth();
    useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  const isAdmin = !!currentUser && currentUser.role === "admin";

  if (!isLoggedIn) {
    return <Login />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Access denied. Admin only.
      </div>
    );
  }

  return (
    <>
      <AdminNavBar />

      <Routes>
        <Route path="/" element={<AddCar />} />
        <Route path="/manage-cars" element={<ManageCar />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="dark"
      />
    </>
  );
}

export default App;
