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
  const { isLoggedIn, refreshSession } = useAuth();
  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  if (!isLoggedIn) {
    return (
      <>
        <Login />
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

  // ĐÃ LOGIN → vào dashboard admin bình thường
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
