import { db, auth } from "../helpers/firebase";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async e => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            await updateProfile(auth.currentUser, registerUsername);
        } catch (err) {
            return err.message.replace("Firebase:", "");
        }
        setRegisterEmail("");
        setRegisterPassword("");
        setRegisterUsername("");
    };

    const handleLogin = async e => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (err) {
            return err.message.replace("Firebase:", "");
        }
        setLoginEmail("");
        setLoginPassword("");
        navigate("/");
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
