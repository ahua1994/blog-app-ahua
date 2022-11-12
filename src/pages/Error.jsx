import { useNavigate } from "react-router-dom";
import "./Error.scss";

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="Error">
            <img
                src="https://static.sadhguru.org/d/46272/1633494726-1633494725568.jpg"
                alt="lost"
            />
            <h1>Life is a journey through many paths, but this is not one of them.</h1>
            <button onClick={() => navigate("/")}>Return</button>
        </div>
    );
};

export default Error;
