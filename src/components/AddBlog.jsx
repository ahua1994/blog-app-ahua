import { useContext } from "react";
import { db } from "../helpers/firebase";
import { BlogContext } from "../contexts/BlogContext";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const AddBlog = () => {
    const { addPost, style, post, setPost, openAddBlog, setOpenAddBlog } = useContext(BlogContext);

    //might be reusable in EditBlog
    const handleChange = e => {
        let newPost = { ...post };
        newPost[e.target.name] = e.target.value;
        setPost(newPost);
    };
    const handleSubmit = e => {
        e.preventDefault();
        addPost();
        setOpenAddBlog(false);
        setPost({});
    };

    return (
        <>
            <div onClick={() => setOpenAddBlog(true)} className={"nav-btn"}>
                New Blog
            </div>
            <Modal
                open={openAddBlog}
                onClose={() => {
                    setOpenAddBlog(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>
                        <Typography
                            style={{ textAlign: "center" }}
                            id="modal-modal-title"
                            variant="h4"
                            component="h2"
                        >
                            Make A Post
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

export default AddBlog;
