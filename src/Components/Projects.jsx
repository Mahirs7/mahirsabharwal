import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import Project from './Project';
import './Projects.css';

const projects = [
  {
    title: 'UIUC Courses Sentiment Analysis',
    description: 'A web application that lets users search UIUC courses and view detailed sentiment analysis reports generated from Reddit data.',
    links: {
      github: 'https://github.com/Mahirs7',
      external: 'https://Mahis7.com',
    },
    stack: ['Python', 'React', 'Node', 'Express', 'MongoDB'],
  },
  {
    title: 'Time to Have More Fun',
    description: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.',
    links: {
      github: 'https://github.com/projecttwo',
      external: 'https://projecttwo.com',
    },
    stack: ['Next.js', 'Tailwind CSS', 'Firebase'],
  },
  // Add more projects here
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projectsToShow = showMore ? projects : projects.slice(0, 6);

  return (
    <Container className="projects-section" maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center" className="projects-title">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projectsToShow.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
