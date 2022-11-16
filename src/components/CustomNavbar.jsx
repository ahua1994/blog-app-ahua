import "./CustomNavbar.scss";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import AddBlog from "./AddBlog";

const CustomNavbar = () => {
    const { currentUser, logout, setCurrentUser, userObserver } = useContext(AuthContext);
    useEffect(() => userObserver(setCurrentUser), []);
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
                <div className="nav-btn" onClick={() => navigate("/about")}>
                    About
                </div>
                {currentUser ? (
                    <>
                        <AddBlog user={currentUser}/>
                        <div className="nav-btn">
                            {currentUser.displayName} <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <div className="nav-btn" onClick={logout}>
                            Sign Out
                        </div>
                    </>
                ) : (
                    <>
                        <Login />
                        <Register />
                    </>
                )}
            </div>
        </div>
    );
};

export default CustomNavbar;
