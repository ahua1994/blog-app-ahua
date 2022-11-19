// import { useState } from "react";
// import { db } from "../helpers/firebase";
// import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { Button, TextField, Typography } from "@mui/material";
// import { doc, setDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const EditBlog = ({ user, blog }) => {
    const { style, openEditBlog, setOpenEditBlog, editPost, edited, setEdited } =
        useContext(BlogContext);
    // const [edited, setEdited] = useState({});

    // const editPost = async editId => {
    //     const docRef = doc(db, "/posts/" + editId);
    //     try {
    //         await setDoc(docRef, edited);
    //         toast.success("Your Post Has Been Edited!", toastStyle);
    //     } catch (err) {
    //         toast.error(err.message.replace("Firebase:", ""), toastStyle);
    //     }
    // };
    const handleChange = e => {
        let newPost = { ...edited };
        newPost[e.target.name] = e.target.value;
        setEdited(newPost);
    };
    console.log(edited);
    const handleEdit = e => {
        e.preventDefault();
        editPost(edited);
        setOpenEditBlog(false);
    };
    return (
        <>
            <Button
                onClick={() => {
                    let newPost = { ...blog };
                    let date = new Date();
                    newPost.date = `Edited ${date.toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })} at ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
                    setEdited(newPost);
                    setOpenEditBlog(true);
                }}
                color="success"
                style={{ marginLeft: "0.6rem" }}
                variant="contained"
            >
                Edit
            </Button>
            <Modal
                open={openEditBlog}
                onClose={() => {
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
                            value={edited.title || ""}
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Image URL"
                            variant="outlined"
                            name="image"
                            onChange={e => handleChange(e)}
                            value={edited.image || ""}
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Entry"
                            variant="outlined"
                            required
                            name="info"
                            onChange={e => handleChange(e)}
                            value={edited.info || ""}
                            minRows="4"
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
        </>
    );
};

export default EditBlog;
