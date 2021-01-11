import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import ImagesGrid from './components/ImagesGrid';
import AboutContainer from './components/AboutContainer';
import TopBar from './components/TopBar';
import TitleContainer from './components/TitleContainer';
import Footer from './components/Footer';
import SkillsContainer from './components/SkillsContainer'
import InformationContainer from './components/InformationContainer'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: teal[200],
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 400,
      fontSize: 16,
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);
  const [bigUrl, setBigUrl] = useState('');
  const [alt, setAlt] = useState('');

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <div className="top">
            <TopBar />
          </div>
          <div className="title">
            <TitleContainer />
          </div>
          <div className="box">
            <div className="column">
              <AboutContainer />
              <InformationContainer />
            </div>
            <div className="column">
              <ImagesGrid setAlt={setAlt} open={open} setOpen={setOpen} bigUrl={bigUrl} setBigUrl={setBigUrl} />
              <SkillsContainer />
            </div>
          </div>
          <div className="foot">
            <Footer />
          </div>
            <Dialog
              maxWidth="md"
              open={open}
              onClose={() => setOpen(false)}
            >
                <img width={"100%"} alt={alt} src={bigUrl}>
                </img>
            </Dialog>
          </div>
      </ThemeProvider>
    </>
  );
}

export default App;
