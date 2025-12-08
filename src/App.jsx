// App.jsx
import AddCar from './components/AddCar/AddCar';
import ManageCar from './components/ManageCar/ManageCar';
import AdminNavBar from './components/NavBar/AdminNavBar';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
