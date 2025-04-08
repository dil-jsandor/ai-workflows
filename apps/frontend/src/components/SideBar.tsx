import {Box, Drawer, ListItemIcon, ListItemText, List, ListItem, ListItemButton} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Sidebar = () => {
    const menuItems = [
        {text: 'Home', icon: <HomeIcon />, selected: false, highlight: true},
        {
            text: 'AI Workflows',
            icon: <img src='/workflow-white.svg' alt='workflow_blck' />,
            selected: true,
            highlight: false,
        },
        {
            text: 'Risk & Strategy',
            icon: <AssessmentIcon />,
            selected: false,
            highlight: false,
        },
        {
            text: 'Audit & Analytics',
            icon: <BarChartIcon />,
            selected: false,
            highlight: false,
        },
        {
            text: 'Compliance & Ethics',
            icon: <SecurityIcon/>,
            selected: false,
            highlight: false,
        },
        {
            text: 'Issues & Reporting',
            icon: <DescriptionIcon/>,
            selected: false,
            highlight: false,
        },
        {
            text: 'Education',
            icon: <SchoolIcon/>,
            selected: false,
            highlight: false,
        },
        {
            text: 'Platform Settings',
            icon: <SettingsIcon/>,
            selected: false,
            highlight: false,
        }
    ];

    return (
        <Box sx={{width: 329, height: '100dvh', overflowY: 'clip' }}>
            <Drawer
                variant='permanent'
                anchor='left'
                sx={{
                    width: 329,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 329,
                        boxSizing: 'border-box',
                        bgcolor: '#282e37',
                        border: 'none',
                    }
                }}
            >
                <Box
                    sx={{
                        height: 68,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                    }}
                >
                    <MenuIcon sx={{ color: 'white', mr:2, cursor: 'pointer', '&:hover': { color: '#d3cfcf' }}} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            component='img'
                            src='/diligent_logo_fullcolor_rgb.svg'
                            alt='logo_icon'
                            sx={{ height: 120, width: 108 }}
                        />
                    </Box>
                </Box>

                <List sx={{ pt: 1, pb:0 }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{
                                    py: 1.5,
                                    bgcolor: item.selected
                                        ? '#575757'
                                        : item.highlight
                                            ? '#d32f2f'
                                            : 'transparent',
                                    borderRadius:  '13px',
                                    mx: 1,
                                    my: 0.5,
                                    '&:hover': {
                                        bgcolor: item.selected
                                            ? '#575757'
                                            : item.highlight
                                                ? '#9e2525'
                                                : '#575757',
                                    }
                                }}
                            >
                                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        color: 'white',
                                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                                        fontWeight: 500,
                                    }}
                                />
                                {item.text !== 'Home' && (
                                    <Box sx={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <ArrowForwardIcon fontSize='small' />
                                    </Box>
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Box
                    component='img'
                    src='/badge.svg'
                    alt='badge'
                    sx={{ height: 400 }}></Box>
            </Drawer>

        </Box>
    )
};

export default Sidebar;
