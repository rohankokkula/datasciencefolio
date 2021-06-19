import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import ReactGA from "react-ga";
require('dotenv').config()
const track=process.env.TRACKING_ID;
function App() {
  useEffect(() => {
    console.log(track);
    ReactGA.initialize(track);
  });
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
