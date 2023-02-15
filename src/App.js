import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./Components/Main/Main";
import GlobalStyles from "./GlobalStyle/GlobalStyles";

import { themeObj } from "./theme/styledTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterKitchen from "./Components/RegisterKitchen/RegisterKitchen";
function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeObj}>
        <div className="App">
          <GlobalStyles />
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
              <Route exact path="register" element={<RegisterKitchen />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
