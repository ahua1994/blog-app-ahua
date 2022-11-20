import "./About.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
    return (
        <div className="container">
            <div className="About">
                <h1>Hello My Name Is Andy Hua!</h1>
                <p className="intro">
                    I am currently a student at Clarusway, and I am studying React.<br></br> This is
                    a blog app created using what we've learned so far!
                </p>
                <div className="info">
                    <div>
                        <a href="https://github.com/ahua1994">
                            <GitHubIcon /> ahua1994
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/andy-hua-125431168/">
                            <LinkedInIcon /> Andy Hua
                        </a>
                    </div>
                    <div className="email">
                        <EmailIcon /> user.andy.hua@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
