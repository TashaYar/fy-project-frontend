import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./Components/Main/Main";
import { themeObj } from "./theme/styledTheme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeObj}>
        <div className="App">
          <Routes>
            <Route path="/">
              <Route index element={<Main />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
