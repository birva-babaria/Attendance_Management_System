import Sidebar from "../sidebar/sidebar";
import "./allHistory.css"

const AllHistory= () => {
    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <h1>ALL HISTORY</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllHistory;