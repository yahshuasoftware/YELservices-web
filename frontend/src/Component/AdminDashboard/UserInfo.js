import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../../common/Apis";

const UserInfo = () => {
  const { userId } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const url=`${SummaryApi.users.url}/${userId}`
      // console.log("this is url",url)
      try {
        const response = await fetch(
         url
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const certificatesList = user.certificatesApplied.map((certificate)=>(
    <div key={certificate}>
      
      <h3>{certificate.certificateName}</h3>
      <p>Status:  {certificate.status}</p>
    </div>
    ));
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold">User Information</h1>
      <table className="table-auto border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Certificates Applied</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="border px-4 py-2">{user.role}</td>
            
            <td className="border px-4 py-2">
              {certificatesList.length > 0 ? certificatesList : <p>No certificates applied yet.</p>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
