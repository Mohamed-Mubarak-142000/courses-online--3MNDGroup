import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import CustomTabPanel from "../components/CustomTabPanel";
import Reviews from "../components/Reviews";

const TabsSection = ({ courseId, data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="my-10 min-h-[50vh]">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description of Course" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {data?.data?.description}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Reviews courseId={courseId} />
      </CustomTabPanel>
    </section>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default TabsSection;
