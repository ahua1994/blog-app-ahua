import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [openAddBlog, setOpenAddBlog] = useState(false);
    const [openEditBlog, setOpenEditBlog] = useState(false);
    const [post, setPost] = useState({});
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
    const handleSwitch = () => {
        setOpenLogin(!openLogin);
        setOpenRegister(!openRegister);
    };
    return (
        <BlogContext.Provider
            value={{
                post,
                openLogin,
                openRegister,
                openAddBlog,
                style,
                setPost,
                setOpenLogin,
                setOpenRegister,
                setOpenAddBlog,
                handleSwitch,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
