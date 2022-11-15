import { auth } from "../helpers/firebase";
import { toast } from "react-toastify";
import { createContext, useState, useContext } from "react";
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { BlogContext } from "./BlogContext";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [currentUser, setCurrentUser] = useState();
    const [loginPassword, setLoginPassword] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const { handleSwitch, setOpenLogin } = useContext(BlogContext);
    const toastStyle = {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        hideProgressBar: true,
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

    const forgetPassword = async email => {
        try {
            await sendPasswordResetEmail(auth, email);
            return toast.success("Please Check Your Inbox", toastStyle);
        } catch (err) {
            return toast.error(err.message.replace("Firebase:", ""), toastStyle);
        }
    };

    const signInProvider = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        toast.success("Login Successful !", toastStyle);
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
        toast.success("Login Successful !", toastStyle);
        setOpenLogin(false);
    };

    const userObserver = setCurrentUser => {
        onAuthStateChanged(auth, user => {
            if (user) setCurrentUser(user);
            else setCurrentUser(null);
        });
    };

    const logout = () => {
        toast.info("You Have Been Signed Out", toastStyle);
        signOut(auth);
    };

    return (
        <AuthContext.Provider
            value={{
                loginEmail,
                loginPassword,
                registerUsername,
                registerEmail,
                registerPassword,
                currentUser,
                setLoginEmail,
                setLoginPassword,
                setRegisterUsername,
                setRegisterEmail,
                setRegisterPassword,
                handleLogin,
                handleRegister,
                signInProvider,
                logout,
                setCurrentUser,
                userObserver,
                forgetPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
