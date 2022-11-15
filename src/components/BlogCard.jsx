import "./BlogCard.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BlogCard = ({ blog }) => {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: "#f44336" }}>R</Avatar>}
                title={`${blog.title} by `}
                // subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={blog.image || `https://picsum.photos/300`}
                alt="img"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {blog.info}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
