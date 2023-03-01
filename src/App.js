import React, {lazy, Suspense} from 'react'
import { Route, Navigate, Routes} from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// import Header from './components/Header';
// import Footer from './components/Footer';

// import {baseTheme} from './utils/Theme'
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ColorModeContextProvider } from "./utils/ColorModeContext";
import  Header  from "./layouts/Header";

/*****Pages******/
const Home = lazy(() => import("./pages/Home"));
const RegisteredPatient = lazy(() => import("./pages/RegisteredPatient"));
const Login = lazy(() => import("./pages/auth/Login"));
const RegisteredPatientView = lazy(() => import("./pages/RegisteredPatientView"));
const ReferredPatientView = lazy(() => import("./pages/ReferredPatientView"));
const TelephonicRegView = lazy(() => import("./pages/TelephonicRegView"));
const TelephonicRegistration = lazy(() => import("./pages/TelephonicRegistration"));
const TelephonicRegEdit = lazy(() => import("./pages/TelephonicRegEdit"));
const Page1 = lazy(() => import("./components/Page1"))
const Page2 = lazy(() => import("./components/Page2"))
const Page3 = lazy(() => import("./components/ChangeRequestId"))
const CreateRequest = lazy(() => import("./pages/CreateRequest"));
const ViewCR = lazy(() => import("./pages/ViewCR"));
const NewPage = lazy(() => import("./pages/NewPage"));
const Approval = lazy(() => import("./pages/approval/Approval"));
const DisplayData = lazy(() => import("./pages/approval/approval-components/DisplayData"))

// import FullLayout from "./layouts/FullLayout";

const App = () => {

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     primary: {
  //       main: "#0d47a1",
  //       light: "#e6f4ff",
  //     },
  //     secondary: {
  //       main: "#1e4db7",
  //     },
  //   },
  // });
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });
  
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <ColorModeContextProvider>
          <AppRoutes/>
      </ColorModeContextProvider>
      {/* </ThemeProvider> */}
    </>
  );
}


const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      {/* <Router> */}
      <Routes>
      <Route path="/" element={<Login/>} exact />
      <Route element={<Header />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/approval" element={<Approval/>} />
        <Route exact path="/dataTable" element={<DisplayData/>} />
          {/* {menu.map((page, index) => {
            return (
              <Route
                exact
                element={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })} */}
          {/* <Navigate to="/" /> */}
          <Route exact path="/page1" element={<Page1 />}></Route>
          <Route exact path="/page2" element={<Page2 />}></Route>
          <Route exact path="/cri" element={<Page3 />}></Route>
          <Route exact path="/cr" element={<CreateRequest/>}></Route>
          <Route path="/newPage" element={<NewPage/>}></Route>
        <Route path="/viewCR" element={<ViewCR/>}></Route>

        </Route>
      </Routes>
      {/* </Router> */}
    </Suspense>
  );
}


export default App
