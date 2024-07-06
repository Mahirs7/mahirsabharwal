import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Project.css';

const Project = ({ title, description, links, stack, icon }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className="project-card" style={{backgroundColor:"#0a192f", borderRadius: "30px"}}>
        <CardContent className="project-inner">
          <div className="project-top">
            <FolderIcon className="project-icon" />
            <div className="project-links">
              {links.github && (
                <a href={links.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
              )}
              {links.external && (
                <a href={links.external} aria-label="External Link" target="_blank" rel="noreferrer">
                  <OpenInNewIcon />
                </a>
              )}
            </div>
          </div>
          <Typography variant="h5" component="h2" className="project-title">
            {title}
          </Typography>
          <Typography variant="body1" component="p" className="project-description">
            {description}
          </Typography>
          <div className="project-stack">
            {stack.map((tech, index) => (
              <Typography variant="body2" component="span" key={index} className="tech">
                {tech}
              </Typography>
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Project;
