import { db, auth } from "../helpers/firebase";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { createContext, useState, useContext } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { BlogContext } from "./BlogContext";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const { handleSwitch, setOpenLogin } = useContext(BlogContext);
    const toastStyle = {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
    };

    const handleRegister = async e => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            await updateProfile(auth.currentUser, registerUsername);
        } catch (err) {
            return toast.error(err.message.replace("Firebase:", ""), toastStyle);
        }
        setRegisterEmail("");
        setRegisterPassword("");
        setRegisterUsername("");
        toast.success("Registered Successfully!", toastStyle);
        handleSwitch();
    };

    const handleLogin = async e => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (err) {
            return toast.error(err.message.replace("Firebase:", ""), toastStyle);
        }
        setLoginEmail("");
        setLoginPassword("");
        toast.success("Login Successful!", toastStyle);
        setOpenLogin(false);
    };

    return (
        <AuthContext.Provider
            value={{
                loginEmail,
                loginPassword,
                registerUsername,
                registerEmail,
                registerPassword,
                setLoginEmail,
                setLoginPassword,
                setRegisterUsername,
                setRegisterEmail,
                setRegisterPassword,
                handleLogin,
                handleRegister,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
