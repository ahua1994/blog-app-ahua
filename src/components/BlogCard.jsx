import "./BlogCard.scss";
import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import EditBlog from "./EditBlog";
import Details from "../pages/Details";

const BlogCard = ({ blog }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Card>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: "#f44336" }}>{blog.author[0] || "?"}</Avatar>}
                title={blog.title}
                subheader={`by ${blog.author}`}
            />
            <CardMedia
                component="img"
                height="194"
                image={blog.image || `https://picsum.photos/300`}
                alt="img"
            />
            <CardContent>
                <Typography style={{ textAlign: "right", fontSize: "0.8rem" }} variant="body2">
                    {blog.date}
                </Typography>
                <Typography variant="body2">
                    {blog.info.length > 85 ? `${blog.info.slice(0, 85)}...` : blog.info}
                </Typography>
            </CardContent>
            <CardActions>
                <div className="buttons">
                    {currentUser?.uid === blog.userId && (
                        <>
                            <Button
                                color="error"
                                style={{ marginLeft: "0.6rem" }}
                                variant="contained"
                            >
                                Del
                            </Button>
                            <EditBlog user={currentUser} blog={blog} />
                        </>
                    )}
                    <Details />
                </div>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
