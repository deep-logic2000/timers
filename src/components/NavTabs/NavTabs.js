import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { ButtonsZone, LogsZone } from "../TimerZone";
import AboutDeveloperTab from "../AboutDeveloperTab/AboutDeveloperTab";
import { startTimer } from "../../store/actionCreators/timerAC";

import styles from "./NavTabs.module.scss";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavTabs = () => {
  const [value, setValue] = React.useState(0);
  const logs = useSelector((state) => state.timer.logs);
  const dispatch = useDispatch();

  useEffect(() => {}, [logs]);
  useEffect(() => {
    dispatch(startTimer());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#85c2ff",
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Timers" {...a11yProps(0)} />
          <Tab label="About Developer" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={styles.tabTimers}>
        <ButtonsZone />
        <LogsZone logs={logs} />
      </TabPanel>
      <TabPanel value={value} index={1} className={styles.tabAboutDeveloper}>
        <AboutDeveloperTab />
      </TabPanel>
    </Box>
  );
};

export default NavTabs;
