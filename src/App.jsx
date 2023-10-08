import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// IMPORT PAGES
import StandardMap from "./StandardMap";
import AdminMap from "./AdminMap";
import Home from "./Home";
import Report from "./Report";

function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;

        setLatitude(userLatitude);
        setLongitude(userLongitude);
      }, function (error) {
        // Handle any errors here
        console.error('Error getting user location:', error);
      });
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }, []);

  return (
    <Router>
    <>
      <AppBar position="absolute" sx={{ backgroundColor: '#3A3B3C' }} >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src="../public/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            OpenFire
          </Typography>

          <Link to="/" style={{ textDecoration: 'none', margin: '10px' }}>
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
          <Link to="/standard-map" style={{ textDecoration: 'none', margin: '10px' }}>
            <Button variant="contained" color="primary">
              Standard map
            </Button>
          </Link>
          <Link to="/admin-map" style={{ textDecoration: 'none', margin: '10px' }}>
            <Button variant="contained" color="primary">
              Admin map
            </Button>
          </Link>
          <Link to="/report" style={{ textDecoration: 'none', margin: '10px' }}>
            <Button variant="contained" color="error">
              Report wildfire!
            </Button>
          </Link>

        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/standard-map" element={<StandardMap latitude={latitude} longitude={longitude} />} />
        <Route path="/admin-map" element={<AdminMap latitude={latitude} longitude={longitude} />} />
        <Route path="/report" element={<Report />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

    </>
    </Router>
  );
}

export default App;
