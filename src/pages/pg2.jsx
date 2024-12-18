import React from "react";
import { useLocation } from "react-router-dom";

export const SummaryPage = ()=> {
    const location = useLocation();
    const data = location.state;

    return(
        <div className="p-6 bg-[#aab6bd] text-[#394d52]">
            <h1 className="text-2xl font-bold mb-4 flex justify-center">Submitted Data</h1>
            <div className="border p-4 rounded-lg bg-gray-50">
                <h2 className="font-semibold text-xl mb-2">Talent Details</h2>
                <p><strong>Category:</strong> {data.category}</p>
                <p><strong>Other Talent:</strong> {data.otherTalent}</p>
                <p><strong>Description:</strong> {data.description}</p>
                <p><strong>Duration:</strong> {data.duration}</p>
                <p><strong>Requirements:</strong> {data.requirements}</p>

                <h2 className="font-semibold text-xl mt-4 mb-2">Participant Details</h2>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Date of Birth:</strong> {data.dob}</p>
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Contact:</strong> {data.contact}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Address:</strong> {data.address}</p>

                <h2 className="font-semibold text-xl mt-4 mb-2">Guardian Details</h2>
                <p><strong>Guardian Name:</strong> {data.guardianName}</p>
                <p><strong>Relationship:</strong> {data.relationship}</p>
                <p><strong>Guardian Contact:</strong> {data.guardianContact}</p>
                <p><strong>Guardian Email:</strong> {data.guardianEmail}</p>

                <h2 className="font-semibold text-xl mt-4 mb-2">School Details</h2>
                <p><strong>School Name:</strong> {data.schoolName}</p>
                <p><strong>Class/Year:</strong> {data.classYear}</p>

                <h2 className="font-semibold text-xl mt-4 mb-2">Documents</h2>
                <p><strong>ID Proof:</strong> {data.idProof?.name || "Not Uploaded"}</p>
                <p><strong>Photo:</strong> {data.photo?.name || "Not Uploaded"}</p>
            </div>
        </div>
    );
}

