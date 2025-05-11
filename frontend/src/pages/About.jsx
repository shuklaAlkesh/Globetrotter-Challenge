import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  useTheme,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import Footer from '../components/Footer';

const TeamMember = ({ name, role, avatar, social }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Paper
      sx={{
        p: { xs: 2.5, md: 3 },
        height: '100%',
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '& .avatar-container': {
            transform: 'scale(1.1)',
            borderColor: 'primary.main',
          },
          '& .social-icons': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2196f3, #1976d2)',
          opacity: 0.8,
        },
      }}
    >
      <Box
        className="avatar-container"
        sx={{
          position: 'relative',
          mb: 2,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Avatar
          src={avatar}
          alt={name}
          sx={{
            width: { xs: 120, md: 140 },
            height: { xs: 120, md: 140 },
            border: '4px solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease-in-out',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <AutoAwesomeIcon sx={{ color: 'primary.main', fontSize: 20 }} />
        </Box>
      </Box>
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 1,
          background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {name}
      </Typography>
      <Typography 
        color="text.secondary" 
        sx={{ 
          mb: 3,
          fontSize: '1.1rem',
          opacity: 0.9,
        }}
      >
        {role}
      </Typography>
      <Box 
        className="social-icons"
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 1.5,
          opacity: 0.8,
          transform: 'translateY(10px)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {social.github && (
          <IconButton 
            href={social.github} 
            target="_blank" 
            sx={{ 
              color: 'primary.main',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        )}
        {social.linkedin && (
          <IconButton 
            href={social.linkedin} 
            target="_blank" 
            sx={{ 
              color: 'primary.main',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        )}
        {social.twitter && (
          <IconButton 
            href={social.twitter} 
            target="_blank" 
            sx={{ 
              color: 'primary.main',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#fff',
                backgroundColor: 'primary.main',
              },
            }}
          >
            <TwitterIcon />
          </IconButton>
        )}
      </Box>
    </Paper>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card
      sx={{
        height: '100%',
        minHeight: { xs: '220px', sm: '240px' },
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '& .icon-container': {
            transform: 'scale(1.1) rotate(5deg)',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
          },
          '& .card-content': {
            transform: 'translateY(-5px)',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2196f3, #1976d2)',
          opacity: 0.8,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 3.5 } }} className="card-content">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 3,
          gap: 2.5,
        }}>
          <Box
            className="icon-container"
            sx={{
              width: { xs: 64, sm: 72 },
              height: { xs: 64, sm: 72 },
              minWidth: { xs: 64, sm: 72 },
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.3s ease-in-out',
              border: '1px solid rgba(33, 150, 243, 0.2)',
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#fff',
                fontSize: { xs: '1.3rem', sm: '1.5rem' },
                mb: 0.5,
                background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                opacity: 0.8,
                fontSize: { xs: '0.9rem', sm: '1rem' },
              }}
            >
              Discover more
            </Typography>
          </Box>
        </Box>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.7,
            opacity: 0.9,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const teamMembers = [
    {
      name: 'Alkesh Shukla',
      role: 'Aspiring Software Engineer at Headout',
      avatar: null,
      social: {
        github: 'https://github.com/alkeshshukla',
        linkedin: 'https://linkedin.com/in/alkeshshukla',
        twitter: 'https://twitter.com/alkeshshukla',
      },
    }
  ];

  const features = [
    {
      icon: <PublicIcon sx={{ fontSize: { xs: 32, sm: 36 }, color: 'primary.main' }} />,
      title: 'Global Exploration',
      description: 'Discover fascinating destinations from around the world through engaging clues and interesting facts. Test your knowledge of geography, culture, and landmarks.'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: { xs: 32, sm: 36 }, color: 'primary.main' }} />,
      title: 'Competitive Gaming',
      description: 'Compete with players worldwide on our global leaderboard. Earn points for correct answers and climb the ranks to become the ultimate globetrotter.'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: { xs: 32, sm: 36 }, color: 'primary.main' }} />,
      title: 'Educational Value',
      description: 'Learn interesting facts about different countries, their cultures, landmarks, and geography. Each question comes with a fun fact to expand your knowledge.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: { xs: 32, sm: 36 }, color: 'primary.main' }} />,
      title: 'Community Engagement',
      description: 'Join a community of geography enthusiasts. Share your achievements, participate in weekly challenges, and connect with fellow globetrotters.'
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: { xs: 32, sm: 36 }, color: 'primary.main' }} />,
      title: 'Interactive Experience',
      description: 'Enjoy a dynamic gaming experience with animations, sound effects, and visual feedback. Get instant responses and encouraging messages for your answers.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: { xs: 32, sm: 36 }, color: 'primary.main' }} />,
      title: 'Secure & Reliable',
      description: 'Play with confidence knowing your data is secure. Our platform uses industry-standard security measures to protect your information.'
    }
  ];

  const coreValues = [
    {
      icon: <PublicIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'primary.main' }} />,
      title: 'Our Mission',
      description: 'To make learning about world geography fun and engaging through interactive gameplay and challenging puzzles.',
      gradient: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'primary.main' }} />,
      title: 'Our Vision',
      description: 'To create a global community of curious minds who love to explore and learn about different cultures and places.',
      gradient: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'primary.main' }} />,
      title: 'Our Values',
      description: 'We believe in creating an inclusive, educational, and entertaining platform that brings people together through shared experiences.',
      gradient: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      py: { xs: 6, md: 10 },
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 8, md: 10 },
            px: { xs: 2, md: 0 },
          }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              About Globetrotter
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Discover the world through an engaging game of geography and exploration
            </Typography>
          </Box>

          {/* Features Section */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Features
            </Typography>
            <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <FeatureCard {...feature} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Core Values Section */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Core Values
            </Typography>
            <Grid 
              container 
              spacing={{ xs: 3, sm: 4, md: 5 }}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'stretch',
              }}
            >
              {coreValues.map((value, index) => (
                <Grid 
                  item 
                  xs={12} 
                  md={4} 
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{ height: '100%' }}
                  >
                    <Paper
                      sx={{
                        height: '100%',
                        minHeight: { xs: '280px', md: '320px' },
                        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 4,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        p: { xs: 3, md: 4 },
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          '& .icon-container': {
                            transform: 'scale(1.1) rotate(5deg)',
                            backgroundColor: 'rgba(33, 150, 243, 0.2)',
                          },
                          '& .value-content': {
                            transform: 'translateY(-5px)',
                          },
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: value.gradient,
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Box 
                        className="icon-container"
                        sx={{ 
                          width: { xs: 80, md: 90 },
                          height: { xs: 80, md: 90 },
                          borderRadius: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          mb: 3,
                          border: '2px solid',
                          borderColor: 'primary.main',
                          transition: 'all 0.3s ease-in-out',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: -8,
                            left: -8,
                            right: -8,
                            bottom: -8,
                            borderRadius: '28px',
                            background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                            zIndex: -1,
                            opacity: 0,
                            transition: 'all 0.3s ease-in-out',
                          },
                          '&:hover::after': {
                            opacity: 1,
                          },
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Box className="value-content" sx={{ transition: 'all 0.3s ease-in-out' }}>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 'bold', 
                            mb: 2,
                            color: '#fff',
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.7,
                            opacity: 0.9,
                            maxWidth: '90%',
                            mx: 'auto',
                          }}
                        >
                          {value.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Meet the Team
            </Typography>
            <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <TeamMember {...member} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 