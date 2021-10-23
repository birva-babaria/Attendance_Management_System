import React from "react";


export default function Datatable({ data }) {
  
    const colums = data[0] && Object.keys(data[0])
    return (
        <table cellPadding={24} cellSpacing={24}>
            <thead>
                <tr>{data[0] && colums.map(heading => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {data.map(row => <tr>
                    {
                        colums.map(column => {
                            return <td>{row[column]}</td>;
                        })
                    }
                </tr>)}
            </tbody>
        </table>
    );
}