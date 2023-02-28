import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Grid from "@mui/material/Grid";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import StatBox from "../components/StatBox";
// import OverviewChart from "../components/OverviewChart";

function HomePage() {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    // <>
    //   <Box
    //     mt="20px"
    //     display="flex"
    //     gridTemplateColumns="repeat(12, 1fr)"
    //     gridAutoRows="160px"
    //     // gap="5px"
    //     sx={{
    //       "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
    //     }}
    //   >
    //     {/* ROW 1 */}
    //     <StatBox
    //       title="Direct Patients"
    //       value={5251}
    //       increase="+14%"
    //       description="Since last month"
    //       icon={
    //         <Email
    //           sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
    //         />
    //       }
    //     />
    //     <StatBox
    //       title="Telephonic Patients"
    //       value={7916}
    //       increase="+21%"
    //       description="Since last month"
    //       icon={
    //         <PointOfSale
    //           sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
    //         />
    //       }
    //     />
    //     {/* <Box
    //       gridColumn="span 8"
    //       gridRow="span 2"
    //       backgroundColor={theme.palette.background.alt}
    //       p="1rem"
    //       borderRadius="0.55rem"
    //     >
    //       <OverviewChart view="sales" isDashboard={true} />
    //     </Box> */}
    //     <StatBox
    //       title="Claim Canceled"
    //       value={59512}
    //       increase="+5%"
    //       description="Since last month"
    //       icon={
    //         <PersonAdd
    //           sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
    //         />
    //       }
    //     />
    //     <StatBox
    //       title="Claim Approved"
    //       value={65152}
    //       increase="+43%"
    //       description="Since last month"
    //       icon={
    //         <Traffic
    //           sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
    //         />
    //       }
    //     />
    //     </Box>
    // </>
    <>
    </>
  );
}

export default HomePage;
