import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import ReactGA from "react-ga";
function App() {
  useEffect(() => {
    // Change this below tracking id to your own
    ReactGA.initialize("UA-199564465-1");
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
