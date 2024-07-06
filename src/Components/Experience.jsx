import React, { useState } from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Experience.css';

const experiences = [
  {
    company: "GamePlay Inc.",
    title: "Full Stack Software Engineer Intern @ GamePlay Inc.",
    date: "May 2024 - Present",
    description: [
      "Improved the user interface and experience by implementing sophisticated autocomplete-driven search features using C# and JavaScript, resulting in a 35% user engagement increase",
      "Refactored several frontend JavaScript scripts and C# ViewModels and pages, increasing code readability and maintainability, and page loading speed by 15%",
      "Utilized Entity Framework with LINQ for ORM in C#, streamlining database operations and improving data access efficiency, resulting in a 30% decrease in query execution times", 
      "Designed PostgreSQL schemas utilizing inheritance-based tables, while automating data retrieval from Google Earth for sports facility information and efficiently storing it in a PostgreSQL server, reducing data harvesting time by over 90%"
    ]
  },
  {
    company: "Sportz Interactive",
    title: "Machine Learning Engineer Intern @ Sportz Interactive",
    date: "Jan 2016 - Apr 2018",
    description: [
      "Developed logistic regression models using Scikit-Learn and Python to calculate pre-game and in-game win probabilities for NBA games, significantly improving predictive insights and decision-making accuracy",
      "Processed, cleaned, and normalized large datasets with Pandas and NumPy to ensure reliability and suitability for analysis and modeling",
      "Conducted in-depth research and exploratory data analysis on NBA game-level data to identify key variables influencing game outcomes, enhancing predictive model accuracy"
    ]
  },
  // Add more experiences here
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="main-experience">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" className="experience-title">
          Experience
        </Typography>
        <Grid container spacing={4} className="experience-grid">
          <Grid item xs={12} md={4} className="timeline-container">
            <Timeline align="left" className="timeline">
              {experiences.map((exp, index) => (
                <TimelineItem key={index} onClick={() => setSelectedExperience(exp)} className="timeline-item">
                  <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                      {exp.date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index < experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="h1" className="timeline-company">
                      {exp.company}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
          <Grid item xs={12} md={8} className="summary-container">
            <div className="experience-summary">
              <Typography variant="h4" component="h2" gutterBottom>
                {selectedExperience.title}
              </Typography>
              <List>
                {selectedExperience.description.map((desc, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ArrowForwardIcon style={{ color: '#64ffda' }} />
                    </ListItemIcon>
                    <ListItemText primary={desc} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Experience;
