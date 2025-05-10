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
  <Paper
    component={motion.div}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    sx={{
      p: { xs: 2, md: 3 },
      height: '100%',
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Avatar
      src={avatar}
      alt={name}
      sx={{
        width: { xs: 100, md: 120 },
        height: { xs: 100, md: 120 },
        mx: 'auto',
        mb: 2,
        border: '4px solid',
        borderColor: 'primary.main',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    />
    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
      {name}
    </Typography>
    <Typography color="text.secondary" sx={{ mb: 2 }}>
      {role}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      {social.github && (
        <IconButton 
          href={social.github} 
          target="_blank" 
          sx={{ 
            color: 'primary.main',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#fff',
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
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#fff',
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
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#fff',
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
      )}
    </Box>
  </Paper>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card
      sx={{
        height: '100%',
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 2,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}>
          {icon}
          <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold', color: '#fff' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

const About = () => {
  const theme = useTheme();

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
      icon: <PublicIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Global Exploration',
      description: 'Discover fascinating destinations from around the world through engaging clues and interesting facts. Test your knowledge of geography, culture, and landmarks.'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Competitive Gaming',
      description: 'Compete with players worldwide on our global leaderboard. Earn points for correct answers and climb the ranks to become the ultimate globetrotter.'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Educational Value',
      description: 'Learn interesting facts about different countries, their cultures, landmarks, and geography. Each question comes with a fun fact to expand your knowledge.'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Community Engagement',
      description: 'Join a community of geography enthusiasts. Share your achievements, participate in weekly challenges, and connect with fellow globetrotters.'
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Interactive Experience',
      description: 'Enjoy a dynamic gaming experience with animations, sound effects, and visual feedback. Get instant responses and encouraging messages for your answers.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: 'Secure & Reliable',
      description: 'Play with confidence knowing your data is secure. Our platform uses industry-standard security measures to protect your information.'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      py: { xs: 4, md: 8 },
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
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            px: { xs: 2, md: 0 },
          }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
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
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                px: { xs: 2, md: 0 },
              }}
            >
              Your journey to becoming a geography expert starts here. Explore the world, test your knowledge, and compete with players globally.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              mb: { xs: 6, md: 8 },
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3, 
                fontWeight: 'bold', 
                color: '#fff',
                fontSize: { xs: '1.75rem', md: '2.125rem' },
                textAlign: 'center',
              }}
            >
              How to Play
            </Typography>
            <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
              {[
                'Start by creating an account or logging in to track your progress and compete on the leaderboard.',
                'Each game consists of multiple questions about different destinations around the world.',
                'You\'ll receive clues about a location - use your knowledge to identify the correct destination.',
                'Earn points for correct answers (+10) and lose points for incorrect ones (-5).',
                'Learn interesting facts about each destination, whether you get the answer right or wrong.',
                'Compete with other players and climb the global leaderboard to become the ultimate globetrotter!'
              ].map((text, index) => (
                <Typography 
                  key={index}
                  variant="body1" 
                  paragraph 
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  <Box 
                    sx={{ 
                      minWidth: 24, 
                      height: 24, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '0.875rem',
                    }}
                  >
                    {index + 1}
                  </Box>
                  {text}
                </Typography>
              ))}
            </Box>
          </Paper>

          {/* Mission Section */}
          <Box sx={{ 
            mb: { xs: 6, md: 8 },
            px: { xs: 2, md: 4 }
          }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: { xs: 4, md: 6 },
                textAlign: 'center',
                color: '#fff',
                fontSize: { xs: '1.75rem', md: '2.125rem' },
              }}
            >
              Our Core Values
            </Typography>
            <Grid 
              container 
              spacing={{ xs: 3, md: 4 }} 
              sx={{ 
                justifyContent: 'center',
                maxWidth: '1200px',
                mx: 'auto',
                px: { xs: 1, md: 2 }
              }}
            >
              {[
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
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Paper
                      component={motion.div}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      sx={{
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
                        p: { xs: 3, md: 4 },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: item.gradient,
                          opacity: 0.7,
                        },
                      }}
                    >
                      <Box 
                        sx={{ 
                          width: { xs: 80, md: 100 },
                          height: { xs: 80, md: 100 },
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                          mb: 3,
                          border: '2px solid',
                          borderColor: 'primary.main',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography 
                        variant="h5" 
                        fontWeight="bold" 
                        gutterBottom 
                        sx={{ 
                          color: '#fff',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          mb: 2,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        color="text.secondary" 
                        sx={{ 
                          mb: 3,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          fontWeight: 500,
                          lineHeight: 1.6,
                          px: { xs: 1, md: 2 }
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: { xs: 4, md: 6 },
                textAlign: 'center',
                color: '#fff',
                fontSize: { xs: '1.75rem', md: '2.125rem' },
              }}
            >
              Meet Our Team
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ justifyContent: 'center' }}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={8} md={6} lg={4} key={member.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Paper
                      component={motion.div}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        p: { xs: 3, md: 4 },
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
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                          opacity: 0.7,
                        },
                      }}
                    >
                      <Avatar
                        src={member.avatar}
                        alt={member.name}
                        sx={{
                          width: { xs: 120, md: 150 },
                          height: { xs: 120, md: 150 },
                          mx: 'auto',
                          mb: 3,
                          border: '4px solid',
                          borderColor: 'primary.main',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                          fontSize: { xs: '3rem', md: '4rem' },
                        }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography 
                        variant="h5" 
                        fontWeight="bold" 
                        gutterBottom 
                        sx={{ 
                          color: '#fff',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          mb: 1,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography 
                        color="primary.main" 
                        sx={{ 
                          mb: 3,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          fontWeight: 500,
                        }}
                      >
                        {member.role}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: 2,
                        mt: 'auto',
                      }}>
                        {member.social.github && (
                          <IconButton 
                            href={member.social.github} 
                            target="_blank" 
                            sx={{ 
                              color: 'primary.main',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.2)',
                                color: '#fff',
                                background: 'rgba(255, 255, 255, 0.1)',
                              },
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        )}
                        {member.social.linkedin && (
                          <IconButton 
                            href={member.social.linkedin} 
                            target="_blank" 
                            sx={{ 
                              color: 'primary.main',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.2)',
                                color: '#fff',
                                background: 'rgba(255, 255, 255, 0.1)',
                              },
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                        )}
                        {member.social.twitter && (
                          <IconButton 
                            href={member.social.twitter} 
                            target="_blank" 
                            sx={{ 
                              color: 'primary.main',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'scale(1.2)',
                                color: '#fff',
                                background: 'rgba(255, 255, 255, 0.1)',
                              },
                            }}
                          >
                            <TwitterIcon />
                          </IconButton>
                        )}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              textAlign: 'center',
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                color: '#fff',
                fontSize: { xs: '1.5rem', md: '1.75rem' },
              }}
            >
              Want to Join Our Journey?
            </Typography>
            <Typography 
              color="text.secondary" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              We're always looking for passionate individuals to join our team.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 