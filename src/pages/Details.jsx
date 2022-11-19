import "./Details.scss";
import { Button, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { blog } = location.state;
    console.log("details");
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
                <IconButton className="like-btn">
                    <FavoriteIcon />
                </IconButton>
            </div>
            <Button onClick={() => navigate(-1)} color="secondary" variant="contained">
                Back
            </Button>
        </div>
    );
};

export default Details;
