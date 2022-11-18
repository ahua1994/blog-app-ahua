import React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const blog = location.state;
    console.log(blog, "details");
    return (
        <>
            <Button onClick={() => navigate(-1)} color="secondary" variant="contained">
                Back
            </Button>
        </>
    );
};

export default Details;
