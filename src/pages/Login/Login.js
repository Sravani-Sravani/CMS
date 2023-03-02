import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Routes, Route, useNavigate } from "react-router-dom";

import bgImage from "../../assets/images/home.png";
import logoImage from "../../assets/images/logo.png";

import logo_left from "../../assets/images/logo_left.png";
import logo_right from "../../assets/images/logo_right.png";
import { TextFields } from "@mui/icons-material";
import blue_bg from "../../assets/images/BLUE_BG.jpg";
import { border } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.ysraarogyasri.ap.gov.in/"
        target="_blank"
      >
        Dr.YSR Aarogyasri Health Care Trust
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        md={12}
        sx={{
          backgroundImage: `url(${blue_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container xs={8} sm={8} lg={11} md={11} m={8} spacing={2}>
          <Grid
            item
            xs={5}
            md={5}
            sx={{
              height: "80vh",
              spacing: 0,
              backgroundColor: "#F1F8FF",
              borderRight: "1px solid #CDE6FF",
              borderRadius: "5px 0 0 5px"
            }}
          >
            <Grid
              md={8}
              xs={8}
              component="img"
              alt="The house from the offer."
              src={logo_left}
              margin={"15%"}
            />
          </Grid>
          <Grid
            item
            xs={7}
            md={7}
            sx={{
              height: "80vh",
              spacing: 0,
              backgroundColor: "white",
              borderRight: "1px solid #CDE6FF",
            }}
          >
            <Grid m={4}>
              <Grid
                md={12}
                xs={12}
                component="img"
                alt="The house from the offer."
                src={logo_right}
                marginLeft={"15%"}
                marginTop={"5%"}
              />
              <Grid item xs={12} md={12}>
                <Typography variant="h5" mt={1}>Change Management System</Typography>
                <Grid item md={12} xs={12} mt={1}>
                  <Grid item md={10} xs={10}>
                    <TextField
                      id="outlined-basic"
                      label="Email Id"
                      variant="outlined"
                      fullWidth
                      sx={{ border: "1px solid #EAEDF1", borderRadius: "5px" }}
                    />
                  </Grid>
                  <Grid item md={10} xs={10} mt={4}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      sx={{ border: "1px solid #EAEDF1", borderRadius: "5px" }}
                    />
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={7}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Remember me"
                    />
                    </Grid>
                    <Grid item xs={3} mt={1} marginLeft={3} >
                        <Typography color={"#AEAEAE"}>
                            Forget Password?
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container xs={10} justifyContent={"end"}>
                <Button variant="contained" type="submit" onClick={navigateToHome} sx={{backgroundColor: "#2169B2", padding: "12px 51px",borderRadius: "5px"}}>LOGIN</Button>
                </Grid>
                <Grid container item xs={10} justifyContent={"center"} mt={2}>
                      {/* <Typography color={"#AEAEAE"}>
                        Don't have an account?
                        <Link href="#">
                    {"Signup"}
                  </Link>
                      </Typography> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
