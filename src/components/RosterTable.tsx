import React from 'react';

// Table component that takes student data as a prop
export const RosterTable = ({ data }) => {
    const rows = data?.map((x, i) => (
        <tr>
            <td key={`${i}-1`}>{x?.firstName}</td>
            <td key={`${i}-2`}>{x?.lastName}</td>
            <td key={`${i}-3`}>{x?.dob}</td>
            <td key={`${i}-4`}>{x?.ssn}</td>
         </tr>
    ));

    return (
        <div className="table-responsive-md">
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>SSN</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}