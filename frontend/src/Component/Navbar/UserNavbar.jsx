import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserNavbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state
  const navigate =useNavigate();
 
  
  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem('token');
  
    // Show success toast
    toast.success('Logged out successfully!', {
      position: "top-right",
    });
  console.log('redirecting to the page')
    // Redirect to login or home page
    navigate('/login'); // Adjust the route as needed
  };
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log("token test"    + token)
    if (token) {
      try {
        // const decoded = jwtDecode(token);
        // setUser(decoded);
        
        // Fetch user profile data from the API
        const fetchUserData = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/profile', {
              method: 'GET',
              headers: {
                'Authorization': token,
              },
            });

            // console.log("ttttt" + response)
  
            // Check if the response is successful
            if (!response.ok) {
              const errorText = await response.text(); // Get the response as text (likely HTML)
              throw new Error(`Error ${response.status}: ${errorText}`);
            }
  
            // Parse the response as JSON
            const userData = await response.json();
            setUser(userData);
            // console.log("user data " + userData)
          } catch (error) {
            // console.error("Error fetching user profile:", error.message);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
  
        fetchUserData();
      } catch (error) {
        console.error("Invalid token", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="justify-between">
        <ul className="pl-10 pr-10 grid md:grid-cols-8 grid-cols-4 lg:grid-cols-8 bg-gray-300">
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
            <span className="m-1"><IoMdHome /></span>Home
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
            <span className="m-1"><FaPhoneAlt /></span>CONTACT US
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
            <span className="m-1"><FaUser /></span>{user.name}
          </li>
          <Link to="/userdashboard">
            <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
              <span className="m-1"><FaTachometerAlt /></span>DASHBOARD
            </li>
          </Link>
          <button onClick={handleLogout} className="bg-red-800 text-white py-2 px-4 rounded hover:bg-black" >logout</button>

        </ul>
      </div>
    </div>
  );
};

export default UserNavbar;
