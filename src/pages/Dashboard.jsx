import "./Dashboard.scss";
import { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
    const { getPosts, blogs } = useContext(BlogContext);

    useEffect(() => {
        getPosts();
    }, []);
    console.log("dahsboard");
    return (
        <div className="Dashboard">
            <div className="blogs">
                {blogs?.map(blog => (
                    <BlogCard key={blog.postId} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
