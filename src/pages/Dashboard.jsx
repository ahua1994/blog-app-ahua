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
    // const getPosts = async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, "posts"));
    //         setBlogs(querySnapshot.docs.map(doc => ({ ...doc.data(), postId: doc.id })));
    //     } catch (err) {
    //         toast.error(err.message.replace("Firebase:", ""), toastStyle);
    //     }
    // };

    useEffect(() => {
        onSnapshot(collection(db, "posts"), querySnapshot => {
            try {
                setBlogs(querySnapshot.docs.map(doc => ({ ...doc.data(), postId: doc.id })));
            } catch (err) {
                toast.error(err.message.replace("Firebase:", ""), toastStyle);
            }
        });
    }, []);
    // console.log(blogs);
    return (
        <div className="Dashboard">
            <input type="text" placeholder="Search" />
            <button>Search</button>
            <div className="blogs">
                {blogs?.map(blog => (
                    <BlogCard key={blog.postId} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
