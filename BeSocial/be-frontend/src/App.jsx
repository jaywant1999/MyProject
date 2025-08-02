  import { Route, Routes } from "react-router-dom";
  import "./App.css";
  import Authentication from "./Pages/Authentication/Authentication";
  import HomePage from "./Pages/Home/HomePage";
  import Message from "./Pages/Message/Message";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";
  import { getProfileAction } from "./ReduxComponents/Auth/auth.action";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/theme";
 
  function App() {
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    const jwt = localStorage.getItem("jwt");
    useEffect(() => {
      if (jwt) {
        dispatch(getProfileAction(jwt));
      }
    }, [jwt,dispatch]);

    return (
      <ThemeProvider theme={darkTheme}>
    
        <Routes>
          <Route
            path="/*"
            element={auth.user ? <HomePage /> : <Authentication />}
          />
          <Route path="/message" element={<Message />} />
        </Routes>
    
      </ThemeProvider>
    );
  }

  export default App;
