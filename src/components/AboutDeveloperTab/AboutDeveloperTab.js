import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import photo from "../../assets/images/photoMin.png";

import styles from "./AboutDeveloperTab.module.scss";

const AboutDeveloperTab = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <img src={photo} alt="Developer" className={styles.photoImg} />
        </Grid>
        <Grid item xs={8}>
          <Typography>This project is created by Kirill Nazarov</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutDeveloperTab;
