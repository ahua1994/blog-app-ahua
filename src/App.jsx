import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CustomNavbar from "./components/CustomNavbar";
import BlogContextProvider from "./contexts/BlogContext";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BlogContextProvider>
                    <AuthContextProvider>
                        <ToastContainer />
                        <CustomNavbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="details">
                                <Route path=":postId" element={<Details />} />
                            </Route>
                            <Route path="/profile" element={<Profile />}></Route>
                            <Route path="*" element={<Error />}></Route>
                        </Routes>
                    </AuthContextProvider>
                </BlogContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
