import "./Profile.scss";
import BlogCard from "../components/BlogCard";
import { useContext, useEffect } from "react";
import { BlogContext } from "../contexts/BlogContext";

const Profile = () => {
    const { getPosts, blogs } = useContext(BlogContext);

    useEffect(() => {
        getPosts();
    }, []);

    return <div className="MyPosts"> </div>;
};

export default Profile;
