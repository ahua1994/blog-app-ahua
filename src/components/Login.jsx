import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import google from "../images/google.png";

export default function Login() {
    const {
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        handleLogin,
        signInProvider,
    } = useContext(AuthContext);
    const { style, openLogin, setOpenLogin, handleSwitch } = useContext(BlogContext);

    return (
        <>
            <div onClick={() => setOpenLogin(true)} className={"nav-btn"}>
                Login
            </div>
            <Modal
                open={openLogin}
                onClose={() => {
                    setLoginEmail("");
                    setLoginPassword("");
                    setOpenLogin(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleLogin}>
                    <Box sx={style}>
                        <Typography
                            style={{ textAlign: "center" }}
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            Login
                        </Typography>
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Email"
                            variant="outlined"
                            type="email"
                            onChange={e => setLoginEmail(e.target.value)}
                            value={loginEmail}
                            required
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Password"
                            variant="outlined"
                            type="password"
                            onChange={e => setLoginPassword(e.target.value)}
                            value={loginPassword}
                            required
                        />
                        <Typography style={{ marginTop: "2rem", textAlign: "center" }}>
                            Don't have an account?{" "}
                            <span
                                style={{ cursor: "pointer", color: "dodgerblue" }}
                                onClick={() => {
                                    handleSwitch();
                                    setLoginEmail("");
                                    setLoginPassword("");
                                }}
                            >
                                Register Here!
                            </span>
                        </Typography>
                        <Button
                            size="large"
                            style={{ marginTop: "2rem", backgroundColor: "#333" }}
                            variant="contained"
                            onClick={() => {
                                signInProvider();
                                setOpenLogin(false);
                            }}
                        >
                            <img style={{ width: "25px" }} src={google} alt="g-icon"></img>
                            &nbsp;&nbsp;&nbsp;&nbsp; Continue With Google
                        </Button>
                        <Button
                            type="submit"
                            style={{ marginTop: "2rem", fontSize: "1.05rem" }}
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Modal>
        </>
    );
}
