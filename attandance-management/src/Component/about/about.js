import Sidebar from "../sidebar/sidebar";
import "./about.css"
const About = () => {
    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <h1>ABOUT US</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;