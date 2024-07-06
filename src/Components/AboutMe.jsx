import React from 'react';
import SkillComponent from './SkillComponent';
import './AboutMe.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const AboutMe = () => {
  return (
    <Container className="main-about-me" maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center">
        About Me
      </Typography>
      <Typography variant="h5" component="h2" paragraph align="center" className="about-intro">
        I am Mahir Sabharwal, a student at UIUC studying Math and CS. I am an aspiring Software Engineer with a keen interest in generative AI and quantitative finance. I enjoy learning about software architecture and design, as well as statistical techniques such as stochastic processes and machine learning models. I am passionate about leveraging technology to solve problems and make a meaningful impact.
      </Typography>
      <Grid container spacing={4} className="about-content">
        <Grid item xs={12} md={6} className="about-section">
          <Typography variant="h5" component="div" className="section-heading-left">I am involved in:</Typography>
          <List>
          <ListItem>
              <ListItemText primary="Software Engineering Intern at GamePlay" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Consultant at Illinois Sports Consulting Agency" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Head of Computer Vision at Illini Autonomous Vehicles" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Member of SigAIDA - ACM@UIUC" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} className="about-section">
          <Typography variant="h5" component="div" className="section-heading-left">Classes I have taken:</Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary={<a href="https://www.cs124.org">Introduction to Computer Science I (Java)</a>} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={<a href="https://cs128.org">Introduction to Computer Science II (C++)</a>} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={<a href="http://catalog.illinois.edu/courses-of-instruction/math/">Calculus I, Calculus II, Calculus III</a>} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={<a href="https://discovery.cs.illinois.edu">Data Science I (Python)</a>} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={<a href="https://exploration.stat.illinois.edu">Data Science II (Python)</a>} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={<a href="https://courses.grainger.illinois.edu/cs173/sp2024/ALL-lectures/">Discrete Structures</a>} 
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} className="about-section">
          <Typography variant="h5" component="div" className="section-heading-left">Programming languages I know:</Typography>
          <div className="skills-container">
            <SkillComponent name="Python" />
            <SkillComponent name="Java" />
            <SkillComponent name="JavaScript" />
            <SkillComponent name="C++" />
            <SkillComponent name="C#" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="about-section">
          <Typography variant="h5" component="div" className="section-heading-left">Frameworks and libraries I use:</Typography>
          <div className="skills-container">
            <SkillComponent name="React" />
            <SkillComponent name="React Native" />
            <SkillComponent name="PyTorch" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="about-section">
          <Typography variant="h5" component="div" className="section-heading-left">Databases I use:</Typography>
          <div className="skills-container">
            <SkillComponent name="MySQL" />
            <SkillComponent name="PostgreSQL" />
            <SkillComponent name="Firebase" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
