import React from 'react';
import { Box, Card, CardContent, Typography, Container, Grid } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PublicIcon from '@mui/icons-material/Public';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ComputerIcon from '@mui/icons-material/Computer';
import '../assets/styles/Hobbies.scss';

const interests = [
  {
    category: "Continuous Learning",
    topic: "Reading",
    description: "Finance, business strategy, executive leadership, and personal growth.",
    icon: <MenuBookIcon fontSize="large" sx={{ color: '#818cf8' }} />,
    accent: 'indigo'
  },
  {
    category: "Health & Discipline",
    topic: "Fitness",
    description: "Strength training, disciplined workouts, and maintaining peak energy.",
    icon: <FitnessCenterIcon fontSize="large" sx={{ color: '#34d399' }} />,
    accent: 'emerald'
  },
  {
    category: "Global Perspective",
    topic: "Traveling",
    description: "Exploring new destinations, diverse cultures, and architectural heritage.",
    icon: <PublicIcon fontSize="large" sx={{ color: '#38bdf8' }} />,
    accent: 'cyan'
  },
  {
    category: "Recreation & Focus",
    topic: "Music",
    description: "Instrumental, acoustic, and modern tunes to unwind, focus, and reflect.",
    icon: <HeadphonesIcon fontSize="large" sx={{ color: '#fb7185' }} />,
    accent: 'rose'
  },
  {
    category: "Digital Explorer",
    topic: "Technology",
    description: "Fintech innovations, AI developments, and emerging analytics tools.",
    icon: <ComputerIcon fontSize="large" sx={{ color: '#c084fc' }} />,
    accent: 'violet'
  }
];

const Hobbies = () => {
  return (
    <div className="hobbies-container" id="hobbies">
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box textAlign="center" mb={{ xs: 4, md: 6 }} className="personal-dimension-header">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom className="dimension-title">
            Personal Dimension
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" fontStyle="italic" sx={{ maxWidth: 640, mx: 'auto' }} className="dimension-subtitle">
            Beyond balance sheets: passions and disciplines that fuel energy, curiosity, and high performance.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
          {interests.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                className={`personal-dimension-card accent-${item.accent}`}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  borderRadius: '14px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 28px -4px rgba(0, 0, 0, 0.45)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'left', p: 3 }}>
                  <Box mb={2} className="card-icon-box">
                    {item.icon}
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="600" gutterBottom className="card-category">
                    {item.category}
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 1.2, fontSize: '0.75rem', mb: 1.5, fontWeight: 700 }} className="card-topic">
                    {item.topic}
                  </Typography>
                  <Typography variant="body2" className="card-description" sx={{ lineHeight: 1.6 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Hobbies;
