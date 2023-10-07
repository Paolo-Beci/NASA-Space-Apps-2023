import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// IMPORT PAGES
import StandardMap from "./StandardMap";
import AdminMap from "./AdminMap";
import Home from "./Home";
import Report from "./Report";

function App() {
  return (
    <Router>
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar>
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
        <Route path="/standard-map" element={<StandardMap />} />
        <Route path="/admin-map" element={<AdminMap />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

    </>
    </Router>
  );
}

export default App;
