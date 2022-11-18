import React from "react";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const EditBlog = ({ user, blog }) => {
    const { style, post, setPost, openEditBlog, setOpenEditBlog, handleChange, editPost } =
        useContext(BlogContext);
    const handleEdit = e => {
        e.preventDefault();
        editPost(blog.postId);
        setOpenEditBlog(false);
        setPost({});
    };
    // console.log("editblog");
    return (
        <>
            <Button
                onClick={() => {
                    let newPost = { ...blog };
                    newPost.date = `Edited ${new Date().toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}`;
                    setPost(newPost);
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
                    setPost({});
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
                            value={post.title || ""}
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Image URL"
                            variant="outlined"
                            name="image"
                            onChange={e => handleChange(e)}
                            value={post.image || ""}
                        />
                        <TextField
                            style={{ marginTop: "2rem" }}
                            label="Info"
                            variant="outlined"
                            required
                            name="info"
                            onChange={e => handleChange(e)}
                            value={post.info || ""}
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
