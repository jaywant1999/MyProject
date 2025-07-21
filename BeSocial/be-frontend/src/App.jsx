  import { Route, Routes } from "react-router-dom";
  import "./App.css";
  import Authentication from "./Pages/Authentication/Authentication";
  import HomePage from "./Pages/Home/HomePage";
  import Message from "./Pages/Message/Message";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect } from "react";
  import { getProfileAction } from "./ReduxComponents/Auth/auth.action";
 
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
      <div>
        <Routes>
          <Route
            path="/*"
            element={auth.user ? <HomePage /> : <Authentication />}
          />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    );
  }

  export default App;
