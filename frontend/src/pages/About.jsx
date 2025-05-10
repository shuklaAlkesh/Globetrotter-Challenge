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

const TeamMember = ({ name, role, avatar, social }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -5 }}
    sx={{
      p: 3,
      height: '100%',
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    }}
  >
    <Avatar
      src={avatar}
      alt={name}
      sx={{
        width: 120,
        height: 120,
        mx: 'auto',
        mb: 2,
        border: '4px solid',
        borderColor: 'primary.main',
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
        <IconButton href={social.github} target="_blank" sx={{ color: 'primary.main' }}>
          <GitHubIcon />
        </IconButton>
      )}
      {social.linkedin && (
        <IconButton href={social.linkedin} target="_blank" sx={{ color: 'primary.main' }}>
          <LinkedInIcon />
        </IconButton>
      )}
      {social.twitter && (
        <IconButton href={social.twitter} target="_blank" sx={{ color: 'primary.main' }}>
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
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
      name: 'John Doe',
      role: 'Lead Developer',
      avatar: null,
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      avatar: null,
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Mike Johnson',
      role: 'Game Designer',
      avatar: null,
      social: {
        github: 'https://github.com',
        twitter: 'https://twitter.com',
      },
    },
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
      py: 8,
      background: 'transparent'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Globetrotter
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
            >
              Your journey to becoming a geography expert starts here. Explore the world, test your knowledge, and compete with players globally.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              mb: 8,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#fff' }}>
              How to Play
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              1. Start by creating an account or logging in to track your progress and compete on the leaderboard.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              2. Each game consists of multiple questions about different destinations around the world.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              3. You'll receive clues about a location - use your knowledge to identify the correct destination.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              4. Earn points for correct answers (+10) and lose points for incorrect ones (-5).
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              5. Learn interesting facts about each destination, whether you get the answer right or wrong.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              6. Compete with other players and climb the global leaderboard to become the ultimate globetrotter!
            </Typography>
          </Paper>

          {/* Mission Section */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                }}
              >
                <PublicIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
                  Our Mission
                </Typography>
                <Typography color="text.secondary">
                  To make learning about world geography fun and engaging through
                  interactive gameplay and challenging puzzles.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                }}
              >
                <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
                  Our Vision
                </Typography>
                <Typography color="text.secondary">
                  To create a global community of curious minds who love to explore
                  and learn about different cultures and places.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
                  Our Values
                </Typography>
                <Typography color="text.secondary">
                  We believe in creating an inclusive, educational, and entertaining
                  platform that brings people together through shared experiences.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Team Section */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              color: '#fff',
            }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <TeamMember {...member} />
              </Grid>
            ))}
          </Grid>

          {/* Contact Section */}
          <Box
            sx={{
              mt: 8,
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
              Want to Join Our Journey?
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              We're always looking for passionate individuals to join our team.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
                },
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