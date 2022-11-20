import "./BlogCard.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import EditBlog from "./EditBlog";

const BlogCard = ({ blog }) => {
    const { currentUser } = useContext(AuthContext);
    const { deletePost, setLikes } = useContext(BlogContext);

    return (
        <Card className="blogcard" sx={{ width: "380px" }}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: "#f44336" }}>{blog.author[0].toUpperCase()}</Avatar>}
                title={blog.title.length > 20 ? blog.title.slice(0, 20) + "..." : blog.title}
                subheader={`by ${blog.author}`}
            />
            <CardMedia
                component="img"
                height="194"
                image={blog.image || `https://picsum.photos/300`}
                alt="invalid img-url"
            />
            <CardContent>
                <Typography
                    style={{ marginBottom: "0.5rem", textAlign: "right", fontSize: "0.8rem" }}
                    variant="body2"
                >
                    {blog.date}
                </Typography>
                <Typography variant="body2">
                    {blog.info.length > 85 ? `${blog.info.slice(0, 85)}...` : blog.info}
                </Typography>
            </CardContent>
            <CardActions>
                <div className="buttons">
                    <Link to={`/details/${blog.postId}`} state={{ blog }}>
                        <Button
                            color="secondary"
                            style={{ marginLeft: "0.6rem" }}
                            variant="contained"
                        >
                            More
                        </Button>
                    </Link>
                    {currentUser?.uid === blog.userId && (
                        <>
                            <EditBlog blog={blog} />
                            <Button
                                color="error"
                                style={{ marginLeft: "0.6rem" }}
                                variant="contained"
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this?")) {
                                        deletePost(blog.postId);
                                    }
                                }}
                            >
                                Del
                            </Button>
                        </>
                    )}
                </div>
                <IconButton onClick={() => setLikes(blog, currentUser?.uid)}>
                    {blog?.likes?.length !== 0 && <p className="likes">{blog?.likes?.length}</p>}
                    <FavoriteIcon
                        style={{ color: blog?.likes?.includes(currentUser?.uid) ? "red" : null }}
                    />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
