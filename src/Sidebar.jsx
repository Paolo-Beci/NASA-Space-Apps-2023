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
            <List style={{width: "400px"}}>
                <ListItem>
                    <ListItemIcon>
                        <img src="../public/risk.jpg" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Categories of risk" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <img src="../public/colors/blue.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Very low" secondary="No further action required. Check the app periodically for updates on the danger rating of your area."/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <img src="../public/colors/green.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Low" secondary="Report the fire to the authorities, using the report form. Do not attempt to approach the flame front. Check the app periodically for updates and instructions from the authorities." />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <img src="../public/colors/yellow.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Moderate" secondary="Report the fire to the authorities, using the report form. Do not attempt to approach the flame front. Plan and be ready for an evacuation alert. Check the app periodically for updates and instructions from the authorities." />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <img src="../public/colors/orange.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="High" secondary="An evacuation alert has been issued. Check your fire plan and go to a safer place well before the flames arrive. Do not attempt to approach the flame front. Check the app periodically for updates and instructions from the authorities." />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <img src="../public/colors/red.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
                    </ListItemIcon>
                    <ListItemText primary="Extreme" secondary="An evacuation order has been issued. For your own survival, move away from areas at risk immediately: houses and buildings cannot withstand fires in these conditions. Do not attempt to approach the flame front. Check the app periodically for updates and instructions from the authorities." />
                </ListItem>

            </List>
            <Divider />
        </Drawer>
    );
};

export default Sidebar;
