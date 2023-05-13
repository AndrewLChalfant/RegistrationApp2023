import React, { useState } from 'react';

// Form to collect student PII 
export const StudentForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ssn, setSSN] = useState("");
    const [dob, setDOB] = useState("");

    const student = { firstName, lastName, ssn, dob };

    return (
        <>
            <form onSubmit={(e) => {
                onSubmit(student);
                e.preventDefault()}}
            >
            <label>
                First Name
                <input
                    type="text"
                    maxLength={64}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        maxLength={64}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    SSN 4
                    <input
                        type="password"
                        maxLength={4}
                        value={ssn}
                        onChange={(e) => setSSN(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Date of Birth
                    <input
                        type="text"
                        maxLength={10}
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                        placeholder={"DD-MM-YYYY"}
                        required
                    />
                </label>
                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    )
}