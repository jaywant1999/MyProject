import Login from "./Login";
import App from "../App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../css/LandingPage.css';

const LandingPage=()=>{
    return(
        <>
            <div className="lpage">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}></Route>
                        <Route path="/App/*" element={<App/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default LandingPage;
