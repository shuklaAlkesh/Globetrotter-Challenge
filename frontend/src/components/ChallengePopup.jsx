import React from 'react';
import { Typography, Button, Card, CardContent, Box } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ChallengePopup = ({ username, onClose }) => {
  const shareToWhatsApp = () => {
    const inviteLink = `${window.location.origin}/game?invitedBy=${username}`;
    const message = `Join me in playing Globetrotter! I challenge you to beat my score! ${inviteLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="share-popup"
    >
      <Card sx={{ maxWidth: 500, width: '90%', borderRadius: 4, boxShadow: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Challenge Your Friends!
          </Typography>
          <div id="invite-preview" className="invite-preview">
            <div className="preview-content">
              <Typography variant="h6" gutterBottom>
                Join me in Globetrotter!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Challenge from: {username}
              </Typography>
              <div className="game-preview">
                <div className="game-preview-placeholder">
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Globetrotter Challenge
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    Test your geography knowledge!
                  </Typography>
                  <div className="preview-stats">
                    <div className="stat">
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Countries
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        195
                      </Typography>
                    </div>
                    <div className="stat">
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Questions
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        10
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
            <Button
              onClick={shareToWhatsApp}
              variant="contained"
              size="large"
              startIcon={<FaWhatsapp />}
              sx={{ 
                py: 1.5, 
                borderRadius: '30px',
                bgcolor: '#25D366',
                '&:hover': { bgcolor: '#128C7E' }
              }}
            >
              Share on WhatsApp
            </Button>
            <Button
              onClick={onClose}
              variant="outlined"
              size="large"
              sx={{ 
                py: 1.5, 
                borderRadius: '30px',
                borderColor: 'error.main',
                color: 'error.main',
                '&:hover': { 
                  borderColor: 'error.dark',
                  bgcolor: 'error.main',
                  color: 'white'
                }
              }}
            >
              Close
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChallengePopup; 