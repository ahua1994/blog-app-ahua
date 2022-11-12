import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { BlogContext } from "../contexts/BlogContext";

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
    const { openLogin, setOpenLogin, handleSwitch } = useContext(BlogContext);

    return (
        <div>
            <div onClick={() => setOpenLogin(true)} className={"nav-btn"}>
                Login
            </div>
            <Modal
                open={openLogin}
                onClose={() => setOpenLogin(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        style={{ marginTop: "2rem" }}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />
                    <Typography style={{ marginTop: "2rem", textAlign: "center" }}>
                        Don't have an account?{" "}
                        <span
                            style={{ cursor: "pointer", color: "dodgerblue" }}
                            onClick={handleSwitch}
                        >
                            Register Here!
                        </span>
                    </Typography>
                    <Button style={{ marginTop: "2rem" }} variant="contained">
                        Submit
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
