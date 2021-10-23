import Sidebar from "../sidebar/sidebar";
import "./about.css"

const About = () => {

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <div class="about-section">
                            <h1>About Us</h1>
                        </div>
                        <h2 style={{textalign:'center'}}>Team Member</h2>
                        <div class="row">
                            <div class="column">
                                <div class="card">
                                    <div class ="container">
                                    <h2>Birva Babaria</h2>
                                    <p class ="title">Student at Dharmsinh Desai University</p>
                                    <p>Persuing B.Tech in Computer Engineering At DDU</p>
                                    <p>birvababaria@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div class="column">
                                <div class="card">
                                
                                    <div class ="container">
                                    <h2>Dharmi Chavda</h2>
                                    <p class ="title">Student at Dharmsinh Desai University</p>
                                    <p>Persuing B.Tech in Computer Engineering At DDU</p>
                                    <p>dharmi6319@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;