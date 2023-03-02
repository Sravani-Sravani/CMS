import {Route, Navigate, Routes} from 'react-router-dom';
import React, {lazy, Suspense} from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import NoteAddSharpIcon from '@mui/icons-material/NoteAddSharp';
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';

const ViewCR = lazy(() => import("../pages/ViewCR/ViewCR"));


const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const CreateRequest = lazy(() => import("../pages/CreateRequest"));
const Approval = lazy(() => import("../pages/approval/Approval"));


export const menu = [
  {
    icon: <DashboardSharpIcon />,
    title: "Dashboard",
    pageLink: '/home',
    view: <Home/>,
  },
  
  {
    icon: <NoteAddSharpIcon />,
    title: "Create Request",
    pageLink: '/cr',
    view: <CreateRequest/>,
  },
  {
    icon: <FactCheckSharpIcon />,
    title: "My Approvals",
    pageLink: '/approval',
    view: <Approval/>,
  },
  {
    icon: <SummarizeSharpIcon />,
    title: "CMS Reports",
    items: [
      {
        title: "My Department Report",
        pageLink: '/page1',
        view: <Home/>,
      },
      {
        title: "My CMS Report",
        pageLink: '/page1',
        view: <Home/>,
      },
      {
        title: "Section Wise CMS Report",
        pageLink: '/page1',
        view: <Home/>,
      },
      // {
      //   title: "Work Statistics CMS Report",
      //   pageLink: '/page1',
      //   view: <Home/>,
      // },
      {
        title: "CMS Statistics Report",
        pageLink: '/page1',
        view: <Home/>,
      },
      
    ]
   
  },
  {
    icon: <AppRegistrationIcon />,
    title: "Manage Request",
    pageLink: "/viewCR",
    items: [
        // {
        //   title: "Create Employee",
        //   pageLink: "/createemployee",
        //   // view: <RegisteredPatient/>,
        // },
        // {
        //   title: "Medical Reimbursement Claim Tracker",
        //   // pageLink: "/demo",
        //   pageLink: "/medicalclaimtracker",
        //   // view: <RegisteredPatientView/>,
        // },
        // {
        //   title: "Initiate Health Card/View Application",
        //   pageLink: "/healthcardapplication",
        //   // view: <ReferredPatientView/>,
        // },
        // {
        //   title: "Initiate New/Rejected Beneficiaries",
        //   pageLink: "/initiatenewrejectedbeneficiaries",
        //   // view: <TelephonicRegView/>,
        // },
        // {
        //   title: "Download Health Card",
        //   pageLink: "/downloadhealthcard",
        //   // view: <TelephonicRegView/>,
        // }
      ]
  },
  // {
  //   icon: <LocalLibraryOutlinedIcon />,
  //   title: "Patients",
  //   items: [
  //       {
  //         title: "Telephonic Registration",
  //         pageLink: "/telephonicRegistration",
  //         view: <TelephonicRegistration/>,
  //       },
  //       {
  //         title: "Registered Patients View",
  //         pageLink: "/telephonicRegEdit",
  //         view: <TelephonicRegEdit/>,
  //       },
  //       {
  //         title: "Telephonic Registered Patients",
  //         pageLink: "/telephonicRegView",
  //         view: <TelephonicRegView/>,
  //       },
  //     ]
  // },
  // {
  //   icon: <TrendingUpOutlinedIcon />,
  //   title: "Reports",
  //   pageLink: "/demo",
  //   view: <Demo/>,
  // },
  // {
  //   icon: <DescriptionOutlinedIcon />,
  //   title: "Settings"
  // }
];

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/home" element={<Home/>} />
 
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
        </Routes>
      </Suspense>
  );
}
