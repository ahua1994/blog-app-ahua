import { db } from "../helpers/firebase";
import { toast } from "react-toastify";
import { createContext, useState } from "react";
import { addDoc, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openAddBlog, setOpenAddBlog] = useState(false);
    const [openEditBlog, setOpenEditBlog] = useState(false);
    const [post, setPost] = useState({});

    const toastStyle = {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
    };

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

    const addPost = async () => {
        try {
            await addDoc(collection(db, "posts"), post);
            toast.success("Thank You For Posting!", toastStyle);
        } catch (err) {
            toast.error(err.message.replace("Firebase:", ""), toastStyle);
        }
    };

    // const editPost = async editId => {
    //     const docRef = doc(db, "/posts/" + editId);
    //     try {
    //         await setDoc(docRef, post);
    //         toast.success("Your Post Has Been Edited!", toastStyle);
    //     } catch (err) {
    //         toast.error(err.message.replace("Firebase:", ""), toastStyle);
    //     }
    // };

    const deletePost = async id => {
        try {
            await deleteDoc(doc(db, "posts", id));
            toast.info("Your Post Has Been Deleted", toastStyle);
        } catch (err) {
            toast.error(err.message.replace("Firebase:", ""), toastStyle);
        }
    };

    const handleSwitch = () => {
        setOpenLogin(!openLogin);
        setOpenRegister(!openRegister);
    };

    const handleChange = e => {
        let newPost = { ...post };
        newPost[e.target.name] = e.target.value;
        setPost(newPost);
    };

    return (
        <BlogContext.Provider
            value={{
                post,
                openLogin,
                openRegister,
                openAddBlog,
                openEditBlog,
                style,
                toastStyle,
                setPost,
                editPost,
                deletePost,
                setOpenLogin,
                setOpenRegister,
                setOpenAddBlog,
                setOpenEditBlog,
                handleSwitch,
                handleChange,
                addPost,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
