import "./Details.scss";
import { Button, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { blog } = location.state;
    const { currentUser } = useContext(AuthContext);
    const { setLikes } = useContext(BlogContext);

    return (
        <div className="Details">
            <div className="post">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#f44336" }}>{blog.author[0].toUpperCase()}</Avatar>
                    }
                    title={blog.author}
                    subheader={`@ ${blog.author}`}
                />
                <hr style={{ width: "100%" }}></hr>
                <h2 className="title">{blog.title} </h2>
                <img src={blog.image || "https://picsum.photos/1000"} alt={"invalid img-url"} />
                <hr style={{ width: "100%" }}></hr>
                <p className="date">{blog.date}</p>
                <p className="info">{blog.info}</p>
                <div className="btn">
                    <IconButton>
                        <Button onClick={() => navigate(-1)} color="secondary" variant="contained">
                            Back
                        </Button>
                    </IconButton>
                    <IconButton onClick={() => setLikes(blog, currentUser?.uid)} className="right">
                        {blog?.likes?.length !== 0 && (
                            <p className="likes">{blog?.likes?.length}</p>
                        )}
                        <FavoriteIcon
                            style={{
                                color: blog?.likes?.includes(currentUser?.uid) ? "red" : null,
                            }}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Details;
