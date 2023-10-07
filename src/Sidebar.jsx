// Sidebar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <List>
        <ListItem button>
          <ListItemIcon>
            {/* Add an icon for the sidebar item */}
          </ListItemIcon>
          <ListItemText primary="Sidebar Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {/* Add an icon for the sidebar item */}
          </ListItemIcon>
          <ListItemText primary="Sidebar Item 2" />
        </ListItem>
        {/* Add more sidebar items as needed */}
      </List>
      <Divider />
      {/* Add additional sections or items in the sidebar */}
    </Drawer>
  );
};

export default Sidebar;
