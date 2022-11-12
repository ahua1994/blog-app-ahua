import { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const handleSwitch = () => {
        setOpenLogin(!openLogin);
        setOpenRegister(!openRegister);
    };
    return (
        <BlogContext.Provider
            value={{ openLogin, openRegister, setOpenLogin, setOpenRegister, handleSwitch }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;
