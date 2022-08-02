import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const LogsZone = (props) => {
  const { logs } = props;

  useEffect(() => {}, [logs]);

  return (
    <Box sx={{ flexGrow: 1, border: '1px dashed grey', borderRadius: '8px', height: '200px', overflow: 'hidden', overflowY: "scroll", backgroundColor: '#fff', padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          {logs && logs.map((log, index) => (
            <Typography key={index} sx={{color: 'grey'}}>{`Button № ${log.button}: ${log.endTime} - ${log.timeOfPressedButton} (${log.difference})`}</Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogsZone;
