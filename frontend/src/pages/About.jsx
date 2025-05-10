import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const TeamMember = ({ name, role, avatar, social }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -5 }}
    sx={{
      p: 3,
      height: '100%',
      background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      {name}
    </Typography>
    <Typography color="text.secondary" sx={{ mb: 2 }}>
      {role}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      {social.github && (
        <IconButton href={social.github} target="_blank" color="primary">
          <GitHubIcon />
        </IconButton>
      )}
      {social.linkedin && (
        <IconButton href={social.linkedin} target="_blank" color="primary">
          <LinkedInIcon />
        </IconButton>
      )}
      {social.twitter && (
        <IconButton href={social.twitter} target="_blank" color="primary">
          <TwitterIcon />
        </IconButton>
      )}
    </Box>
  </Paper>
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

  return (
    <Box sx={{ minHeight: '100vh', py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{ mb: 8 }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Globetrotter
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            A modern travel guessing game that combines education with entertainment,
            helping players learn about world destinations through engaging gameplay.
          </Typography>

          {/* Mission Section */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                  borderRadius: 2,
                }}
              >
                <PublicIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
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
                  background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                  borderRadius: 2,
                }}
              >
                <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
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
                  background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                  borderRadius: 2,
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
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
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
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
        </Box>
      </Container>
    </Box>
  );
};

export default About; 