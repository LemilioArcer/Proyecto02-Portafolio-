import { Link } from "react-router";
import "./Aboutme.css";

const Aboutme = () =>{
    return(
        <>
        <div className="text-container">
            <h1 className="title">About Me</h1>

            <p className="description-text">
            I enjoy building projects that connect technology with real-world needs, from smart IoT systems to scalable network designs and interactive applications.
            </p>

            <p className="description-text">
            I have experience working with frontend development, C++ logic and problem solving, Python data analysis, and networking with Cisco technologies, which allows me to approach problems from different perspectives.
            </p>

            <p className="description-text">
            I’m a very creative person — I like imagining ideas and turning them into something real. I also play the piano and compose music, which helps me think differently and bring a more creative approach into my projects.
            </p>

            <p className="links">
                <Link to="/"> Go back</Link>
            </p>
        </div>
        </>
    );
};

export default Aboutme;