import react, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import "./allHistory.css"
import Datatable from '../datatable';
require("es6-promise").polyfill()
require("isomorphic-fetch")


const AllHistory = () => {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");


    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then((json) => setData(json))
    }, []);

    function search(rows) {
        const colums = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
           colums.some(
               (column) => row[column].toString().toLowerCase().indexOf(q.toLowerCase())> -1
               )
            );
    }

    return (
        <div>
            <Sidebar />
            <div className="outercontainer">
                <div class="container">
                    <div class="child">
                        <h2>ALL HISTORY</h2>
                         <br/>
                            <div class="container-fluid">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search here..." aria-label="Search" />
                                    <button  type="button" class="btn btn-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                        </button>
                                </form>
                            </div>
                    
                        <div>
                            <Datatable data={search(data)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllHistory;