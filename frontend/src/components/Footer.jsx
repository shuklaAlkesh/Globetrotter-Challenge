import { Box, Container, Typography, Link, IconButton, Grid, Divider, Stack, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuizIcon from '@mui/icons-material/Quiz';
import { motion } from 'framer-motion';

const FooterSection = ({ title, children }) => (
  <Box sx={{ mb: { xs: 4, md: 0 } }}>
    <Typography 
      variant="h6" 
      sx={{ 
        color: 'primary.main',
        mb: 2,
        fontWeight: 'bold',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -8,
          left: 0,
          width: 40,
          height: 2,
          backgroundColor: 'primary.main',
          borderRadius: 2
        }
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const FooterLink = ({ href, children }) => (
  <Link 
    href={href} 
    color="inherit" 
    sx={{ 
      display: 'block',
      textDecoration: 'none',
      py: 0.5,
      '&:hover': {
        color: 'primary.main',
        transform: 'translateX(5px)',
        transition: 'all 0.3s ease'
      }
    }}
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon: Icon, href }) => (
  <IconButton 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{ 
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      '&:hover': {
        color: 'primary.main',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-3px)',
        transition: 'all 0.3s ease'
      }
    }}
  >
    <Icon />
  </IconButton>
);

const StatCard = ({ icon: Icon, title, value }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 2,
      transition: 'all 0.3s ease',
      flex: 1,
      minWidth: '200px',
      '&:hover': {
        transform: 'translateY(-5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Icon sx={{ color: 'primary.main', mr: 1 }} />
      <Typography variant="subtitle2" fontWeight="bold">
        {title}
      </Typography>
    </Box>
    <Typography variant="h6" color="primary.main" fontWeight="bold">
      {value}
    </Typography>
  </Paper>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: 2,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      }
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <Icon sx={{ color: 'primary.main', mr: 1 }} />
      <Typography variant="subtitle2" fontWeight="bold">
        {title}
      </Typography>
    </Box>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 4,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Top Section with Logo and Description */}
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: { xs: 6, md: 8 },
              mb: 4
            }}
          >
            <Box sx={{ 
              flex: { md: '0 0 300px' },
              mb: { xs: 4, md: 0 }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3
              }}>
                <PublicIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h5" fontWeight="bold">
                  Globetrotter
                </Typography>
              </Box>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  mb: 3,
                  lineHeight: 1.6
                }}
              >
                The Ultimate Travel Guessing Game! Test your knowledge of world destinations through cryptic clues and unlock fascinating facts about each location.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <SocialIcon icon={TwitterIcon} href="https://twitter.com" />
                <SocialIcon icon={GitHubIcon} href="https://github.com" />
                <SocialIcon icon={LinkedInIcon} href="https://linkedin.com" />
              </Box>
            </Box>

            <Grid 
              container 
              spacing={6}
              sx={{ 
                flex: 1,
                mt: { xs: 2, md: 0 }
              }}
            >
              <Grid xs={12} sm={6} md={6}>
                <FooterSection title="Quick Links">
                  <Stack spacing={1.5}>
                    <FooterLink href="#features">Features</FooterLink>
                    <FooterLink href="#how-to-play">How to Play</FooterLink>
                    <FooterLink href="#leaderboard">Leaderboard</FooterLink>
                    <FooterLink href="#about">About Us</FooterLink>
                  </Stack>
                </FooterSection>
              </Grid>
              <Grid xs={12} sm={6} md={6}>
                <FooterSection title="Game Features">
                  <Stack spacing={2.5}>
                    <FeatureCard
                      icon={PsychologyIcon}
                      title="Cryptic Clues"
                      description="Test your knowledge with cleverly crafted clues about famous landmarks."
                    />
                    <FeatureCard
                      icon={LocationOnIcon}
                      title="Global Destinations"
                      description="Explore hundreds of fascinating places from around the world."
                    />
                  </Stack>
                </FooterSection>
              </Grid>
            </Grid>
          </Box>

          {/* Game Stats Section */}
          <Box sx={{ mt: 2 }}>
            <FooterSection title="Game Stats">
              <Box 
                sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  flexWrap: 'wrap',
                  mt: 2
                }}
              >
                <StatCard
                  icon={QuizIcon}
                  title="Daily Challenges"
                  value="100+"
                />
                <StatCard
                  icon={LocationOnIcon}
                  title="Destinations"
                  value="500+"
                />
                <StatCard
                  icon={EmojiEventsIcon}
                  title="Active Players"
                  value="10K+"
                />
                <StatCard
                  icon={PsychologyIcon}
                  title="Total Clues"
                  value="1000+"
                />
              </Box>
            </FooterSection>
          </Box>

          <Divider />

          {/* Bottom Section */}
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Globetrotter Challenge. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Privacy Policy
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Terms of Service
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Contact Us
              </Link>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
