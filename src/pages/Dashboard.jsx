import "./Dashboard.scss";
import { db } from "../helpers/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const { toastStyle } = useContext(BlogContext);

    useEffect(() => {
        onSnapshot(collection(db, "posts"), querySnapshot => {
            try {
                let data = querySnapshot.docs.map(doc => ({ ...doc.data(), postId: doc.id }));
                data.sort((a, b) => new Date(b.date.slice(6)) - new Date(a.date.slice(6)));
                setBlogs(data);
            } catch (err) {
                toast.error(err.message.replace("Firebase:", ""), toastStyle);
            }
        });
    }, []);
    // console.log(blogs);
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
