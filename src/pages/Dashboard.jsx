import "./Dashboard.scss";
import { useContext, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
    const { getPosts, blogs } = useContext(BlogContext);
    useEffect(() => {
        getPosts();
    }, []);
    console.log(blogs);
    return (
        <div className="Dashboard">
            <input type="text" placeholder="Search" />
            <button>Search</button>
            <div className="blogs">
                {blogs?.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
