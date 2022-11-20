// import { useState } from "react";
// import { db } from "../helpers/firebase";
// import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { Button, TextField, Typography } from "@mui/material";
// import { doc, setDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const EditBlog = ({ blog }) => {
    const { style, openEditBlog, setOpenEditBlog, editPost } = useContext(BlogContext);
    const [edited, setEdited] = useState({});
    const [editing, setEditing] = useState(false);

    const handleChange = e => {
        let newPost = { ...edited };
        newPost[e.target.name] = e.target.value;
        setEdited(newPost);
    };
    const handleEdit = e => {
        e.preventDefault();
        editPost(edited);
        setOpenEditBlog(false);
    };
    return (
        <>
            <Button
                onClick={() => {
                    setEditing(true);
                    setEdited({ ...blog });
                    setOpenEditBlog(true);
                }}
                color="success"
                style={{ marginLeft: "0.6rem" }}
                variant="contained"
            >
                Edit
            </Button>
            {editing && (
                <Modal
                    open={openEditBlog}
                    onClose={() => {
                        setEditing(false);
                        setEdited({});
                        setOpenEditBlog(false);
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form onSubmit={handleEdit}>
                        <Box sx={style}>
                            <Typography
                                style={{ textAlign: "center" }}
                                id="modal-modal-title"
                                variant="h4"
                                component="h2"
                            >
                                Edit Your Post
                            </Typography>
                            <TextField
                                style={{ marginTop: "2rem" }}
                                label="Title"
                                variant="outlined"
                                required
                                name="title"
                                onChange={e => handleChange(e)}
                                value={edited.title}
                            />
                            <TextField
                                style={{ marginTop: "2rem" }}
                                label="Image URL"
                                variant="outlined"
                                name="image"
                                onChange={e => handleChange(e)}
                                value={edited.image}
                            />
                            <TextField
                                style={{ marginTop: "2rem" }}
                                label="Entry"
                                variant="outlined"
                                required
                                name="info"
                                onChange={e => handleChange(e)}
                                value={edited.info}
                                minRows="4"
                                maxRows="10"
                                multiline
                            />
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
            )}
        </>
    );
};

export default EditBlog;
