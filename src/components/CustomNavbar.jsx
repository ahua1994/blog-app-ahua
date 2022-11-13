import "./CustomNavbar.scss";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const CustomNavbar = () => {
    const navigate = useNavigate();
    return (
        <div className="CustomNavbar">
            <div className="brand" onClick={() => navigate("/")}>
                Andy Hua Blog
            </div>
            <div className="links">
                <div className="nav-btn" onClick={() => navigate("/")}>
                    Home
                </div>
                <div className="nav-btn">New Blog</div>
                <Login />
                <Register />
                <div className="nav-btn" onClick={() => navigate("/about")}>
                    About
                </div>
            </div>
        </div>
    );
};

export default CustomNavbar;
