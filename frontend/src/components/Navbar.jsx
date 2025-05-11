import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  Container,
  Avatar,
  Badge,
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { motion } from 'framer-motion';
import Settings from './Settings';

const NavButton = ({ to, children, onClick, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Button
      component={RouterLink}
      to={to}
      onClick={onClick}
      {...props}
      sx={{
        color: 'white',
        mx: 1,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          width: isActive ? '100%' : '0%',
          height: '2px',
          bottom: 0,
          left: '50%',
          backgroundColor: 'primary.main',
          transition: 'all 0.3s ease',
          transform: 'translateX(-50%)',
        },
        '&:hover::after': {
          width: '100%',
        },
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      {children}
    </Button>
  );
};

const TravelLogo = ({ size = 55 }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Glowing Globe Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '120%',
            height: '120%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0) 70%)',
            filter: 'blur(8px)',
            animation: 'glowPulse 3s infinite',
            '@keyframes glowPulse': {
              '0%': {
                opacity: 0.5,
                transform: 'scale(1)',
              },
              '50%': {
                opacity: 0.8,
                transform: 'scale(1.1)',
              },
              '100%': {
                opacity: 0.5,
                transform: 'scale(1)',
              },
            },
          }
        }}
      >
        {/* Main Globe */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)',
              transform: 'rotate(-45deg)',
            }
          }}
        >
          <PublicIcon 
            sx={{ 
              fontSize: size * 1.2,
              color: '#FFFFFF',
              filter: 'drop-shadow(0 0 10px rgba(33, 150, 243, 0.5))',
              position: 'relative',
              zIndex: 2,
            }} 
          />
        </Box>

        {/* Decorative Rings */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: 'inset 0 0 20px rgba(33, 150, 243, 0.3)',
              animation: 'ringPulse 3s infinite',
              '@keyframes ringPulse': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 0.5,
                },
                '50%': {
                  transform: 'scale(1.05)',
                  opacity: 0.8,
                },
                '100%': {
                  transform: 'scale(1)',
                  opacity: 0.5,
                },
              },
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              top: '5%',
              left: '5%',
              boxShadow: 'inset 0 0 15px rgba(33, 150, 243, 0.2)',
            }
          }}
        />
      </Box>
      
      {/* Aircraft */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '15%',
          transform: 'rotate(-45deg)',
          zIndex: 3,
          filter: 'drop-shadow(0 0 8px rgba(33, 150, 243, 0.5))',
        }}
      >
        <FlightTakeoffIcon 
          sx={{ 
            fontSize: size * 0.6,
            color: '#FFFFFF',
          }} 
        />
      </Box>

      {/* Additional Glow Effects */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 70%)',
            filter: 'blur(4px)',
          }
        }}
      />
    </Box>
  );
};

const Navbar = ({ username, score }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    soundEnabled: true,
    soundVolume: 70,
    questionTimer: 30,
    difficulty: 'medium',
    theme: 'dark'
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    const savedSettings = localStorage.getItem('gameSettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    }
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePlayGame = () => {
    navigate('/game');
    setMobileOpen(false);
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('gameSettings', JSON.stringify(newSettings));
  };

  const menuItems = [
    { text: 'Home', icon: <PublicIcon />, path: '/' },
    { text: 'Play Game', icon: <EmojiEventsIcon />, path: '/game', onClick: handlePlayGame },
    { text: 'Leaderboard', icon: <LeaderboardIcon />, path: '/leaderboard' },
    { text: 'Achievements', icon: <EmojiEventsIcon />, path: '/achievements' },
    { text: 'About', icon: <InfoIcon />, path: '/about' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <TravelLogo size={38} />
        <Typography 
          variant="h6" 
          color="primary.main" 
          fontWeight="bold"
          sx={{
            fontSize: '1.3rem',
            letterSpacing: '0.5px'
          }}
        >
          Globetrotter
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={item.onClick || handleDrawerToggle}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #1565c0 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Box 
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mr: 4
            }}
          >
            <RouterLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <TravelLogo size={45} />
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #00BCD4 0%, #2196F3 50%, #1976D2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: { xs: 'none', sm: 'block' },
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  letterSpacing: '0.5px',
                  fontSize: { xs: '1.5rem', sm: '2.2rem' },
                  ml: 1.5
                }}
              >
                Globetrotter
              </Typography>
            </RouterLink>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <NavButton 
                  key={item.text} 
                  to={item.path}
                  onClick={item.onClick}
                >
                  {item.text}
                </NavButton>
              ))}
            </Box>
          )}

          {/* Right Side Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton 
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <Avatar 
                sx={{ 
                  width: 32, 
                  height: 32,
                  bgcolor: 'primary.main'
                }}
              >
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
          </Box>

          {/* Profile Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: 'background.paper',
                mt: 1.5,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              }
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={() => {
              setSettingsOpen(true);
              handleClose();
            }}>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          {/* Settings Dialog */}
          <Settings
            open={settingsOpen}
            onClose={() => setSettingsOpen(false)}
            settings={settings}
            onSettingsChange={handleSettingsChange}
          />
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.paper',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
