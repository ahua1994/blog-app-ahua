import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";

export default function Register() {
    const { style, openRegister, setOpenRegister, handleSwitch } = useContext(BlogContext);
    const {
        registerUsername,
        registerEmail,
        registerPassword,
        setRegisterUsername,
        setRegisterEmail,
        setRegisterPassword,
        handleRegister,
    } = useContext(AuthContext);

    return (
        <>
            <div onClick={() => setOpenRegister(true)} className={"nav-btn"}>
                Register
            </div>
            <Modal
                open={openRegister}
                onClose={() => {
                    setRegisterEmail("");
                    setRegisterPassword("");
                    setRegisterUsername("");
                    setOpenRegister(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleRegister}>
                    <Box sx={style}>
                        <Typography
                            style={{ textAlign: "center" }}
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            Register
                        </Typography>
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Username"
                            variant="outlined"
                            onChange={e => setRegisterUsername(e.target.value)}
                            value={registerUsername}
                            required
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Email"
                            variant="outlined"
                            onChange={e => setRegisterEmail(e.target.value)}
                            value={registerEmail}
                            type="email"
                            required
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Password"
                            variant="outlined"
                            onChange={e => setRegisterPassword(e.target.value)}
                            value={registerPassword}
                            type="password"
                            required
                        />
                        <Typography style={{ marginTop: "2rem", textAlign: "center" }}>
                            Already have an account?{" "}
                            <span
                                style={{ cursor: "pointer", color: "dodgerblue" }}
                                onClick={() => {
                                    handleSwitch();
                                    setRegisterUsername("");
                                    setRegisterEmail("");
                                    setRegisterPassword("");
                                }}
                            >
                                Login Here!
                            </span>
                        </Typography>
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
