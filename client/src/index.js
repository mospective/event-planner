import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Signup from './components/Account/Signup';
import reportWebVitals from './reportWebVitals';
import Dashboard from './routes/Dashboard';
import Event from './routes/Event';
import Request from './routes/Request';
import RequestForm from './routes/RequestForm';
import PrivateRoute from './components/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/event/:eventId" element={<PrivateRoute><Event /></PrivateRoute>} />
          <Route path="/request" element={<Request />} />
          <Route path="/request/:eventId" element={<RequestForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
