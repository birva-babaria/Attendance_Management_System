import Sidebar from "../sidebar/sidebar";
import "./contactUs.css"
const Contactus = () => {

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <div class="wrapper">
                            <h2>KEEP IN TOUCH</h2>
                            <div class="container1">
                                <div style={{ textalign: 'center' }}>
                                    <p>You can send us message from here. It's our pleasure to help you</p>
                                </div>
                                <div class="row">
                                    <div class="column">
                                        <img src="https://image.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" style={{ width: 400 }} />
                                    </div>
                                    <div class="column">
                                        <form action="/action_page.php">
                                            <label for="fname">First Name</label>
                                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                            <label for="lname">Last Name</label>
                                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                            <label for="country">Country</label>
                                            <select id="country" name="country">
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="canada">Canada</option>
                                                <option value="usa">USA</option>
                                            </select>
                                            <label for="subject">Subject</label>
                                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 150 }}></textarea>
                                            <input type="submit" value="Submit" />
                                        </form>
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

export default Contactus;