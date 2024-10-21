 import React from "react";
import { useNavigate } from "react-router-dom";

const RationCard = () => {
    const navigate = useNavigate();

    const handlenavigate = () => {
        navigate("/userdashboard/serviceslist")
     
       };
    return (
        <>
            <h2 className="text-3xl flex justify-center font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
                Application for Ration Card Services
            </h2>
            <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-2 p-4">

                {/* Application for New Ration Card */}
                <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6 hover:bg-blue-100 transition-colors duration-300">
                    <h2 className="text-lg font-semibold mb-2">
                        Application for New Ration Card
                    </h2>
                    <p>
                        Use this form to apply for a new ration card. This is applicable for
                        those who do not have a ration card or want to apply for a fresh one
                        under the state rationing scheme.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>
                            <a className="text-blue-600 hover:underline">
                                Read Instructions
                            </a>
                        </li>
                        <li>
                            <a  className="text-blue-600 hover:underline">
                                Documents to be Submitted
                            </a>
                        </li>
                    </ul>
                    <a
                        onClick={handlenavigate}
                        className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                    >
                        Apply for New Ration Card
                    </a>
                </div>

                {/* Application for Correction/Update in Ration Card */}
                <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6 hover:bg-blue-100 transition-colors duration-300">
                    <h2 className="text-lg font-semibold mb-2">
                        Correction/Update in Ration Card Data
                    </h2>
                    <p>
                        If you already have a ration card but need to update or correct the
                        details (e.g., name, address, family members), you can submit a
                        request here. The corrected ration card with updated details will be
                        issued to you.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>
                            <a className="text-blue-600 hover:underline">
                                Read Instructions
                            </a>
                        </li>
                        <li>
                            <a className="text-blue-600 hover:underline">
                                Documents to be Submitted
                            </a>
                        </li>
                    </ul>
                    <a
                        onClick={handlenavigate}
                        className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                    >
                        Apply for Correction
                    </a>
                </div>


            </div>
        </>
    );
};

export default RationCard;