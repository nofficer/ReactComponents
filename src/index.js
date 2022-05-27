import ReactDOM from "react-dom/client";
import './i18nextConf';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageSelect from './components/admin/LanguageSelect'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import your route components too
import './index.css'
import Home from './components/admin/Home'
import FormHolder from './components/forms/FormHolder'
import Navbar from './components/admin/Navbar'

import Grid from '@mui/material/Grid';

const pages = [{label:'Home',navLink:'/'}, {label:'Forms',navLink:'/FormHolder'}];


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Grid container>




    <BrowserRouter>
    <Navbar
    smallIcon={<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />}
    icon={<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />}
    backgroundColor='black'
    fontColor='white'
    pages={pages}
    settingsMenu={<LanguageSelect color='white'/>}
     />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/FormHolder" element={<FormHolder />}>
        </Route>
      </Routes>
    </BrowserRouter>

  </Grid>
);
