import { Box, Container, Typography, Button, Grid, Paper, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -10 }}
    sx={{
      p: 3,
      height: '100%',
      background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
    </Box>
    <Typography color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

const LeaderboardCard = ({ rank, name, score, avatar, isTopThree }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.02 }}
  >
    <Paper
      component={motion.div}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
      }}
      sx={{
        p: { xs: 1.5, md: 2 },
        mb: 2,
        background: isTopThree 
          ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)'
          : 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 1.5, md: 2 },
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&::before': isTopThree ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
        } : {},
        '&:hover': {
          transform: 'translateY(-5px)',
          '& .rank-circle': {
            transform: 'scale(1.1)',
          },
          '& .player-avatar': {
            transform: 'scale(1.1)',
            borderColor: 'primary.main',
          },
        },
      }}
    >
      <Box
        className="rank-circle"
        sx={{
          width: { xs: 36, md: 48 },
          height: { xs: 36, md: 48 },
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isTopThree ? 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)' : 'rgba(255, 255, 255, 0.1)',
          color: isTopThree ? '#fff' : 'text.secondary',
          fontWeight: 'bold',
          fontSize: { xs: '0.9rem', md: '1.25rem' },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {rank}
      </Box>
      <Avatar
        className="player-avatar"
        src={avatar}
        alt={name}
        sx={{
          width: { xs: 36, md: 48 },
          height: { xs: 36, md: 48 },
          border: '2px solid',
          borderColor: isTopThree ? 'primary.main' : 'transparent',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {name.charAt(0)}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            fontSize: { xs: '0.85rem', md: '1rem' },
            mb: 0.5,
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <StarIcon
                sx={{
                  fontSize: { xs: 14, md: 20 },
                  color: i < Math.floor(score / 20) ? 'primary.main' : 'text.secondary',
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: isTopThree ? 'primary.main' : '#fff',
          fontSize: { xs: '1rem', md: '1.25rem' },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {score}
      </Typography>
    </Paper>
  </motion.div>
);

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const leaderboardData = [
    { rank: 1, name: 'John Doe', score: 980, avatar: null },
    { rank: 2, name: 'Jane Smith', score: 950, avatar: null },
    { rank: 3, name: 'Mike Johnson', score: 920, avatar: null },
    { rank: 4, name: 'Sarah Wilson', score: 890, avatar: null },
    { rank: 5, name: 'David Brown', score: 870, avatar: null },
  ];

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
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
            Welcome to Globetrotter
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Test your knowledge of world destinations through cryptic clues and unlock fascinating facts about each location.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
              },
            }}
          >
            Start Playing
          </Button>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={PublicIcon}
              title="Global Destinations"
              description="Explore hundreds of fascinating places from around the world. Each destination comes with unique clues and interesting facts."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={PsychologyIcon}
              title="Cryptic Clues"
              description="Challenge yourself with cleverly crafted clues that test your knowledge of world landmarks, cultures, and geography."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={EmojiEventsIcon}
              title="Compete & Win"
              description="Track your progress, earn points, and compete with players from around the world on our global leaderboard."
            />
          </Grid>
        </Grid>

        {/* Leaderboard Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            mt: { xs: 6, md: 8 },
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 4,
              gap: 2,
            }}
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <EmojiEventsIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />
            </motion.div>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: { xs: '1.75rem', md: '2.125rem' },
              }}
            >
              Global Leaderboard
            </Typography>
          </Box>

          {isMobile ? (
            // Mobile View - Cards
            <Box sx={{ px: { xs: 1, sm: 2 } }}>
              {leaderboardData.map((player, index) => (
                <LeaderboardCard
                  key={player.rank}
                  {...player}
                  isTopThree={index < 3}
                />
              ))}
            </Box>
          ) : (
            // Desktop View - Table
            <TableContainer
              component={Paper}
              sx={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>Rank</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>Player</TableCell>
                    <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>Rating</TableCell>
                    <TableCell align="right" sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaderboardData.map((player, index) => (
                    <TableRow
                      key={player.rank}
                      component={motion.tr}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      sx={{
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          transform: 'scale(1.01)',
                          transition: 'all 0.3s ease-in-out',
                        },
                        background: index < 3 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      <TableCell>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: index < 3 ? 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)' : 'rgba(255, 255, 255, 0.1)',
                              color: index < 3 ? '#fff' : 'text.secondary',
                              fontWeight: 'bold',
                              transition: 'all 0.3s ease-in-out',
                            }}
                          >
                            {player.rank}
                          </Box>
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Avatar
                              src={player.avatar}
                              alt={player.name}
                              sx={{
                                width: 40,
                                height: 40,
                                border: '2px solid',
                                borderColor: index < 3 ? 'primary.main' : 'transparent',
                                transition: 'all 0.3s ease-in-out',
                              }}
                            >
                              {player.name.charAt(0)}
                            </Avatar>
                          </motion.div>
                          <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                            {player.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <StarIcon
                                sx={{
                                  fontSize: { xs: 16, md: 20 },
                                  color: i < Math.floor(player.score / 20) ? 'primary.main' : 'text.secondary',
                                  transition: 'all 0.3s ease-in-out',
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          sx={{
                            color: index < 3 ? 'primary.main' : '#fff',
                            fontWeight: 'bold',
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          {player.score}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'rgba(255, 255, 255, 0.08)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                View Full Leaderboard
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 