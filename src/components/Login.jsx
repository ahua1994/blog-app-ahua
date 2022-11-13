import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
};

export default function Login() {
    const { loginEmail, loginPassword, setLoginEmail, setLoginPassword, handleLogin } =
        useContext(AuthContext);
    const { openLogin, setOpenLogin, handleSwitch } = useContext(BlogContext);

    return (
        <div>
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
                        <Button type="submit" style={{ marginTop: "2rem" }} variant="contained">
                            Continue With Google
                        </Button>
                        <Button type="submit" style={{ marginTop: "2rem" }} variant="contained">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}
